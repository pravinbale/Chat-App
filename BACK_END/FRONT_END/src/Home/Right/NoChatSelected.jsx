import React from "react";
import { useAuth } from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";

function NoChatSelected() {
  const [authUser] = useAuth();
  return (
    <>
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute top-5 left-5 z-10"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center px-5">
          <p>
            Welcome{" "}
            <span className="font-extrabold text-primary text-xl">
              {authUser.user.fullname}
            </span>
          </p>
          <p className="my-4">
            <span className="text-lg text-orange-500">No chat selected, </span>{" "}
            please start a conversation by selecting anyone from your
            contacts..!
          </p>
        </div>
      </div>
    </>
  );
}

export default NoChatSelected;
