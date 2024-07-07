"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import NavBar from "./NavBar";
import Link from "next/link";
import MobileResponsiveNav from "./MobileResponsiveNav";

const Header = () => {

  const [query , setQuery] = useState('')

  console.log(query)

  return (
    <>
      {/* lg:flex sm:flex-auto */}
  
      <div className="md:flex sm:flex-auto xs:flex-auto  p-4 w-full h-auto  bg-slate-100 justify-around">
        <div className="flex md:space-x-12 sm:space-x-8">
          <p className="p-2">Logo</p>
          {/* SearchBar */}
          <div className="w-auto flex shadow border border-slate-200">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search for Jwellery, Diamond..."
              className="outline-none p-2 pl-4 lg:w-[900px] md:w-[700px] sm:w-96 rounded-sm"
            />
            <div className="w-[33px] h-10 pt-3 pl-2 rounded-sm">
              <Link href={{
                pathname : `/products`,
                query : {
                  search_product : `${query}`
                }
              }}>
              <IoMdSearch size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex lg:space-x-16 md:space-x-12 sm:space-x-10 xs:space-x-6 md:mt-0 xs:mt-3 xs:justify-center xs:items-center">
          <Link href={{
            pathname:'/userlogin'
          }}>
            <div className="pl-4">
              <FaRegUser size={22} />
            </div>
            <p className="block">Account</p>
          </Link>
          <Link href={{
            pathname :'/wishlist'
          }}>
          <div>
            <div className="pl-4">
              <FaRegHeart size={20} />
            </div>
            <p className="block">Wishlist</p>
          </div>
          </Link>
          <Link href={'/carts'} className="relative">
            <p className=" absolute left-7 bottom-8">0</p>
            <div className="pl-2">
              <PiShoppingCartSimpleLight size={25} />
            </div>
            <p className="block">Carts</p>
          </Link>
        </div>
      </div>
      <div className="">
      <NavBar />
      </div>
      <div>
      <MobileResponsiveNav />
      </div>
    </>
  );
};

export default Header;
