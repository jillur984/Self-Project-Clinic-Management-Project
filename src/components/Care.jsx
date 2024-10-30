import { Link } from "react-router-dom";
import Doctor from "../assets/doctor2.jpg";

const Care = () => {

  return (
    <section className="container bg-black mt-2">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search... "
          className="w-full mt-5 h-10 md:w-5/6 lg:w-2/3 xs:w-2/2 px-4 placeholder:text-black bg-gray-200 border-2 border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>
      <div className="flex gap-5">
        {/* Sidebar filter Work */}

        <div className="hidden md:block p-3 basis-[15%] ">
          <header>
            <h1 className="text-lg text-white font-bold mb-4">Filter By:</h1>
          </header>
          <fieldset className="">
            <div className="flex gap-1 text-white">
              <input type="checkbox" id="doctor-filter" className="" />
              <label htmlFor="doctor-filter text-white">Doctor</label>
            </div>
            <div className="flex gap-1 text-white">
              <input type="checkbox" id="nurse-filter" className="" />
              <label htmlFor="nurse-filter text-white">Nurse</label>
            </div>
          </fieldset>

          <header>
            <h1 className="text-lg text-white font-semibold mt-6 mb-4">
              Filter By Weekend:
            </h1>
          </header>
          <fieldset className="text-white">
            {[
              "All Day",
              "Saturday",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ].map((day) => (
              <div key={day}>
                <input
                  type="checkbox"
                  id={`${day.toLowerCase()}-filter`}
                  className="mr-2"
                />
                <label htmlFor={`${day.toLowerCase()}-filter`}>{day}</label>
              </div>
            ))}
          </fieldset>
        </div>

        {/*Doctor Card Section Work */}
  
          
        </div>
     
    </section>
  );
};

export default Care;
