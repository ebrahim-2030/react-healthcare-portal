import React, { useState } from "react";
import { assets } from "../assets/assets";
import { ImTongue } from "react-icons/im";

const Profile = () => {
  // user data state
  const [userData, setUserData] = useState({
    name: "Mark Johnson",
    image: assets.profile_pic,
    email: "markjohnson@gmail.com",
    phone: "+1-821-2812-342",
    address: "57th street, Cross Richmond",

    gender: "Male",
    dob: "2000-01-01",
  });

  // state to enble edite user data
  const [isEdit, setIsEdit] = useState(true);
  return (
    <div className="mt-6 mb-12 md:mb-20 max-w-sm">
      {/* user image */}
      <img src={userData.image} className="rounded h-44 w-44" alt="" />

      {/* user name */}
      <div className="border-b pt-6 pb-4 text-3xl font-semibold text-custom-black/90 ">
        {isEdit ? (
          <input
            className="outline-none bg-custom-black/5 p-1 px-2 w-80"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p>{userData.name}</p>
        )}
      </div>

      <div className="mt-4">
        {/* user contact information */}
        <p className="uppercase font-medium underline text-custom-black/80">
          contact information
        </p>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center gap-12 text-sm font-medium  ">
            <p className="font-semibold text-custom-black">Email:</p>
            {isEdit ? (
              <input
                className="outline-none px-2 py-1 bg-custom-black/5 w-60 "
                type="email "
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-400 cursor-pointer">{userData.email}</p>
            )}
          </div>
          <div className="flex items-center gap-[42px] text-sm font-medium  ">
            <p className="font-semibold text-custom-black">Phone:</p>
            {isEdit ? (
              <input
                className="outline-none px-2 py-1 bg-custom-black/5 w-60 "
                type="text "
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-400 cursor-pointer">{userData.phone}</p>
            )}
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-custom-black/80">
            <p className="font-semibold text-custom-black">Address:</p>
            {isEdit ? (
              <p>
                <input
                  className="outline-none px-2 py-1 bg-custom-black/5 w-60 "
                  type="text"
                  value={userData.address}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                />
              </p>
            ) : (
              <p>
                <span>{userData.address}</span>
              </p>
            )}
          </div>
        </div>

        {/* user basic information */}
        <p className="mt-6 uppercase font-medium underline text-custom-black/80">
          basic information
        </p>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center gap-10 text-sm font-medium ">
            <p>Gender: </p>
            {isEdit ? (
              <select
                className="outline-none px-2 py-1 bg-custom-black/5 "
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>
          <div className="flex items-center gap-8 text-sm font-medium ">
            <p>Birthday:</p>
            {isEdit ? (
              <input
                className="outline-none px-2 py-1 bg-custom-black/5 "
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>

        {/* save and edit buttons */}
        <div className="mt-4">
          {isEdit ? (
            <button
              className="px-5 py-2 bg-brand/90 hover:bg-brand text-white rounded-full transition-all duration-100"
              onClick={() => setIsEdit(false)}
            >
              Save
            </button>
          ) : (
            <button
              className="px-5 py-2 bg-brand/90 hover:bg-brand text-white rounded-full transition-all duration-100"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
