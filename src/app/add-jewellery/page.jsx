"use client";
import MainLayout from "@/AdminPenal/MainLayout";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import UserContext from "@/context/UserContext";

const Page = () => {
  const [imageUpload, setImageUpload] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(undefined);
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [material, setMaterial] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [gross_weight, setGross_weight] = useState("");
  const [net_weight, setNet_weight] = useState("");
  const [token, setToken] = useState("");
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (!storedToken) {
      router.push('/adminlogin')
    } else {
      setToken(storedToken); // Use storedToken to set the state
      console.log(storedToken);
    }
  }, []);

  const handleFileChange = (e) => {
    setImageUpload([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!imageUpload.length) {
        console.log("No images found");
        return;
      }
      const formData = new FormData();
      for (let i = 0; i < imageUpload.length; i++) {
        formData.append("jewellery", imageUpload[i]); // Ensure the key matches what the backend expects
      }
      formData.append("price", price?.toString() ?? "");
      formData.append("name", name);
      
      formData.append("discount", discount);
      formData.append("material", material);
      formData.append("category", category);
      formData.append("gender", gender);
      formData.append("gross_weight", gross_weight);
      formData.append("net_weight", net_weight);
      formData.append("description", description);

  
      const response = await axios.post(
        "https://je-6z9x.onrender.com/addjewellery",
        formData, {
          onUploadProgress: (ProgressEvent) => {
            setProgress((prevState) => ({
              ...prevState,
              pc: (ProgressEvent.loaded / ProgressEvent.total) * 100,
              started: true
            }));
          },
          headers: {
            Authorization: `Bearer ${token}`, // Ensure the token is correct
          },
        }
      );
      setMsg("Upload Successfully...");
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Error response:", error.response);
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request
        console.error("Error message:", error.message);
      }
      setMsg("Upload failed");
    }
  };
  

  return (
    <MainLayout>
    <div>
      <div className="p-4 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
          <h1 className="text-2xl text-center font-bold">Add Product</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4">
            <div className="md:flex sm:flex-auto space-x-4">
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="productImage" className="font-semibold">
                  Upload Jewellery Image
                </label>
                <input
                  multiple
                  onChange={handleFileChange}
                  type="file"
                  id="productImage"
                  className="p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter jewellery image"
                />
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="productName" className="font-semibold">
                  Jewellery Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  id="productName"
                  className="p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter jewellery name"
                />
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="productPrice" className="font-semibold">
                  Jewellery Price
                </label>
                <input
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  value={price}
                  type="number"
                  id="productPrice"
                  className="p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter jewellery Price"
                />
              </div>
            </div>
            <div className="md:flex sm:flex-auto space-x-4">
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="productDiscount" className="font-semibold">
                  Enter Discount
                </label>
                <input
                  onChange={(e) => setDiscount(e.target.value)}
                  value={discount}
                  type="text"
                  id="productDiscount"
                  className="p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter Discount"
                />
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="productMaterial" className="font-semibold">
                  Jewellery Material
                </label>
                <input
                  onChange={(e) => setMaterial(e.target.value)}
                  value={material}
                  type="text"
                  id="productMaterial"
                  className="p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter Material"
                />
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="productCategory" className="font-semibold">
                  Jewellery Category
                </label>
                <input
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  type="text"
                  id="productCategory"
                  className="p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter Category"
                />
              </div>
            </div>
            <div className="md:flex sm:flex-auto space-x-4">
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="productGender" className="font-semibold">
                  Enter Gender
                </label>
                <input
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  type="text"
                  id="productGender"
                  className="p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter Gender"
                />
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="productGross_weight" className="font-semibold">
                  Jewellery Gross_weight
                </label>
                <input
                  onChange={(e) => setGross_weight(e.target.value)}
                  value={gross_weight}
                  type="text"
                  id="productGross_weight"
                  className="p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter Gross_weight"
                />
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="productNet_weight" className="font-semibold">
                  Jewellery Net_weight
                </label>
                <input
                  onChange={(e) => setNet_weight(e.target.value)}
                  value={net_weight}
                  type="text"
                  id="productNet_weight"
                  className="p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter Net_weight"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <label htmlFor="productDescription" className="font-semibold">
                Jewellery Description
              </label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
                id="productDescription"
                className="p-2 border border-gray-300 rounded w-full"
                placeholder="Enter jewellery description"
              />
            </div>
            <div className="flex space-x-4 justify-end">
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Upload
              </button>
            </div>
            {progress.started && (
              <div className="w-full bg-gray-200 rounded">
                <div
                  className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded"
                  style={{ width: `${progress.pc}%` }}
                >
                  {progress.pc.toFixed(2)}%
                </div>
              </div>
            )}
            {msg && <p className="text-center mt-4">{msg}</p>}
          </form>
        </div>
      </div>
    </div>
    </MainLayout>
  );
};

export default Page;
