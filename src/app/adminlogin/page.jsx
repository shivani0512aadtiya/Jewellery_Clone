"use client";
import UserContext from "@/context/UserContext";
import axios from "axios";
import { Cookie } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import Cookies from "js-cookie";


const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    alert("Hello")
    try {
      const response = await axios.post(
        "https://jewellery-yttl.onrender.com/adminlogin",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // localStorage.setItem("token", response.data.token);
      Cookies.set('token', response.data.token, { expires: 7 });
      console.log(response.data)
      router.push('/add-jewellery')
      
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
    <div className="relative w-96 h-auto p-14 bg-gray-800 border border-green-700 shadow-lg">
      <h1 className="text-center font-semibold pb-10 text-2xl text-green-500">Admin Login</h1>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="flex relative">
          <div className="absolute left-2 top-[10px] text-green-500">
            <CiUser size={20} />
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            type="email"
            className="pl-8 p-2 w-full outline-none rounded-md bg-gray-700 text-white placeholder-gray-400"
          />
        </div>
        <div className="flex relative">
          <div className="absolute left-2 top-[10px] text-green-500">
            <RiLockPasswordLine size={20} />
          </div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            type="password"
            className="pl-8 p-2 w-full outline-none rounded-md bg-gray-700 text-white placeholder-gray-400"
          />
        </div>
        <button disabled={isLoading} className="bg-green-500 w-full p-2 rounded-md text-white hover:bg-green-600">
        {isLoading ? "Isloading..." : "Login"}
        </button>
      </form>
    </div>
  </div>
  );
};

export default page;
