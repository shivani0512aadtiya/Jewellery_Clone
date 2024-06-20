"use client";
import UserContext from "@/context/UserContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const page = () => {

  const [imageUpload, setImageUpload] = useState(null);
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

  const router = useRouter()

  const { logout } = useContext(UserContext);

  const handleFileChange = (e) => {
    // Update imageUpload state with the selected file
    if (e.target.files && e.target.files.length > 0) {
      setImageUpload(e.target.files[0]);
    }
  };

  const Logout = async() =>{
     await logout()
     router.push('/adminlogin')
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      console.log("Token Not Found");
    } else {
      setToken(storedToken); // Use storedToken to set the state
      console.log(storedToken);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!imageUpload) {
        console.log("no image found");
        return;
      }
      const formData = new FormData();
      formData.append("jewellery", imageUpload);
      formData.append("price", price?.toString() ?? "");
      formData.append("name", name);
      formData.append("description", description);
      formData.append("discount", discount);
      formData.append("material", material);
      formData.append("category", category);
      formData.append("gender", gender);
      formData.append("gross_weight", gross_weight);
      formData.append("net_weight", net_weight);
      const response = await axios.post(
        "https://jewellery-yttl.onrender.com/addjewellery",
        formData,{
          headers: {
              Authorization: `Bearer ${token}`, // Authorization header with the token
            },
      }
        
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div> 
      <button onClick={Logout}>LogOut</button>
      <div className=" p-4 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
          <h1 className="text-2xl text-center font-bold">Add Product</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4">
            <div className="md:flex sm:flex-auto space-x-4">
              <div className="flex flex-col space-y-1 w-full">
                <label htmlFor="productImage" className="font-semibold">
                  Upload Jewellery Image
                </label>
                <input
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
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
