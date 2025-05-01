import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import DocItem from "./DocItem";

const TopDoctors = () => {
  // get doctores form context
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center px-4 sm:px-0">
      {/* heading and describtion */}
      <div className="flex flex-col items-center">
        <h2 className="mb-5 text-2xl font-medium md:text-3xl md:font-semibold">
          Top Doctors To Book
        </h2>
        <p className="text-center mb-2 text-sm font-medium text-custom-black/80">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* doctors card grid */}
      <div className="my-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {doctors.slice(0, 10).map((item) => (
          <DocItem key={item._id} item={item} />
        ))}
      </div>

      {/* more botton */}
      <button
        onClick={() => {
          navigator("/doctors");
          scrollTo(0.0);
        }}
        className="mt-4 px-6 py-3 text-sm rounded-full bg-brand/90 hover:bg-brand transition-all duration-100 text-white"
      >
        more
      </button>
    </div>
  );
};

export default TopDoctors;
