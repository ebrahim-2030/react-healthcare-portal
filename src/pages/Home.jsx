import React from "react";
import Header from "../components/Header";
import Speciality from "../components/Speciality";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="mb-12 md:mb-20">
      {/* header section */}
      <section>
        <Header />
      </section>

      {/* specialty section */}
      <section className="mt-12 lg:mt-24">
        <Speciality />
      </section>

      {/* doctors section */}
      <section className="mt-12 lg:mt-28">
        <TopDoctors />
      </section>

      {/* banner section */}
      <section className=" mx-auto mt-12 md:mb-16 lg:mb-28 md:mt-40 lg:mt-32">
        <Banner />
      </section>
    </div>
  );
};

export default Home;
