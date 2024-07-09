import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { useSendMessage } from "../../context/useSendMessage.jsx";

function TypeSend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const submitHandler = async (e) => {
    e.preventDefault();
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex items-center py-1 space-x-1 h-[8vh] bg-slate-600">
        <div className="w-[70%] mx-4">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Type here"
            className="bg-gray-800 border text-md rounded-xl border-gray-700 outline-white px-4 py-3 w-full"
          />
        </div>
        <button>
          <IoSend className="text-5xl sm:hover:bg-green-200 p-2 text-green-500 duration-300 rounded-md cursor-pointer" />
        </button>
      </div>
    </form>
  );
}

export default TypeSend;
