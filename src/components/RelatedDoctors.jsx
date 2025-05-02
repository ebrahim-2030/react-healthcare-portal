import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import DocItem from "./DocItem";

const RelatedDoctors = ({ docId, speciality }) => {
  // get doctors data from context
  const { doctors } = useContext(AppContext);

  //   state to store related doctors data
  const [relDoctors, setRelDoctors] = useState([]);

  //   get related doctors data
  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoctors(doctorsData);
    }
  }, [doctors, speciality, docId]);
  return (
    <div className="mt-12 md:mt-20 flex flex-col items-center px-4 sm:px-0">
      {/* heading and describtion */}
      <div className="flex flex-col items-center">
        <h2 className="mb-5 text-2xl font-medium md:text-3xl md:font-semibold">
          Related Doctors
        </h2>
        <p className="text-center mb-2 text-sm font-medium text-custom-black/80">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* related doctors grid */}
      <div className="my-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {relDoctors.slice(0, 5).map((item) => (
          <DocItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedDoctors;
