import React, { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(true);
  const logoutHandler = async () => {
    try {
      const response = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("User Logged Out Successfully!");
      window.location.reload();
    } catch (error) {
      toast.error("Error: ", error);
    }
  };

  return (
    <div className="h-[8vh] flex justify-start items-center bg-slate-900">
      <div className="w-[25%] ml-5 rounded-full text-black bg-white">
        <RiLogoutCircleLine
          onClick={logoutHandler}
          className="text-4xl hover:bg-blue-500 duration-300 cursor-pointer rounded-full ml-2"
        />
      </div>
    </div>
  );
}

export default Logout;
