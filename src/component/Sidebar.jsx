import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { RiStackFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="w-[25%] h-full p-2 flex-col text-white gap-2 lg:flex hidden ">
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
          <div className="flex items-center gap-3 pl-5 cursor-pointer">
            <AiFillHome size={20} />
            <p className="font-semibold">Home</p>
          </div>
          <div className="flex items-center gap-3 pl-5 cursor-pointer">
            <IoSearch size={20} />
            <p className="font-semibold">Search</p>
          </div>
        </div>
        <div className="bg-[#121212] h-[85%] rounded">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer">
              <RiStackFill size={20} />
              <p className="semi-bold">Your Library</p>
            </div>
            <div className="flex items-center gap-3">
              <FaArrowRight />
              <FaPlus />
            </div>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col pl-4 items-start">
            <h1>Create Your first Platylist</h1>
            <p className="font-light">It's easy we'll help you</p>
            <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4 hover:scale-110 transform transition">
              Create Playlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
