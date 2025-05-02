import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="mt-12 mb-12 flex flex-col items-center">

      {/* contact image */}
      <div>
        <p className="text-xl font-medium mb-8 sm:mb-16">
          CONTACT <span className="font-bold">US</span>
        </p>
      </div>


      {/* contact container */}
      <div className="px-10 sm:px-0 sm:flex items-start gap-10">

        {/* contact image */}
        <div className="">
          <img
            src={assets.contact_image}
            className=" w-[300px] h-[400px]"
            alt=""
          />
        </div>

        {/* contact image */}
        <div className="mt-8 flex flex-col items-start gap-6 sm:mt-4 text-sm font-medium  leading-6 text-custom-black/80">
          <p className="font-semibold md:text-lg mb-2  text-custom-black/90">OUR OFFICE</p>
          <p className="">
            00000 Willms Station Suite 000, <br /> Washington, USA
          </p>
          <p className="">
            Tel: (000) 000-0000 <br /> Email: greatstackdev@gmail.com
          </p>
          <p className="font-semibold md:text-lg  text-custom-black/90">
            CAREERS AT PRESCRIPTO
          </p>
          <p className="">
            Learn more about our teams and job openings.
          </p>
          <button className="px-6 py-3 text-sm font-medium text-white bg-custom-black/90 hover:bg-custom-black transition-all duration-100">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
