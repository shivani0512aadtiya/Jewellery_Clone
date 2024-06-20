"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import Link from "next/link";
import React, { FormEvent, useContext, useState } from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jewellery-yttl.onrender.com/login",
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
      console.log("response is :", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Header />
    <div className="flex justify-center items-center pt-14">
      <div className="relative w-96 h-auto p-14 bg-slate-100 border border-solid">
        <h1 className="text-center font-semibold pb-10 text-xl">User Login</h1>
        <form className=" space-y-8" onSubmit={handleSubmit}>
          <div className="flex relative">
            <div className=" absolute left-2 top-[10px] ">
              <CiUser size={20} />
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              type="email"
              className="pl-8 p-2 w-full outline-none  rounded-md"
            />
          </div>
          <div className="flex relative">
            <div className=" absolute left-2 top-[10px] ">
              <RiLockPasswordLine size={20} />
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              type="password"
              className="pl-8 p-2 w-full outline-none rounded-md"
            />
          </div>
          <button className=" bg-green-500 w-full p-2 rounded-md text-white">
            Login
          </button>
        </form>
        <p className="pt-3">
          Not registered?
          <Link href={"/usersignup"} className="text-green-500">
            Create an account
          </Link>
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default page;
