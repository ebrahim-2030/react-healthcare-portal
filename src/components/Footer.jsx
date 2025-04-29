import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="md:flex justify-between gap-12">

        {/* logo & company desciption */}
        <div>
          <Link to="/" className="flex items-end ">
            <img
              src={assets.logo}
              className="w-10 h-10 lg:w-[54px] lg:h-[54px]"
              alt="logo"
            />
            <span className="text-brand text-sm lg:text-lg font-semibold -ml-1 ">
              HealthCare
            </span>
          </Link>
          <p className="text-sm md:max-w-[450px] leading-6 mt-4 font-medium text-custom-black/80 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
            quod incidunt? Cumque laboriosam rem error ullam! Quisquam
            reiciendis magni architecto nobis aperiam in facere, enim ratione
            corporis facilis ad. Dolore.
          </p>
        </div>

        {/* quick links */}
        <div className="mt-12 md:mt-0">
          <h2 className="text-xl font-semibold text-custom-black uppercase">
            Company
          </h2>
          <ul className="mt-8 text-sm font-medium text-custom-black/80 flex flex-col gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/">Delivery</Link>
            </li>
            <li>
              <Link to="/">Privacy policy</Link>
            </li>
          </ul>
        </div>

        {/* contact information */}
        <div className="mt-12 md:mt-0">
          <h2 className="text-xl font-semibold text-custom-black uppercase">
            Get in touch
          </h2>
          <div className="mt-8 flex flex-col gap-2 text-sm font-medium text-custom-black/80">
            <span to="/">+0-000-000-000</span>
            <span>healthcare@gmail.com</span>
            <span>123 Main Street, Kunduz, Afghanistan</span>
          </div>
        </div>
      </div>
      <div className="border-t border-custom-black/10 mt-4 md:mt-8 pt-4 pb-8 md:pt-8 md:pb-16 ">
        <p className="text-xs md:text-sm text-custom-black/90 font-medium text-center">
          Copyright 2025 @ healthcare - All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
