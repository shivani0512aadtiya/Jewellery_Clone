"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdAddCircleOutline } from "react-icons/md";
import { MdOutlineLooks } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import MainHeader from "./MainHeader";
import UserContext from "@/context/UserContext";

const AdminLayout = ({ children }) => {
  const router = useRouter();

  const { logout } = useContext(UserContext)

  const LogOut = async () =>{
     await logout()
     router.push('/adminlogin')
  }

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/adminlogin");
    }
  }, [router]);



  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-96 text-black p-4">
          <nav className="bg-white h-full rounded shadow">
            <ul className="p-4 space-y-4">
              <li className="flex">
                <div className=" pt-1">
                  <LuLayoutDashboard />
                </div>
                <p className="block font-bold">Dashboard</p>
              </li>
              <li className="mb-4 rounded flex cursor-pointer hover:bg-blue-200">
                <div className=" pt-1">
                  <CgProfile />
                </div> 
                <Link href={{
                  pathname:'/profile'
                }}>
                  Profile
                </Link>
              </li>
              <li className="mb-4 flex cursor-pointer">
                <div className=" pt-1">
                  <MdAddCircleOutline />
                </div>
                <Link
                  href={{
                    pathname: "/add-jewellery",
                  }}
                 
                >
                  Add Jewellery
                </Link>
              </li>
              <li className="mb-4 flex cursor-pointer">
                <div className=" pt-1">
                  <MdOutlineLooks />
                </div>
                <Link href={{
                       pathname:'all-jewellery'
                }} >
                  All Jewellery
                </Link>
              </li>
              <li className="mb-4 rounded flex cursor-pointer" onClick={LogOut}>
                <div className="pt-1">
                  <IoLogOutOutline />
                </div>
                <Link
                  href="/Wishlist"
                  className=" bg-slate-900"
                >
                  LogOut
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="pt-3">
        <MainHeader/>
        <main className="flex-1 w-full">{children}</main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
