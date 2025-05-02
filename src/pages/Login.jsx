import React from "react";

const Login = () => {
  // prevent default form action
  function handleSubmite(e) {
    e.preventDefault();
  }

  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className=" w-[360px] sm:w-[400px] text-white   p-8  pt-12 rounded-lg bg-gradient-to-t from-[#9063e4] to-brand ">
        {/* form title */}
        <h2 className="text-2xl font-semibold text-white">Create Account</h2>
        <p className="mb-6 mt-2  text-sm font-medium text-white">
          Please sign up to book appointment
        </p>

        <form onSubmit={handleSubmite} className="mt-4 flex flex-col gap-4 ">
          {/* fullname controller */}
          <div className="flex flex-col text-sm">
            <label className=" font-medium" htmlFor="fullname">
              Full Name
            </label>
            <input
              className="mt-2   px-2 py-2.5 outline-none rounded-full"
              type="text"
              id="fullname"
              name="fullname"
            />
          </div>

          {/* email controller */}
          <div className="flex flex-col text-sm">
            <label className=" font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="mt-2   px-2 py-2.5 outline-none rounded-full"
              type="email"
              id="email"
              name="email"
            />
          </div>

          {/* password controller */}
          <div className="flex flex-col text-sm">
            <label className=" font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="mt-2   px-2 py-2.5 outline-none rounded-full"
              type="password"
              id="password"
              name="password"
            />
          </div>

          {/* submit button */}
          <div className="mx-auto">
            <button className="mt-2 px-6 py-3 bg-white text-sm bg-gradient-to-t from-[#9063e4] to-brand border border-white rounded-full font-semibold  transition-all duration-200">
              Create account
            </button>
          </div>
        </form>

        {/* already have and account & login  */}
        <p className="mt-4 text-sm font-medium ">
          Already have an account?{" "}
          <span className=" font-medium underline cursor-pointer">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
