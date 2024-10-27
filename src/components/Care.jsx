import { Link } from "react-router-dom";
import Doctor from "../assets/doctor2.jpg";

const Care = () => {

  return (
    <section className="container">
      <div className="flex justify-center mt-8 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-10 md:w-5/6 lg:w-2/3 xs:w-2/2 px-4 bg-gray-200 border-2 border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>
      <div className="flex gap-5">
        {/* Sidebar filter Work */}

        <div className="hidden md:block basis-[15%]">
          <header>
            <h1 className="text-lg font-semibold mb-4">Filter By:</h1>
          </header>
          <fieldset className="">
            <div>
              <input type="checkbox" id="doctor-filter" className="" />
              <label htmlFor="doctor-filter">Doctor</label>
            </div>
            <div>
              <input type="checkbox" id="nurse-filter" className="" />
              <label htmlFor="nurse-filter">Nurse</label>
            </div>
          </fieldset>

          <header>
            <h1 className="text-lg font-semibold mt-6 mb-4">
              Filter By Weekend:
            </h1>
          </header>
          <fieldset className="">
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
        {/* Card Section Wokr */}

        <div className="flex flex-wrap gap-y-5 mb-4 w-full items-center flex-col md:flex-row md:gap-2">
          <div className="flex">
            <Link to="/doctor-details">
              <div className="bg-white shadow-lg rounded-lg p-4 w-64">
                <img
                  src={Doctor}
                  alt="Dr. Yusuf Ali"
                  className="h-40 w-full object-cover object-center rounded-t-lg"
                />
                <h1 className="text-lg font-semibold mt-3 ">Dr. Yusuf Ali</h1>
                <p className="text-gray-600 mt-1 ">{`xyz@email.com`}</p>
                <p className="text-gray-500 mt-1 ">{`MBBS, FCPS, Dhaka Medical College`}</p>
                <p className="text-gray-500 mt-1 ">{`Available All Day`}</p>
                <p className="text-blue-600 font-semibold mt-2">{`8 Years of Experience in Medicine`}</p>
                <h2 className="text-md font-semibold mt-4">Rating</h2>
                <p className="text-yellow-500">★★★★☆</p>
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/doctor-details">
              <div className="bg-white shadow-lg rounded-lg p-4 w-64">
                <img
                  src={Doctor}
                  alt="Dr. Yusuf Ali"
                  className="h-40 w-full object-cover object-center rounded-t-lg"
                />
                <h1 className="text-lg font-semibold mt-3 ">Dr. Yusuf Ali</h1>
                <p className="text-gray-600 mt-1 ">{`xyz@email.com`}</p>
                <p className="text-gray-500 mt-1 ">{`MBBS, FCPS, Dhaka Medical College`}</p>
                <p className="text-gray-500 mt-1 ">{`Available All Day`}</p>
                <p className="text-blue-600 font-semibold mt-2">{`8 Years of Experience in Medicine`}</p>
                <h2 className="text-md font-semibold mt-4">Rating</h2>
                <p className="text-yellow-500">★★★★☆</p>
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/doctor-details">
              <div className="bg-white shadow-lg rounded-lg p-4 w-64">
                <img
                  src={Doctor}
                  alt="Dr. Yusuf Ali"
                  className="h-40 w-full object-cover object-center rounded-t-lg"
                />
                <h1 className="text-lg font-semibold mt-3 ">Dr. Yusuf Ali</h1>
                <p className="text-gray-600 mt-1 ">{`xyz@email.com`}</p>
                <p className="text-gray-500 mt-1 ">{`MBBS, FCPS, Dhaka Medical College`}</p>
                <p className="text-gray-500 mt-1 ">{`Available All Day`}</p>
                <p className="text-blue-600 font-semibold mt-2">{`8 Years of Experience in Medicine`}</p>
                <h2 className="text-md font-semibold mt-4">Rating</h2>
                <p className="text-yellow-500">★★★★☆</p>
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/doctor-details">
              <div className="bg-white shadow-lg rounded-lg p-4 w-64">
                <img
                  src={Doctor}
                  alt="Dr. Yusuf Ali"
                  className="h-40 w-full object-cover object-center rounded-t-lg"
                />
                <h1 className="text-lg font-semibold mt-3 ">Dr. Yusuf Ali</h1>
                <p className="text-gray-600 mt-1 ">{`xyz@email.com`}</p>
                <p className="text-gray-500 mt-1 ">{`MBBS, FCPS, Dhaka Medical College`}</p>
                <p className="text-gray-500 mt-1 ">{`Available All Day`}</p>
                <p className="text-blue-600 font-semibold mt-2">{`8 Years of Experience in Medicine`}</p>
                <h2 className="text-md font-semibold mt-4">Rating</h2>
                <p className="text-yellow-500">★★★★☆</p>
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/doctor-details">
              <div className="bg-white shadow-lg rounded-lg p-4 w-64">
                <img
                  src={Doctor}
                  alt="Dr. Yusuf Ali"
                  className="h-40 w-full object-cover object-center rounded-t-lg"
                />
                <h1 className="text-lg font-semibold mt-3 ">Dr. Yusuf Ali</h1>
                <p className="text-gray-600 mt-1 ">{`xyz@email.com`}</p>
                <p className="text-gray-500 mt-1 ">{`MBBS, FCPS, Dhaka Medical College`}</p>
                <p className="text-gray-500 mt-1 ">{`Available All Day`}</p>
                <p className="text-blue-600 font-semibold mt-2">{`8 Years of Experience in Medicine`}</p>
                <h2 className="text-md font-semibold mt-4">Rating</h2>
                <p className="text-yellow-500">★★★★☆</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Care;
