import React, { useEffect } from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import TypeSend from "./TypeSend";
import useConversation from "../../components/zustand/useConversation.js";
import NoChatSelected from "./NoChatSelected.jsx";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="bg-slate-900 text-gray-300 w-full">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <ChatUser />
            <div
              className="flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(94vh - 10vh)" }}
            >
              <Messages />
            </div>
            <TypeSend />
          </>
        )}
      </div>
    </div>
  );
}

export default Right;
