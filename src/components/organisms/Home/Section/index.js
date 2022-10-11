import React from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Assets } from "../../../../assets";

export const Section = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex items-center h-full px-4 mx-auto md:max-w-5xl">
        <div className="flex flex-col space-y-0 md:space-y-2">
          <h2 className="uppercase text-[#343434] text-[3rem] md:text-[4rem] font-fjalla tracking-wider">
            Who Are We?
          </h2>
          <div className="flex flex-col space-y-6">
            <p className="font-body text-[#525252] text-lg md:w-[50%] tracking-wide leading-6 hidden md:block">
              Donaki is dolor sit amet, consectetur adisipicing elit, sed do
              euismod empor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo
            </p>
            <p className="block w-full text-lg leading-8 tracking-wide font-body text-[#525252] md:hidden ">
              Donaki is dolor sit amet, consectetur adisipicing elit, sed do
              euismod empor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in vouptate velit esse cillum dollore eu fugiat
              nulla pariatur. Excepteur sint occaecat cuopidatat non proident,
              sunt in culpa qui officia deserunt mollit annim id est laborum.
              Sed ut perspiciatis unde omnis iste natus error sit.
            </p>
            <button className="bg-[#666795] w-[10rem] border-b-[0.15rem] border-b-[#23267A] py-2 rounded-md text-white uppercase font-body text-xs font-bold hover:scale-95 outline-none">
              Find More
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-6xl px-4 mx-auto ">
        <div className="flex justify-center flex-col space-y-4 -top-[2rem] md:-top-[6rem] relative">
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <div className="bg-[#44C1B7] w-full md:w-[34rem] md:h-[15rem] flex items-center justify-center relative">
              <span className="text-white uppercase font-fjalla text-[4rem] md:text-[7rem] opacity-10 absolute">
                Partner
              </span>
              <div className="z-10 flex items-center w-full h-full px-4 py-5 md:px-10">
                <div className="flex flex-col space-y-4">
                  <h2 className="text-base tracking-wider text-white uppercase font-fjalla md:text-3xl">
                    Become a Partner
                  </h2>
                  <p className="text-base text-white md:text-lg">
                    Promote your store through our platform
                  </p>
                  <button className="w-[8rem] border-[0.1rem] border-white py-2 rounded-md text-white uppercase font-body text-xs font-bold">
                    Find Out More
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#666795] w-full md:w-[34rem] md:h-[15rem] flex items-center justify-center relative">
              <span className="text-white uppercase font-fjalla text-[4rem] md:text-[7rem] opacity-10 absolute">
                Member
              </span>
              <div className="z-10 flex items-center w-full h-full px-10 py-5 ">
                <div className="flex flex-col space-y-4">
                  <h2 className="text-base tracking-wider text-white uppercase font-fjalla md:text-3xl">
                    Become a Member
                  </h2>
                  <p className="text-base text-white md:text-lg">
                    Browse through a large number of retails
                  </p>
                  <button className="w-[8rem] border-[0.1rem] border-white py-2 rounded-md text-white uppercase font-body text-xs font-bold">
                    Find Out More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[99.5%] bg-white border-2 h-[18rem] flex items-center px-4 md:px-10">
            <div className="flex flex-col space-y-2">
              <h2 className="tracking-wider text-[#343434] uppercase font-fjalla text-[3rem] md:text-5xl">
                About us
              </h2>
              <p className="text-base text-[#525252] md:text-lg md:w-[46%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center max-w-6xl px-4 pb-16 mx-auto overflow-x-hidden">
        <div className="flex flex-col justify-between w-full space-y-6 md:flex-row md:space-y-0">
          <div className="flex flex-col ml-6 space-y-4">
            <div className="flex flex-col space-y-1">
              <span className="text-[#343434] font-fjalla uppercase tracking-wide text-xl">
                See Who Are
              </span>
              <span className="text-[#343434] font-fjalla uppercase tracking-wide text-4xl">
                Our Partners
              </span>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-row space-x-2">
                <div className="w-8 h-8 text-gray-400 bg-gray-200 rounded-sm outline-none cursor-pointer hover:scale-95">
                  <ChevronLeftIcon />
                </div>
                <div className="w-8 h-8 text-gray-400 bg-gray-200 rounded-sm outline-none cursor-pointer hover:scale-95">
                  <ChevronRightIcon />
                </div>
              </div>
              <button className="bg-[#666795] w-[10rem] border-b-[0.15rem] border-b-[#23267A] py-2 rounded-md text-white uppercase font-body text-xs font-bold hover:scale-95 outline-none">
                See Our Partners
              </button>
            </div>
          </div>
          <div className="relative flex flex-row space-x-4 left-14 md:-left-2">
            <div className="md:h-[14rem] md:w-[14rem] bg-white border-2 border-gray-200 hover:scale-95 flex items-center justify-center">
              <Image src={Assets.Decor} alt="Logo Decor" />
            </div>
            <div className="md:h-[14rem] md:w-[14rem] bg-white border-2 border-gray-200 hover:scale-95 flex items-center justify-center">
              <Image src={Assets.Diesel} alt="Logo Decor" />
            </div>
            <div className="md:h-[14rem] md:w-[14rem] bg-white border-2 border-gray-200 hover:scale-95  md:block hidden">
              <Image src={Assets.Zara} alt="Logo Decor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};