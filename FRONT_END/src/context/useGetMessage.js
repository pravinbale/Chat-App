import React, { useEffect, useState } from "react";
import useConversation from "../components/zustand/useConversation.js";
import axios from "axios";

function useGetMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const res = await axios.get(
            `/api/message/get/${selectedConversation._id}`
          );
          setMessages(res.data);
          setLoading(false);
        } catch (error) {
          console.log("error in getting message", error);
          setLoading(false);
        }
      }
    };
    getMessage();
  }, [selectedConversation, setMessages]);

  return { messages, loading };
}

export default useGetMessage;
