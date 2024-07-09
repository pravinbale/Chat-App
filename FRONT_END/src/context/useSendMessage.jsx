import React, { useState } from "react";
import axios from "axios";
import useConversation from "../components/zustand/useConversation.js";

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );
      setMessages([...messages, res.data]);
      setLoading(false);
    } catch (error) {
      console.log("error in sending message", error);
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};
