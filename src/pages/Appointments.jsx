import React, { useContext } from "react";

import { AppContext } from "../contexts/AppContext";

const Appointments = () => {
  const { doctors } = useContext(AppContext);

  // format current date in readable form
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mt-8 sm:mt-16 mb-10 sm:mb-20">
      {/* header */}
      <div>
        <p className="text-xl font-medium">My Appointments</p>
      </div>

      {/* appointments list */}
      <div className="mt-4  flex flex-col gap-2">
        {doctors.slice(0, 4).map((item) => (
          <div
            key={item._id}
            className=" sm:flex items-center justify-between border p-4"
          >
            <div className="flex items-center  gap-3">
              <div className="bg-blue-50">
                <img src={item.image} className="h-48 w-48" alt="" />
              </div>
              <div className=" text-xs sm:text-sm font-medium text-custom-black/80">
                <div>
                  <p className="text-sm mb-1 sm:text-lg font-semibold">
                    {item.name}
                  </p>
                  <span>{item.speciality}</span>
                </div>
                <div>
                  <span className="font-semibold mt-2 mb-0.5 sm:mt-4 block">
                    Address
                  </span>
                  <div>
                    <span>{item.address.line1}</span>
                    <br />
                    <span>{item.address.line2}</span>
                  </div>
                </div>
                <div>
                  <span className="font-semibold block mt-2 mb-0.5 sm:mt-4">
                    Date & Time
                  </span>{" "}
                  <span>
                    {currentDate} - {item.slots.MON[0]}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col  gap-3 mt-3">
              <button className="flex-1 sm:flex-auto px-8 sm:px-12 py-3 border hover:border-brand hover:bg-brand hover:text-white transition-all duration-100 rounded-sm text-sm">
                Pay here
              </button>
              <button className="flex-1 sm:flex-auto px-8 sm:px-12 py-3 border hover:border-brand hover:bg-brand hover:text-white transition-all duration-100 rounded-sm text-sm">
                Cancel{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
