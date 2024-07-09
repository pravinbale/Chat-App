import React from "react";
import useConversation from "../../components/zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { IoArrowBackCircleOutline } from "react-icons/io5";

function ChatUser() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className="flex py-1 h-[8vh] space-x-3 items-center justify-start bg-gray-800 hover:bg-gray-700 duration-300">
      <span
        onClick={() => setSelectedConversation(null)}
        className={`text-4xl rounded-full mx-3 pr-6 hover:text-black hover:bg-slate-300 ${
          selectedConversation === null ? "hidden" : ""
        }`}
      >
        <IoArrowBackCircleOutline />
      </span>
      <div className="flex items-center justify-center space-x-3">
        <div
          className={`avatar ${
            getOnlineUsersStatus(selectedConversation?._id) === "Online"
              ? "online"
              : ""
          }`}
        >
          <div className="w-12 border-[2px] rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold">{selectedConversation.fullname}</h1>
          <span className="text-sm text-primary">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatUser;
