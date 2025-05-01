import { useContext } from "react";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

const TopDoctors = () => {

  // hook to navigate to the appointment page
  const navigator = useNavigate();

  // get doctores form context
  const { doctors } = useContext(AppContext);

  // navigate to the appointment page
  const handleAppontmentNavigaror = (id) => {
    navigator(`/appointment/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center">

      {/* heading and describtion */}
      <div className="flex flex-col items-center">
        <h2 className="mb-5 text-2xl font-medium md:text-3xl md:font-semibold">
          Top Doctors To Book
        </h2>
        <p className="text-center mb-2 text-sm font-medium text-custom-black/80">
          Simply browse through our extensive list of <br /> trusted doctors.
        </p>
      </div>


      {/* doctors card grid */}
      <div className="my-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {doctors.slice(0, 10).map((item) => (
          <div
            onClick={() => handleAppontmentNavigaror(item._id)}
            key={item._id}
            className="w-[300px] md:w-[230px] lg:w-auto shadow  rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-500 cursor-pointer"
          >
            <img className="bg-blue-50" src={item.image} alt="doctor" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-green-500">
                <GoDotFill className="text-lg" />
                <p className="text-sm font-medium">Available</p>
              </div>
              <p className="text-lg font-semibold text-custom-black/90">
                {item.name}
              </p>
              <p className="text-sm font-medium">{item.speciality}</p>
            </div>
          </div>
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
