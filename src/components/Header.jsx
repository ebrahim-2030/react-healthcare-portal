import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[86vh] lg:h-[84vh] my-[2vh]  md:my-5  bg-gradient-to-br from-[#5f6fff] via-[#7a80ff] to-[#bfc3ff] rounded-xl text-white flex flex-col  gap-6 justify-between lg:flex-row lg:items-center lg:gap-0 lg:px-6 xl:px-20">
      <div className="lg:flex-1 px-6 pt-8 flex-1 flex flex-col  items-start sm:items-center lg:items-start lg:justify-center  lg:pt-20">
        <h1 className=" text-3xl font-bold sm:text-4xl lg:text-5xl sm:text-center lg:text-start leading-10 sm:leading-[50px] lg:leading-[70px] ">
          Book Appointment With <br className="hidden md:block lg:hidden" />
          Trusted <br className="hidden lg:block" /> Doctors
        </h1>
        <div className="my-5 sm:flex flex-col items-center lg:items-start lg:flex-row lg:gap-4">
          <img src={assets.group_profiles} className="mb-3 h-10" alt="" />
          <p className="text-sm leading-6 sm:text-center lg:text-start">
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <Link
          to="/appointments"
          className="px-6 py-3 bg-white text-custom-black/80 text-xs font-medium rounded-full hover:scale-x-105 transition-all duration-300"
        >
          Book appointment
        </Link>
      </div>
      <div className=" lg:w-[45%] xl:w-[40%]  h-[50%] lg:h-full relative px-4  pt-4 sm:pt-0 flex justify-center">
        <img
          className=" h-full lg:h-[400px] absolute bottom-0 w-[350px] sm:w-[400px] lg:w-[450px]    "
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
