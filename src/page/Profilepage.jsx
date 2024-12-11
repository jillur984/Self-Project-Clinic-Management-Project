import { useState } from "react";
import clinicLogo from "../assets/logo1.jpeg";
import { HiArrowDown } from "react-icons/hi2";

import Profileform from "../components/Profileform";

const Profilepage = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="flex gap-5">
        <div className="bg-slate-800 h-screen basis-[30%]">
          <img src={clinicLogo} alt="" />

          <div className="my-5 ">
            <ul className="text-2xl gap-y-3 px-2">
              <li className="hover:bg-black text-orange-500 p-2 rounded-lg transition duration-300 hover:text-white w-full">
                Home
              </li>
              <li className="hover:bg-black text-orange-500 p-2 rounded-lg transition duration-300 hover:text-white w-full">
                Profile
              </li>
              <li className="hover:bg-black text-orange-500 p-2 rounded-lg transition duration-300 hover:text-white w-full">
                Care
              </li>
              <li className="hover:bg-black text-orange-500 p-2 rounded-lg transition duration-300 hover:text-white w-full">
                Patient
              </li>
              <li className="hover:bg-black text-orange-500 p-2 rounded-lg transition duration-300 hover:text-white w-full">
                Sign Out
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-[70%] mx-auto mt-10">
          <div className="flex">
            <div className="basis-[95%] bg-green-500 p-4">
              <h1 className="text-black">Profile</h1>
            </div>
            <button
              className="basis-[5%]"
              onClick={() => setShowForm(!showForm)}
            >
              <HiArrowDown className="text-3xl text-ye" />
            </button>
          </div>

          <div className="flex">
            <div className="basis-[95%] bg-yellow-500 p-4 mt-5">
              <h1 className="text-black">Password</h1>
            </div>
            <button
              className="basis-[5%]"
              onClick={() => setShowForm(!showForm)}
            >
              <HiArrowDown className="text-3xl text-ye" />
            </button>
          </div>
          {showForm && <Profileform />}
        </div>
      </div>
    </>
  );
};

export default Profilepage;
