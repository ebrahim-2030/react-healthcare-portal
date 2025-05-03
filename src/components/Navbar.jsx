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

  const [token, setToken] = useState(true);

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
    <nav className="h-[10vh]  flex flex-col justify-center border-b ">
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
              className="hover:text-brand"
              to={item.path}
              key={item.path}
              onClick={() => setIsOpen(false)}
            >
              <span>{item.lable}</span>
              <hr className="hidden border-none outline-none h-[1.5px] bg-brand w-1/2" />
            </NavLink>
          ))}
        </ul>

        <div>
          <div className="hidden md:block">
            {token ? (
              <div>
                {/* profile dropdown (hidden in mobile) */}
                <div className=" relative group cursor-pointer">
                  <div className="flex items-center gap-2 py-[13px] rounded-md">
                    <img
                      className="w-11 h-11 rounded-full border-2 border-brand p-0.5"
                      src={assets.profile_pic}
                      alt=""
                    />
                    <MdKeyboardArrowDown className="text-xl" />
                  </div>

                  <ul className=" absolute right-0  w-60 rounded-sm bg-gradient-to-tr from-[#9063e4] to-brand text-white p-4 shadow-lg  opacity-0 pointer-events-none transform -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 z-50">
                    <li
                      onClick={() => navigator("/profile")}
                      className="block px-4 py-2 hover:bg-white hover:text-black/80 rounded cursor-pointer"
                    >
                      My Profile
                    </li>
                    <li
                      onClick={() => navigator("/appointments")}
                      className="block px-4 py-2 hover:bg-white hover:text-black/80 rounded cursor-pointer"
                    >
                      My Appointments
                    </li>
                    <li
                      onClick={() => setToken(false)}
                      className="block px-4 py-2 hover:bg-white hover:text-black/80 rounded"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  navigator("/login");
                  scrollTo(0, 0);
                }}
                className=" px-6 py-3 bg-brand text-sm text-white rounded-full  font-medium hover:scale-105 transition-all duration-200"
              >
                Create account
              </button>
            )}
          </div>

          <div>
            {/* mobile menu (visible on mobile) */}
            <CgMenuRight
              onClick={() => setIsOpen(true)}
              className="text-3xl text-custom-black/80 cursor-pointer md:hidden"
            />
          </div>
        </div>
      </div>

      {/* mobile menu drawer */}
      <div
        className={`fixed top-0 z-50 w-full bg-brand shadow-lg text-white flex flex-col items-start p-10 pt-16 ${
          isOpen ? "left-0" : "-left-full"
        } transition-all linear duration-500 `}
      >
        {/* mobile menu items */}
        <ul className="mt-4 flex flex-col gap-2 capitalize">
          {menuItems.map((item) => {
            return (
              <Link
                to={item.path}
                key={item.path}
                onClick={() => setIsOpen(false)}
              >
                <span>{item.lable}</span>
                <hr className="hidden border-none outline-none h-[1.5px] bg-white w-1/2" />
              </Link>
            );
          })}
        </ul>
        <div className="mt-4">
          {token ? (
            <div className="border-t w-full border-white pt-4 ">
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
                <li
                  className="cursor-pointer"
                  onClick={handleAppointmenNavigate}
                >
                  My Appointments
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                    setToken(false);
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>
          ) : (
            <button
              onClick={() => {
                navigator("/login");
                scrollTo(0, 0);
                setIsOpen(false);
              }}
              className="px-6 py-3 bg-white text-sm text-custom-black/90 rounded-full  font-medium hover:scale-105 transition-all duration-200"
            >
              Create account
            </button>
          )}
        </div>

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
