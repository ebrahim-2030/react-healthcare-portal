import React from "react";
import Header from "../components/Header";
import Speciality from "../components/Speciality";

const Home = () => {
  return (
    <div className="">
      <section>
        <Header />
      </section>

      <section className="mt-12">
        <Speciality />
      </section>
    </div>
  );
};

export default Home;
