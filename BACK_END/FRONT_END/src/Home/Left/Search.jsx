import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../components/zustand/useConversation";
import toast from "react-hot-toast";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User Not Found!!!");
      setSearch("");
    }
  };

  return (
    <div className="h-[10vh] bg-slate-700">
      <div className="px-6 py-4 ">
        <form onSubmit={submitHandler}>
          <div className="flex space-x-3">
            <label className="border border-gray-500 rounded-lg p-3 flex items-center gap-2 w-[80%]">
              <input
                type="text"
                className="text-white w-full outline-none bg-slate-700 px-2"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button>
              <FaSearch className="text-4xl p-2 text-white sm:hover:text-black sm:hover:bg-blue-500 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
