import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";

dotenv.config();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}

app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// code for deployment

if (process.env.NODE_ENV === "production") {
  const dirPath = path.resolve();
  app.use(express.static("./FRONT_END/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirPath, "./FRONT_END/dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
