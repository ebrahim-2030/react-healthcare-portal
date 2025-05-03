import { assets } from "../assets/assets";
const About = () => {
  return (
    <div
      className="mt-3 md:mt-6 lg:mt-12 mb-10 md:mb-20
     "
    >
      <div className="sm:flex flex-col sm:items-center lg:flex-row lg:items-stretch gap-4">

        {/* abou us image */}
        <div className="sm:w-1/2 lg:w-2/5">
          <img src={assets.about_image} className=" lg:h-full" alt="" />
        </div>

        {/* about us info */}
        <div className="lg:flex-1 mt-4 lg:mt-0   p-4 pt-6 lg:pr-12">
          <h2 className="text-sm lg:text-base font-medium text-custom-black/90 mb-3">
            About <span className="font-bold">Us</span>
          </h2>
          <p className="mb-6 text-xs font-medium leading-6">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="mb-6 text-xs font-medium leading-6">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <div>
            <h2 className="text-sm lg:text-base font-medium text-custom-black/90 mb-2">
              Our <span className="font-bold">Visoin</span>
            </h2>
            <p className="text-xs font-medium leading-6">
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* why choos us section */}
      <div className="mt-12">
        <h2 className="text-xl font-medium text-custom-black/90 mb-8">
          Why <span className="font-semibold">Choose Us</span>{" "}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-0 text-custom-black/90">
          <div className="bg-white border border-custom-black/10   py-16 px-10 hover:bg-brand hover:text-white transition-all duration-100 cursor-pointer">
            <b className="text-sm mb-4 block ">EFFICIENCY:</b>
            <p className="text-xs font-medium leading-6">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="bg-white  border border-custom-black/10  py-16 px-10 hover:bg-brand hover:text-white transition-all duration-100 cursor-pointer">
            <b className="text-sm mb-4 block ">CONVENIENCE: </b>
            <p className="text-xs font-medium leading-6">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="bg-white border border-custom-black/10   py-16 px-10 hover:bg-brand hover:text-white transition-all duration-100 cursor-pointer">
            <b className="text-sm mb-4 block ">PERSONALIZATION: </b>
            <p className="text-xs font-medium leading-6">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
