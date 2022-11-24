import React from "react";
import logo from "../assets/logo.jpg";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="border-b sticky top-0 z-50 bg-white/[95%]">
      <div className="flex items-center justify-between sm:mx-6 md:mx-10 lg:mx-12">
        {/* Left */}
        <div className="h-20 flex mb-4">
          <img src={logo} alt="logo" className="object-cover mt-4 ml-10" />
        </div>

        {/* Middle */}
        <div className="hidden lg:flex justify-center items-center relative mt-6 mb-8 ml-12 pl-2 shadow-sm shadow-gray-400 border rounded-full">
          <input
            type="search"
            placeholder=""
            className="py-2.5 w-[20rem] rounded-full outline-0"
          />
          <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
            <button className="w-full">Place</button>
            <button className="border-1 border-x px-6">Time</button>
            <button className="w-full pl-3 text-gray-600/50">Add Guests</button>
          </div>
          <div className=" bg-[#ff5a60] p-2 rounded-full mr-2">
            <FiSearch className="text-white w-full" />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center mt-6 mb-8 pr-12 font-bold text-gray-600">
          <div className="">
            <p className="text-[17px]">Rent Your Home</p>
          </div>

          <div className="flex items-center mx-8 gap-1">
            <BsGlobe className="" />
            <div className="">EN</div>
          </div>

          <div className="flex items-center border px-4 py-2 rounded-full gap-2 bg-[#ff5a60] text-white font-semibold shadow-md shadow-gray-600 hover:bg-[#f9787c] duration-100 ease-out cursor-pointer">
            <p>Sign In</p>
            <AiOutlineUser className="text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
