import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { useState } from "react";

// define menu items to be reused for desktop and mobile views
const menuItems = [
  { path: "/", lable: "home" },
  { path: "/doctors", lable: "doctors" },
  { path: "/about", lable: "about" },
  { path: "/contact", lable: "contact" },
];
const Navbar = () => {
  // state to toggle the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    // main navigation container
    <nav className="h-[10vh]  flex flex-col justify-center border-b">
      <div className=" w-full flex items-center justify-between">
        {/* logo and menu togle */}
        <Link to="/" className="flex items-end">
          <img
            src={assets.logo}
            className="w-10 h-10 lg:w-[54px] lg:h-[54px]"
            alt="logo"
          />
          <span className="text-brand text-sm lg:text-lg font-semibold -ml-1 ">
            HealthCare
          </span>
        </Link>

        {/* desktop menu items */}
        <ul className=" hidden md:flex items-center gap-5 lg:gap-10 md:font-medium text-custom-black/80 capitalize">
          {menuItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              onClick={() => setIsOpen(false)}
            >
              <span>{item.lable}</span>
              <hr className="hidden border-none outline-none h-[1.5px] bg-brand w-1/2" />
            </NavLink>
          ))}
        </ul>

        {/* button + mobile menu toggle icon (only visible on small screens) */}
        <div>
          <button className="hidden md:block px-6 py-3  bg-brand rounded-full text-white text-sm font-medium">
            Create Account
          </button>
          <CgMenuRight
            onClick={() => setIsOpen(true)}
            className="text-3xl text-custom-black/80 cursor-pointer md:hidden"
          />
        </div>
      </div>

      {/* mobile menu drawer */}
      <div
        className={`fixed top-0 w-full bg-brand text-white flex flex-col items-start p-10 pt-20 ${
          isOpen ? "left-0" : "-left-full"
        } transition-all linear duration-500 `}
      >
        <ul className="flex flex-col gap-2 capitalize">
          {menuItems.map((item) => {
            return (
              <NavLink
                to={item.path}
                key={item.path}
                onClick={() => setIsOpen(false)}
              >
                <span>{item.lable}</span>
                <hr className="hidden border-none outline-none h-[1.5px] bg-white w-1/2" />
              </NavLink>
            );
          })}
        </ul>

        {/* mobile "create account" button */}
        <button className="mt-8 px-6 py-2.5 border bg-white rounded-full text-brand text-sm font-medium">
          Create Account
        </button>

        {/* close icon for mobile menu */}
        <div>
          <CgClose
            onClick={() => setIsOpen(false)}
            className="text-3xl absolute top-4 right-3 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
