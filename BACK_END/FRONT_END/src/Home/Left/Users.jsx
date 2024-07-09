import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div className="pt-7">
      <h1 className="px-8 z-50 py-2 w-[95%] text-white fixed top-20 block font-semibold bg-slate-900">
        Messages
      </h1>
      <div className="py-2" style={{ minHeight: "calc(87vh - 8vh)" }}>
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
