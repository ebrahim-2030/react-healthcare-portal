import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { specialityData } from "../assets/assets";
import DocItem from "../components/DocItem";

const Doctors = () => {
  const { speciality } = useParams();
  const specialities = specialityData.map(
    (speciality) => speciality.speciality
  );
  const { doctors } = useContext(AppContext);
  const navigator = useNavigate();

  const filteredDoctors = speciality
    ? doctors.filter((doc) => doc.speciality === speciality)
    : doctors;

  const handleNavigate = (s) => {
    if (speciality === s) {
      navigator(`/doctors`);
    } else {
      navigator(`/doctors/${s}`);
    }
  };
  return (
    <div className="mt-4 mb-12 sm:mb-20 lg:mb-28 px-4 sm:px-0 flex flex-col items-center">
      <p className="font-medium text-custom-black/80 w-full">
        Browse through the doctors specialist.
      </p>
      <div className=" flex flex-col items-center sm:flex-row sm:items-start sm:justify-between mt-10  gap-6">
        <div className="w-full sm:w-[220px] grid grid-cols-2 gap-4 sm:grid-cols-1">
          {specialities.map((s) => (
            <p
              onClick={() => handleNavigate(s)}
              key={s}
              className={` text-sm font-medium text-custom-black/90 p-2 border border-blue-100 rounded-md cursor-pointer hover:bg-blue-50 ${
                s === speciality ? "bg-blue-50" : ""
              }`}
            >
              {s}
            </p>
          ))}
        </div>
        <div className="flex-1 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {filteredDoctors.map((item) => (
            <DocItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
