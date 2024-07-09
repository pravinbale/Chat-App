import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading";
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx";

function Messages() {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage(); //listing incoming messages
  //console.log(messages);

  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);
  return (
    <div
      className="flex-1 py-2 overflow-y-auto"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))
      )}
      {!loading && messages.length === 0 && (
        <div className="mt-[20%]">
          <p className="text-center text-blue-500">
            <span className="text-orange-500">Say!</span> Hi to start the conversation...
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;
