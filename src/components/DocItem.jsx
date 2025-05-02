import React from "react";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const DocItem = ({ item }) => {
  // hook to navigate to the appointment page
  const navigator = useNavigate();

  // navigate to the appointment page
  const handleAppontmentNavigaror = (id) => {
    navigator(`/appointment/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div
      onClick={() => handleAppontmentNavigaror(item._id)}
      key={item._id}
      className=" w-full shadow  rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-500 cursor-pointer"
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
  );
};

export default DocItem;
