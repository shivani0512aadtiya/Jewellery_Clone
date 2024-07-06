import { IoMdSearch } from "react-icons/io";

const MainHeader = () => {
  return (
  <>
      <h1 className="text-2xl font-bold mb-4">Brand</h1>
      <div className="">
      <div>{"Heelo"}</div>
      <div className="flex ">
      <input type="text" placeholder="search......" className="p-2 rounded-sm outline-none"/>
      <div className="p-3 bg-slate-200 border rounded-l-sm">
        <IoMdSearch size={20} />
      </div>
      </div>
      </div>
      
      </>
  );
};

export default MainHeader;

