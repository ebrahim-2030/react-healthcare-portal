import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { HiMiniCheckBadge, HiOutlineInformationCircle } from "react-icons/hi2";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const navigator = useNavigate();

  const [docInfo, setDocInfo] = useState(null);
  const days = Object.keys(docInfo?.slots || {});
  const [selectedDay, setSelectedDay] = useState("MON");
  const [selectedSlot, setSelectedSlot] = useState(null);

  // fetch doctor info based on docId
  const fetchDocInfo = () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  // run when doctors data changes
  useEffect(() => {
    fetchDocInfo();
  }, [doctors]);

  // useEffect(() => {
  //   if (docInfo?.slots) {
  //     const days = Object.keys(docInfo.slots);
  //     // setSelectedDay(days[0]);
  //   }
  // }, [docInfo]);

  // handle booking logic
  const handleBooking = () => {
    if (selectedDay && selectedSlot) {
      navigator("/appointments");
      window.scrollTo(0, 0);
    } else alert("Please pick a time slot too.");
  };
  return (
    docInfo && (
      <div className="mt-4 mb-4 sm:mb-20 lg:mb-28 px-4 sm:px-0 flex flex-col items-center">
        {/* doctor details */}
        <div className="md:flex gap-6 relative -z-10">
          {/* doctors image */}
          <div className="bg-brand rounded-lg md:w-2/4 lg:w-2/6 xl:w-1/4 flex flex-col justify-end lg:items-center ">
            <img src={docInfo.image} className="w-[400px]" alt="" />
          </div>

          {/* doctor info */}
          <div className="relative  -mt-[50px] md:mt-0 px-6 py-8 bg-white border border-custom-black/10 mx-2 md:mx-0 rounded-lg md:flex-1">
            <p className="flex items-center gap-2 text-2xl font-semibold text-custom-black/90">
              {docInfo.name}
              <HiMiniCheckBadge className="text-brand" />
            </p>
            <div className="mt-1 flex items-center gap-2">
              <p className="text-xs font-semibold text-custom-black/90">
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="px-3 py-1.5 text-xs font-medium border border-custom-black/10 rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div className="mt-4 ">
              <p className="flex items-center gap-1  font-semibold text-custom-black/90">
                About <HiOutlineInformationCircle className="text-xl" />
              </p>
              <p className="mt-2 text-xs leading-6 font-medium lg:pr-20 lg:leading-7">
                {docInfo.about}
              </p>
            </div>

            <p className="flex items-center gap-2 mt-4 text-md font-semibold">
              Appointment fee: <span>${docInfo.fees}</span>
            </p>
          </div>
        </div>

        {/* booking slots */}
        <div className="mt-12 w-full md:flex flex-col items-center  ">
          {/* day buttons */}
          <div className="flex items-center md:items-start gap-4 custom-scrollbar overflow-x-scroll sm:overflow-hidden pb-4">
            {days.map((day, index) => (
              <button
                className={`flex flex-col gap-2 items-center justify-center min-w-[50px] sm:min-w-[60px] min-h-24  rounded-full text-xs font-semibold border border-custom-black/10   ${
                  selectedDay === day
                    ? "bg-brand text-white"
                    : "bg-white text-custom-black"
                }`}
                key={index}
                onClick={() => setSelectedDay(day)}
              >
                {day}
                <span>{index + 1}</span>
              </button>
            ))}
          </div>

          {/* time slot buttons */}
          <div className="flex items-center md:items-start gap-2 mt-6 custom-scrollbar overflow-x-scroll sm:overflow-hidden pb-4">
            {docInfo?.slots?.[selectedDay]?.length > 0 ? (
              docInfo?.slots?.[selectedDay]?.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSlot(slot)}
                  className={`border text-custom-black/70 border-custom-black/10 rounded-full block min-w-24 min-h-9  text-xs  font-medium ${
                    selectedSlot === slot ? "bg-black/5 " : ""
                  }`}
                >
                  {slot}
                </button>
              ))
            ) : (
              <p className="text-sm font-medium text-custom-black/80">
                Sorry, No slots available on {selectedDay}.
              </p>
            )}
          </div>

          {/* selected appointment display */}
          <div className="mt-4">
            {selectedDay && selectedSlot ? (
              <>
                <p className="text-sm font-medium text-custom-black/80">
                  <span className="font-semibold text-custom-black">
                    Your Appointment:
                  </span>{" "}
                  {selectedDay} - {selectedSlot}
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-500 font-medium italic">
                Pick a day and time for your appointment.
              </p>
            )}
          </div>

          {/* action buttons */}
          <div className="flex items-center gap-4">
            <button
              className="mt-4 px-6 py-3 bg-brand text-white text-xs font-medium rounded-full hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleBooking}
            >
              Book Now
            </button>
            <button
              className="mt-4 px-6 py-3 bg-red-600 text-white text-xs font-medium rounded-full hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setSelectedSlot(null)}
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
