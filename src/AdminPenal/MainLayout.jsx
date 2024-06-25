import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import MainHeader from "./MainHeader";
import Link from "next/link";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import UserContextProvider from "@/context/UserContextProvider";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside className="bg-white rounded-lg w-96 p-4">
          <ul>
            <li className="flex items-center hover:bg-blue-200 py-2 px-4">
              <AiOutlineHome className="w-6 h-6 mr-2" />
              <Link href="/profile" className="ml-2">Profile</Link>
            </li>

            <li className="flex items-center hover:bg-blue-200 py-2 px-4">
              <GrProjects className="w-6 h-6 mr-2" />
              <span className="flex-1">Projects</span>
              <FaAngleRight />
            </li>
            <li className="flex items-center hover:bg-blue-200 py-2 px-4">
              <FaCheck className="w-6 h-6 mr-2" />
              <span className="flex-1">Singule</span>
              <FaAngleRight />
            </li>
          </ul>
        </aside>
        <UserContextProvider>
        <main className="flex-4 p-4">{children}</main>
        </UserContextProvider>
      </div>
    </div>
  );
};

export default MainLayout;
