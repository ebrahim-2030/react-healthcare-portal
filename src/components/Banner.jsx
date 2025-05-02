import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {

    // hook to navigate to the login bage
  const navigator = useNavigate();

  return (

    <div className="bg-gradient-to-t from-[#9063e4] to-brand  rounded-xl md:flex justify-between">

        {/* left content (text) */}
      <div className="text-xl sm:text-4xl lg:text-4xl font-semibold text-white py-8 sm:py-10 px-6 sm:px-12  lg:p-16">
        <p className=" mb-3  lg:mb-5  lg:text-5xl md:leading-[50px]">
          Book <br className="hidden md:block lg:hidden" /> Appointment
        </p>
        <p className="font-normal sm:text-2xl lg:text-3xl">
          With 100+ Trusted Doctors
        </p>
        <button
          onClick={() => {
            navigator("/login");
            scrollTo(0, 0);
          }}
          className="px-6 py-3 bg-white text-sm text-custom-black/90 rounded-full mt-8 font-medium hover:scale-105 transition-all duration-200"
        >
          Create account
        </button>
      </div>

      {/* right context (image) */}
      <div className="hidden  md:block md:w-[350px] relative">
        <img
          className="absolute bottom-0 right-0"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
