import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative flex flex-col lg:flex-row bg-gradient-to-br from-[#5f6fff] via-[#7a80ff] to-[#bfc3ff] rounded-xl text-white overflow-hidden lg:h-[84vh] my-4 lg:px-12 xl:px-20">
      
      {/* Left Section */}
      <div className="flex-1 px-4 pt-8 sm:px-6 sm:pt-10 lg:pt-20 flex flex-col items-start sm:items-center lg:items-start justify-center gap-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 sm:leading-[50px] lg:leading-[70px] text-start sm:text-center lg:text-start">
          Book Appointment <br className="hidden lg:block" /> With <br className="hidden sm:block lg:hidden" />
          Trusted Doctors
        </h1>

        <div className=" sm:my-3 flex flex-col items-start sm:items-center lg:items-start lg:flex-row gap-4">
          <img src={assets.group_profiles} alt="Group of doctors" className="h-10 "  />
          <p className="text-sm leading-6 text-white sm:text-center lg:text-start">
            Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>

        <Link
          to="/appointments"
          className="px-6 py-3 bg-white text-custom-black/90 text-xs font-medium rounded-full hover:scale-105 transition-transform duration-200"
        >
          Book appointment
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex justify-center lg:absolute bottom-0 right-10 w-full lg:w-[400px] xl:w-[500px]">
        <img
          src={assets.header_img}
          alt="Doctor illustration"
          className="w-full h-auto max-h-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
