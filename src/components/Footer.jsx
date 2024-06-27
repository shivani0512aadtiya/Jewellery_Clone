import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-12">
      <div className="w-full h-auto bg-gray-900 text-white shadow md:flex sm:flex-auto md:justify-around p-8">
        <ul>
          <li className="py-2 font-semibold text-xl">Useful Links</li>
          <li className="py-2 cursor-pointer">Delivery Information</li>
          <li className="py-2 cursor-pointer">Payment Options</li>
          <li className="py-2 cursor-pointer">Track your Order</li>
          <li className="py-2 cursor-pointer">Returns</li>
          <li className="py-2 cursor-pointer">Find a Store</li>
        </ul>
        <ul>
          <li className="py-2 font-semibold text-xl">Information</li>
          <li className="py-2 cursor-pointer">Home</li>
          <li className="py-2 cursor-pointer">About</li>
          <li className="py-2 cursor-pointer">Help & FAQ</li>
          <li className="py-2 cursor-pointer">
            <Link href={{
              pathname:'/adminlogin'
            }}>Admin Panel</Link>
          </li>
        </ul>
        <ul>
          <li className="py-2 font-semibold text-xl">Contact Us</li>
          <li className="py-2 cursor-pointer flex">
            <div className="">
              <IoLocationOutline size={25} />
            </div>
            <p className="block text-[18px]">
              &nbsp; 401,sairam Plaza Mangal Nagar, Indore
            </p>
          </li>
          <li className="py-2 cursor-pointer flex">
            <div className="pt-1">
              <MdOutlineMailOutline size={20} />
            </div>
            <p className="block text-[18px]">&nbsp;rishusinfotech4@gmail.com</p>
          </li>
          <li className="py-2 cursor-pointer flex">
            <div className="pt-1">
              <IoCallOutline size={20} />
            </div>
            <p className="block text-[18px]">&nbsp;1800-231-0928</p>
          </li>
          <div className="social-media-links flex pt-2">
            <a
              className="px-2 p-2 rounded-[50%] h-[44px] bg-slate-700 mr-3 hover hover:bg-blue-600"
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FaXTwitter size={30} />
              </div>
            </a>
            <a
              className="px-2 p-2 rounded-[50%] h-[45px] bg-slate-700 mr-3 hover:bg-blue-600"
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <LuFacebook size={30} />
              </div>
            </a>
            <a
              className="px-2 p-2 rounded-[50%] h-[45px] bg-slate-700 mr-3 hover:bg-blue-600"
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <IoLogoInstagram size={30} />
              </div>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
