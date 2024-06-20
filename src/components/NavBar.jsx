"use client";
import React, { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen0, setIsOpen0] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const drawpDowunToggle = () => {
    setIsOpen0(!isOpen);
  };

  const drawpDowunToggleLeave = () => {
    setIsOpen0(false);
  };
  const drawpDowunToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const drawpDowunToggleLeave1 = () => {
    setIsOpen1(false);
  };
  const drawpDowunToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const drawpDowunToggleLeave2 = () => {
    setIsOpen2(false);
  };
  const drawpDowunToggle3 = () => {
    setIsOpen3(!isOpen3);
  };

  const drawpDowunToggleLeave3 = () => {
    setIsOpen3(false);
  };
  const drawpDowunToggle4 = () => {
    setIsOpen4(!isOpen4);
  };

  const drawpDowunToggleLeave4 = () => {
    setIsOpen4(false);
  };
  const drawpDowunToggle5 = () => {
    setIsOpen5(!isOpen5);
  };

  const drawpDowunToggleLeave5 = () => {
    setIsOpen5(false);
  };
  const drawpDowunToggle6 = () => {
    setIsOpen6(!isOpen6);
  };

  const drawpDowunToggleLeave6 = () => {
    setIsOpen6(false);
  };
  const drawpDowunToggle7 = () => {
    setIsOpen7(!isOpen7);
  };

  const drawpDowunToggleLeave7 = () => {
    setIsOpen7(false);
  };

  const toggleDropdown = (index) => {
    switch (index) {
      case 0:
        setIsOpen0(!isOpen0);
        break;
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      case 4:
        setIsOpen4(!isOpen4);
        break;
      case 5:
        setIsOpen5(!isOpen5);
        break;
      case 6:
        setIsOpen6(!isOpen6);
        break;
      case 7:
        setIsOpen7(!isOpen7);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="w-full p-3 shadow">
      <div className="md:hidden flex items-center">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <RxCross2 className="h-5 w-5" />
          ) : (
            <HiOutlineBars3BottomRight className="h-5 w-5" />
          )}
        </button>
      </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:justify-around md:cursor-pointer md:font-serif md:text-[16px] md:relative`}
        >
          <div>
            <li
              className='relative md:hover:after:content-[""] md:hover:after:absolute md:hover:after:w-full md:hover:after:h-[3px] md:hover:after:bg-blue-950 md:hover:after:left-0 md:hover:after:top-8 '
              onMouseEnter={() => toggleDropdown(0)} 
              onMouseLeave={() => toggleDropdown(0)} 
            >
              All Jewellary
              {isOpen0 && (
                <div className="p-4 bg-slate-100 absolute z-50 top-9 md:flex sm:flex-auto space-x-16 rounded-md shadow-md">
                  <ul>
                    <li className=" font-semibold">Women</li>
                    <li className=" hover hover:text-red-700">Necklaces</li>
                    <li className=" hover hover:text-red-700">Earring</li>
                    <li className=" hover hover:text-red-700">Bangels</li>
                    <li className=" hover hover:text-red-700">Mangalsutra</li>
                    <li className=" hover hover:text-red-700">Ring</li>
                    <li className=" hover hover:text-red-700">Chain</li>
                    <li className=" hover hover:text-red-700">Nose Pin</li>
                    <li className=" hover hover:text-red-700">Mangalsutra</li>
                    <li className=" hover hover:text-red-700">Ring</li>
                    <li className=" hover hover:text-red-700">Chain</li>
                    <li className=" hover hover:text-red-700">Nose Pin</li>
                  </ul>
                  <ul>
                    <li className=" font-semibold">Women</li>
                    <li className=" hover hover:text-red-700">Men</li>
                    <li className=" hover hover:text-red-700">Women</li>
                    <li className=" hover hover:text-red-700">Men</li>
                    <li className=" hover hover:text-red-700">Women</li>
                    <li className=" hover hover:text-red-700">Men</li>
                  </ul>
                  <ul>
                    <li className=" font-semibold">Women</li>
                    <li className=" hover hover:text-red-700">Men</li>
                    <li className=" hover hover:text-red-700">Women</li>
                    <li className=" hover hover:text-red-700">Men</li>
                    <li className=" hover hover:text-red-700">Women</li>
                    <li className=" hover hover:text-red-700">Men</li>
                  </ul>
                  <ul>
                    <li className=" font-semibold">Women</li>
                    <li className=" hover hover:text-red-700">Men</li>
                    <li className=" hover hover:text-red-700">Women</li>
                    <li className=" hover hover:text-red-700">Men</li>
                    <li className=" hover hover:text-red-700">Women</li>
                    <li className=" hover hover:text-red-700">Men</li>
                  </ul>
                </div>
              )}
            </li>
          </div>
          <li
            className='relative hover:after:content-[""] hover:after:absolute hover:after:w-full hover:after:h-[3px] hover:after:bg-blue-950 hover:after:left-0 hover:after:top-8'
            onMouseEnter={() => toggleDropdown(1)}
            onMouseLeave={() => toggleDropdown(1)}
          >
            Gold
            {isOpen1 && (
              <div className="p-4 bg-slate-100 absolute top-9 z-50 flex space-x-16 rounded-md shadow-md">
                <ul>
                  <li className=" font-semibold">Category</li>
                  <li className=" hover hover:text-red-700">Necklaces</li>
                  <li className=" hover hover:text-red-700">Earring</li>
                  <li className=" hover hover:text-red-700">Bangels</li>
                  <li className=" hover hover:text-red-700">Mangalsutra</li>
                  <li className=" hover hover:text-red-700">Ring</li>
                  <li className=" hover hover:text-red-700">Chain</li>
                  <li className=" hover hover:text-red-700">Nose Pin</li>
                  <li className=" hover hover:text-red-700">Mangalsutra</li>
                  <li className=" hover hover:text-red-700">Ring</li>
                  <li className=" hover hover:text-red-700">Chain</li>
                  <li className=" hover hover:text-red-700">Nose Pin</li>
                </ul>
                <ul>
                  <li className=" font-semibold">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
                <ul>
                  <li className=" font-semibold">Men</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
                <ul>
                  <li className=" font-semibold flex">GoldCoin</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
                <ul>
                  <li className=" font-semibold">More</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
              </div>
            )}
          </li>

          <li
            className='relative hover:after:content-[""] hover:after:absolute hover:after:w-full hover:after:h-[3px] hover:after:bg-blue-950 hover:after:left-0 hover:after:top-8'
            onMouseEnter={() =>toggleDropdown(2)}
            onMouseLeave={() =>toggleDropdown(2)}
          >
            Diamond
            {isOpen2 && (
              <div className="p-4 bg-slate-100 absolute top-9 z-50 flex space-x-16 rounded-md shadow-md">
                <ul>
                  <li className=" font-semibold">Category</li>
                  <li className=" hover hover:text-red-700">Necklaces</li>
                  <li className=" hover hover:text-red-700">Earring</li>
                  <li className=" hover hover:text-red-700">Bangels</li>
                  <li className=" hover hover:text-red-700">Mangalsutra</li>
                  <li className=" hover hover:text-red-700">Ring</li>
                  <li className=" hover hover:text-red-700">Chain</li>
                  <li className=" hover hover:text-red-700">Nose Pin</li>
                  <li className=" hover hover:text-red-700">Mangalsutra</li>
                  <li className=" hover hover:text-red-700">Ring</li>
                  <li className=" hover hover:text-red-700">Chain</li>
                  <li className=" hover hover:text-red-700">Nose Pin</li>
                </ul>
                <ul>
                  <li className=" font-semibold">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
                <ul>
                  <li className=" font-semibold">Men</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
                <ul>
                  <li className=" font-semibold flex">GoldCoin</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
                <ul>
                  <li className=" font-semibold">More</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className='relative hover:after:content-[""] hover:after:absolute hover:after:w-full hover:after:h-[3px] hover:after:bg-blue-950 hover:after:left-0 hover:after:top-8'
            onMouseEnter={() =>toggleDropdown(3)}
            onMouseLeave={() =>toggleDropdown(3)}
          >
            Earrings
            {isOpen3 && (
              <div className="p-4 bg-slate-100 absolute top-9 z-50 flex space-x-16 rounded-md shadow-md">
                <ul>
                  <li className=" font-semibold">Category</li>
                  <li className=" hover hover:text-red-700">Necklaces</li>
                  <li className=" hover hover:text-red-700">Earring</li>
                  <li className=" hover hover:text-red-700">Bangels</li>
                  <li className=" hover hover:text-red-700">Mangalsutra</li>
                  <li className=" hover hover:text-red-700">Ring</li>
                  <li className=" hover hover:text-red-700">Chain</li>
                  <li className=" hover hover:text-red-700">Nose Pin</li>
                  <li className=" hover hover:text-red-700">Mangalsutra</li>
                  <li className=" hover hover:text-red-700">Ring</li>
                  <li className=" hover hover:text-red-700">Chain</li>
                  <li className=" hover hover:text-red-700">Nose Pin</li>
                </ul>
                <ul>
                  <li className=" font-semibold">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
                <ul>
                  <li className=" font-semibold">Men</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
                <ul>
                  <li className=" font-semibold flex">GoldCoin</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
                <ul>
                  <li className=" font-semibold">More</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className='relative hover:after:content-[""] hover:after:absolute hover:after:w-full hover:after:h-[3px] hover:after:bg-blue-950 hover:after:left-0 hover:after:top-8'
            onMouseEnter={() =>toggleDropdown(4)}
            onMouseLeave={() =>toggleDropdown(4)}
          >
            Rings
            {isOpen4 && (
              <div className="p-4 bg-slate-100 absolute top-9 z-50 flex space-x-16 rounded-md shadow-md">
                <ul>
                  <li className=" font-semibold">Category</li>
                  <li className=" hover hover:text-red-700">Necklaces</li>
                  <li className=" hover hover:text-red-700">Earring</li>
                  <li className=" hover hover:text-red-700">Bangels</li>
                  <li className=" hover hover:text-red-700">Mangalsutra</li>
                  <li className=" hover hover:text-red-700">Ring</li>
                  <li className=" hover hover:text-red-700">Chain</li>
                  <li className=" hover hover:text-red-700">Nose Pin</li>
                  <li className=" hover hover:text-red-700">Mangalsutra</li>
                  <li className=" hover hover:text-red-700">Ring</li>
                  <li className=" hover hover:text-red-700">Chain</li>
                  <li className=" hover hover:text-red-700">Nose Pin</li>
                </ul>
                <ul>
                  <li className=" font-semibold">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
                <ul>
                  <li className=" font-semibold">Men</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
                <ul>
                  <li className=" font-semibold flex">GoldCoin</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
                <ul>
                  <li className=" font-semibold">More</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className='relative hover:after:content-[""] hover:after:absolute hover:after:w-full hover:after:h-[3px] hover:after:bg-blue-950 hover:after:left-0 hover:after:top-8'
            onMouseEnter={() => toggleDropdown(5)}
            onMouseLeave={() => toggleDropdown(5)}
          >
            BestSeller
            {isOpen5 && (
              <div className="p-4 bg-slate-100 absolute top-9 z-50 flex space-x-16 rounded-md shadow-md">
                <ul>
                  <li className=" font-semibold">Category</li>
                  <li className=" hover hover:text-red-700">Necklaces</li>
                  <li className=" hover hover:text-red-700">EarringBangels</li>
                  <li className=" hover hover:text-red-700">
                    BangelsMangalsutra
                  </li>
                  <li className=" hover hover:text-red-700">MangalsutraRing</li>
                  <li className=" hover hover:text-red-700">RingChainChain</li>
                  <li className=" hover hover:text-red-700">ChainChain</li>
                  <li className=" hover hover:text-red-700">Nose Pin</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className='relative hover:after:content-[""] hover:after:absolute hover:after:w-full hover:after:h-[3px] hover:after:bg-blue-950 hover:after:left-0 hover:after:top-8'
            onMouseEnter={() =>toggleDropdown(6)}
            onMouseLeave={() =>toggleDropdown(6)}
          >
            Wedding
            {isOpen6 && (
              <div className="p-4 bg-slate-100 absolute top-9 z-50 flex space-x-16 rounded-md shadow-md">
                <ul>
                  <li className=" font-semibold">Category</li>
                  <li className=" hover hover:text-red-700">Necklaces</li>
                  <li className=" hover hover:text-red-700">Earring</li>
                  <li className=" hover hover:text-red-700">Bangels</li>
                  <li className=" hover hover:text-red-700">Mangalsutra</li>
                  <li className=" hover hover:text-red-700">Ring</li>
                  <li className=" hover hover:text-red-700">Chain</li>
                  <li className=" hover hover:text-red-700">Nose Pin</li>
                  <li className=" hover hover:text-red-700">Mangalsutra</li>
                  <li className=" hover hover:text-red-700">Ring</li>
                  <li className=" hover hover:text-red-700">Chain</li>
                  <li className=" hover hover:text-red-700">Nose Pin</li>
                </ul>
                <ul>
                  <li className=" font-semibold">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                  <li className=" hover hover:text-red-700">Women</li>
                  <li className=" hover hover:text-red-700">Men</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className='relative hover:after:content-[""] hover:after:absolute hover:after:w-full hover:after:h-[3px] hover:after:bg-blue-950 hover:after:left-0 hover:after:top-8'
            onMouseEnter={() =>toggleDropdown(7)}
            onMouseLeave={() =>toggleDropdown(7)}
          >
            More
            {isOpen7 && (
              <div className="p-4 bg-slate-100 absolute top-9 flex space-x-16 rounded-md shadow-md">
                <ul>
                  <li className=" font-semibold">More</li>
                  <li className=" hover hover:text-red-700">Exchange</li>
                  <li className=" hover hover:text-red-700">Price</li>
                  <li className=" hover hover:text-red-700">FAQ</li>
                  <li className=" hover hover:text-red-700">Mangalsutra</li>
                  <li className=" hover hover:text-red-700">Ring</li>
                </ul>
              </div>
            )}
          </li>
        </ul>
        {/* <div className="md:hidden flex items-center">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <RxCross2 className="h-5 w-5" />
            ) : (
              <HiOutlineBars3BottomRight className="h-5 w-5" />
            )}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
