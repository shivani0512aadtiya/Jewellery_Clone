"use client";
import React, { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import axios from "axios";
import MainLayout from "@/AdminPenal/MainLayout";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const page = () => {
  const [jewelleryProduct, setJewelleryProduct] = useState([]);
  const [visible, setVisible] = useState(15);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const seeMoreButtonEvent = () => {
    setVisible((Prev) => Prev + 15);
  };

  const v = "this is product about the mandjghds hdsgzydf bdhg";

  useEffect(() => {
    const handleSubmit = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://je-6z9x.onrender.com/"
        );
        console.log(response);
        setJewelleryProduct(
          Array.isArray(response.data.jewellery) ? response.data.jewellery : []
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleSubmit();
  }, []);
  const Pathname = usePathname();

  const handleId = (id) => {
    alert(id);
    router.push(`/read-product/${id}`);
  };

  const dltData = async (_id) => {
    const token = Cookies.get("token");
    console.log("Token:", token);
    try {
      const response = await axios.delete(
        `https://je-6z9x.onrender.com/deletejewellery/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response);
      alert('Product deleted successfully');
      setJewelleryProduct(jewelleryProduct.filter(product => product._id !== _id));
    } catch (error) {
      console.error("Error deleting product:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
      alert('Failed to delete product. Please check your token or permissions.');
    }
  };
  

  return (
    <>
      <MainLayout>
        {isLoading ? (
          <>
            <h1> IsLoading.......</h1>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-12">
              {jewelleryProduct.slice(0, visible).map((items) => (
                <div
                  key={items._id}
                  className="w-full md:p-4 sm:p-1 bg-slate-50 md:h-full border sm:h-auto border-gray-200"
                >
                  <div onClick={() => handleId(items._id)} className="relative">
                    {items.upload[0] && (
                      <img
                        src={items.upload[0].url}
                        alt={items.name}
                        className="md:h-72 sm:h-auto justify-center text-center"
                        width="400"
                        height="500"
                      />
                    )}
                    <div className=" absolute rounded-2xl bg-slate-100 p-1 top-2 left-2 cursor-pointer">
                      <IoHeartOutline size={20} />
                    </div>
                  </div>
                  <h2>{v}</h2>
                  <div className="flex p-1">
                    <h1 className="pr-2">₹{items.price}</h1>

                    <p className="block text-gray-400">
                      <sub>
                        <strike>
                          ₹{parseInt(items.price) + parseInt(items.discount)}
                        </strike>
                      </sub>
                    </p>
                  </div>

                  <div className="pt-1 space-x-2">
                    <button className="bg-gray-100 border border-gray-400 text-black py-2 px-4 rounded focus:outline-none focus:ring hover:bg-slate-200 transition-all">
                      Check Delivery Date
                    </button>
                    <button onClick={() => dltData(items._id)} className="bg-red-600 rounded h-auto w-fit p-2 text-white">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-gray-100 border border-gray-400 text-black py-2 px-4 rounded hover:bg-slate-200"
                onClick={seeMoreButtonEvent}
              >
                See More
              </button>
            </div>
          </>
        )}
      </MainLayout>
    </>
  );
};

export default page;
