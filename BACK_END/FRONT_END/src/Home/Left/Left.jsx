import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="bg-slate-500 w-full text-black">
      <Search />
      <div
        className="overflow-y-scroll no-scrollbar"
        style={{ maxHeight: "calc(87vh - 8vh)" }}
      >
        <Users />
      </div>
      <Logout />
    </div>
  );
}

export default Left;
