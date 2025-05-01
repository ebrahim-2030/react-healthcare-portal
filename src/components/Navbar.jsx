import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

// reusable menu items 
const menuItems = [
  { path: "/", lable: "home" },
  { path: "/doctors", lable: "doctors" },
  { path: "/about", lable: "about" },
  { path: "/contact", lable: "contact" },
];
const Navbar = () => {
  // state to toggle the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // login page navigator
  const navigator = useNavigate();

  // navigate to appointments page
  const handleAppointmenNavigate = () => {
    navigator("/appointments");
    setIsOpen(false);
  };

  // navigate to profile page
  const handleProfileNavigate = () => {
    navigator("/profile");
    setIsOpen(false);
  };

  return (
    // main navigation container
    <nav className="h-[10vh]  flex flex-col justify-center border-b z-50">
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

        {/* profile dropdonw and mobile menu icon */}
        <div>
          {/* profile dropdown (hidden in mobile) */}
          <div className="hidden md:block relative group cursor-pointer">
            <div className="flex items-center gap-2 py-[13px] rounded-md">
              <img
                className="w-11 h-11 rounded-full border-2 border-brand p-0.5"
                src={assets.profile_pic}
                alt=""
              />
              <MdKeyboardArrowDown className="text-xl" />
            </div>

            <ul className=" absolute right-0  w-48 bg-white border border-t-0 opacity-0 pointer-events-none transform -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 z-50">
              <li
                onClick={() => navigator("/profile")}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                My Profile
              </li>
              <li
                onClick={() => navigator("/appointments")}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                My Appointments
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100">Logout</li>
            </ul>
          </div>

          {/* mobile menu (visible on mobile) */}
          <CgMenuRight
            onClick={() => setIsOpen(true)}
            className="text-3xl text-custom-black/80 cursor-pointer md:hidden"
          />
        </div>
      </div>

      {/* mobile menu drawer */}
      <div
        className={`fixed top-0 w-full bg-brand shadow-lg text-white flex flex-col items-start p-10 pt-16 ${
          isOpen ? "left-0" : "-left-full"
        } transition-all linear duration-500 `}
      >
        {/* profile and logout */}
        <div className="border-b w-full border-white pb-4 ">
          <div className="flex items-center gap-2 ">
            <img
              onClick={handleProfileNavigate}
              className="w-11 rounded-full border-2 border-white p-0.5 cursor-pointer"
              src={assets.profile_pic}
              alt=""
            />
            <span className="text-sm">Mark Overton</span>
          </div>
          <ul className="mt-4 flex flex-col gap-2">
            <li className="cursor-pointer" onClick={handleAppointmenNavigate}>
              My Appointments
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              Logout
            </li>
          </ul>
        </div>

        {/* mobile menu items */}
        <ul className="mt-4 flex flex-col gap-2 capitalize">
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
