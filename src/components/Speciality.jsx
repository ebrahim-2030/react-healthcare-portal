import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const Speciality = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-5 text-2xl font-medium md:text-3xl md:font-semibold">
        Find by Speciality
      </h2>
      <p className="text-center mb-2 text-sm font-medium text-custom-black/80">
        Simply browse through our extensive list of trusted doctors, <br />{" "}
        schedule your appointment hassle-free.
      </p>

      <div className="flex w-full gap-4 overflow-x-scroll sm:overflow-x-hidden pb-4  pt-8 md:justify-center ">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            to={`/doctors/${item.speciality}`}
            key={index}
            className="flex flex-col items-center hover:-translate-y-3 transition-all duration-300"
          >
            <img
              src={item.image}
              className="w-16 h-16 md:h-24 md:w-24 mb-2"
              alt=""
            />
            <p className="text-xs font-medium text-center">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
