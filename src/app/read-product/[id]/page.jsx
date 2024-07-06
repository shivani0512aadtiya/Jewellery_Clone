"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const { id } = useParams();
  const [getOneData, setGetOneData] = useState([]);
  const [ValueOfi, setValueOfI] = useState(0);

  useEffect(() => {
    const GetOneProduct = async () => {
      try {
        const result = await axios.get(
          `https://je-6z9x.onrender.com/getonejewellery/${id}`
        );
        setGetOneData([result.data]);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    GetOneProduct();
  }, []);

  console.log(id);

  return (
    <>
      <Header />
      <div className="flex justify-center items-center p-8">
        <div className="flex flex-col md:flex-row md:w-full sm:w-full h-auto md:space-x-12">
          {getOneData.map((items, index) => (
            <React.Fragment key={items._id || index}>
              <div className="relative p-8 flex-shrink-0 border hidden overflow-y-scroll scrollbar-hide border-gray-200 h-[900px] overflow-hidden md:block">
                <div className="flex flex-col space-y-4">
                  <img
                    onClick={() => setValueOfI(0)}
                    src={items.upload[0].url}
                    alt="image"
                    className=" md:h-52 w-52 sm:h-auto"
                    width={200}
                    height={50}
                  />
                  {items.upload[1] && (
                    <img
                      src={items.upload[1].url}
                      alt="image"
                      className="md:h-52 w-52 sm:h-auto"
                      width={200}
                      height={50}
                      onClick={() => {
                        setValueOfI(1)
                      }}
                    />
                  )}

                  {items.upload[2] && (
                    <img
                    onClick={() => {
                      setValueOfI(2)
                    }}
                      src={items.upload[2].url}
                      alt="image"
                      className="md:h-52 w-52 sm:h-auto"
                      width={200}
                      height={50}
                    />
                  )}
                  {items.upload[3] && (
                    <img
                    onClick={() => {
                      setValueOfI(3)
                    }}
                      src={items.upload[3].url}
                      alt="image"
                      className="md:h-52 w-52 sm:h-auto"
                      width={200}
                      height={50}
                    />
                  )}
                  {items.upload[4] && (
                    <img
                      onClick={() => setValueOfI(4)}
                      src={items.upload[4].url}
                      alt="image"
                      className="md:h-52 w-52 sm:h-auto"
                      width={200}
                      height={50}
                    />
                  )}
                </div>
              </div>
              <div className=" p-8 flex-shrink-0 border border-gray-200 md:h-96">
                <img
                  src={items.upload[ValueOfi].url}
                  alt="image"
                  className="md:h-72 sm:h-auto w-72"
                  width={400}
                  height={500}
                />
              </div>
              <div className="space-y-4 md:h-auto md:scrollbar-hide md:overflow-y-scroll md:scroll-hide sm:h-auto p-4 md:p-0">
                <p className="block">ID Product: {items._id}</p>
                <p className="block font-bold text-lg">
                  Description: Elegant Beginnings Diamond Mangalsutra
                </p>
                <p className="block">Rating: ***** (1 Review)</p>
                <hr />
                <p className="block">Price: ₹{items.price}</p>
                <p className="block">
                  Price Inclusive of all taxes. See full Price Breakup
                </p>
                <p className="block">Name {items.name}</p>
                <p>Material {items.material}</p>
                <p className="block">Gross Weight {items.gross_weight}</p>
                <p className="block">Net weight {items.net_weight}</p>
                <p className="block">Net Quantity</p>
                <p className="block">
                  Weight will increase as per the Size. Check Sizing Comparison
                </p>
                <p className="block">
                  Gold Purity: 18 Karat; Diamond weight: 0.194 ct
                </p>
                <p className="block">
                  Not sure what to buy? Check out our Buying Guides
                </p>
                <p className="block">Country</p>
                <p className="block">Pincode</p>
                <hr />
                <div className="flex space-x-4">
                  <button className="bg-white text-black border border-gray-400 py-2 px-4 hover:bg-gray-100">
                    Add to Cart
                  </button>
                  <button className="bg-red-500 text-white py-2 px-4 hover:bg-red-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
