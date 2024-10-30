// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Doctor1 from "../assets/doctor1.jpg";
import Doctor2 from "../assets/doctor2.jpg";
import Doctor3 from "../assets/doctor3.jpeg";
import Doctor4 from "../assets/doctor4.jpeg";
import Doctor5 from "../assets/doctor5.jpeg";
import Doctor6 from "../assets/doctor6.jpeg";
import Doctor7 from "../assets/doctor7.jpeg";

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
      <div className="flex gap-5 ">
        {/* Sidebar filter Work */}
        <div className="hidden md:block p-3 basis-[20%] ">
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
                <label htmlFor={`${day.toLowerCase()}-filter`} className="">
                  {day}
                </label>
              </div>
            ))}
          </fieldset>
        </div>

        {/*Doctor Card Section Work */}
        <div className="flex w-full basis-[80%] md:basis-[70%] sm:basis-[60%] mx-auto">
          <Link to="/doctor-details">
            <div className="grid w-full justify-center items-center mx-0  md:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  ">
              <div className="w-full md:basis-[26%] bg-gray-700 mb-1">
                <img
                  src={Doctor1}
                  alt=""
                  className="w-full md:h-48 object-cover"
                />
                <div className="bg-slate-900 text-white">
                  <h1>Dr. Md. Yusuf Ali</h1>
                  <h2>yusuf.ali@gmail.com</h2>
                  <p>Avaiable all day</p>
                  <h2>8 Years of Experience</h2>
                  <h2 className="text-md font-semibold mt-4">Rating</h2>
                  <p className="text-yellow-500">★★★★☆</p>
                </div>
              </div>
              <div className="w-full md:basis-[26%] bg-gray-700 mb-1 ">
                <img
                  src={Doctor2}
                  alt=""
                  className="w-full md:h-48 object-cover"
                />
                <div className="bg-slate-900 text-white">
                  <h1>Dr. Md. Yusuf Ali</h1>
                  <h2>yusuf.ali@gmail.com</h2>
                  <p>Avaiable all day</p>
                  <h2>8 Years of Experience</h2>
                  <h2 className="text-md font-semibold mt-4">Rating</h2>
                  <p className="text-yellow-500">★★★★☆</p>
                </div>
              </div>
              <div className="w-full md:basis-[26%] bg-gray-700 mb-1">
                <img
                  src={Doctor3}
                  alt=""
                  className="w-full md:h-48 object-fit"
                />
                <div className="bg-slate-900 text-white">
                  <h1>Dr. Md. Yusuf Ali</h1>
                  <h2>yusuf.ali@gmail.com</h2>
                  <p>Avaiable all day</p>
                  <h2>8 Years of Experience</h2>
                  <h2 className="text-md font-semibold mt-4">Rating</h2>
                  <p className="text-yellow-500">★★★★☆</p>
                </div>
              </div>
              <div className="w-full md:basis-[26%] bg-gray-700 mb-1 overflow-hidden">
                <img
                  src={Doctor4}
                  alt=""
                  className="w-full md:h-48 object-fit"
                />
                <div className="bg-slate-900 text-white">
                  <h1>Dr. Md. Yusuf Ali</h1>
                  <h2>yusuf.ali@gmail.com</h2>
                  <p>Avaiable all day</p>
                  <h2>8 Years of Experience</h2>
                  <h2 className="text-md font-semibold mt-4">Rating</h2>
                  <p className="text-yellow-500">★★★★☆</p>
                </div>
              </div>
              <div className="w-full md:basis-[26%] bg-gray-700 mb-1">
                <img
                  src={Doctor5}
                  alt=""
                  className="w-full md:h-48 object-fit"
                />
                <div className="bg-slate-900 text-white">
                  <h1>Dr. Md. Yusuf Ali</h1>
                  <h2>yusuf.ali@gmail.com</h2>
                  <p>Avaiable all day</p>
                  <h2>8 Years of Experience</h2>
                  <h2 className="text-md font-semibold mt-4">Rating</h2>
                  <p className="text-yellow-500">★★★★☆</p>
                </div>
              </div>
              <div className="w-full md:basis-[26%] bg-gray-700 mb-1">
                <img
                  src={Doctor6}
                  alt=""
                  className="w-full md:h-48 object-fit"
                />
                <div className="bg-slate-900 text-white">
                  <h1>Dr. Md. Yusuf Ali</h1>
                  <h2>yusuf.ali@gmail.com</h2>
                  <p>Avaiable all day</p>
                  <h2>8 Years of Experience</h2>
                  <h2 className="text-md font-semibold mt-4">Rating</h2>
                  <p className="text-yellow-500">★★★★☆</p>
                </div>
              </div>
              <div className="w-full md:basis-[26%] bg-gray-700 mb-1">
                <img
                  src={Doctor7}
                  alt=""
                  className="w-full md:h-48 object-fit"
                />
                <div className="bg-slate-900 text-white">
                  <h1>Dr. Md. Yusuf Ali</h1>
                  <h2>yusuf.ali@gmail.com</h2>
                  <p>Avaiable all day</p>
                  <h2>8 Years of Experience</h2>
                  <h2 className="text-md font-semibold mt-4">Rating</h2>
                  <p className="text-yellow-500">★★★★☆</p>
                </div>
              </div>
              <div className="w-full md:basis-[26%] bg-gray-700 mb-1">
                <img
                  src={Doctor2}
                  alt=""
                  className="w-full md:h-48 object-cover"
                />
                <div className="bg-slate-900 text-white">
                  <h1>Dr. Md. Yusuf Ali</h1>
                  <h2>yusuf.ali@gmail.com</h2>
                  <p>Avaiable all day</p>
                  <h2>8 Years of Experience</h2>
                  <h2 className="text-md font-semibold mt-4">Rating</h2>
                  <p className="text-yellow-500">★★★★☆</p>
                </div>
              </div>
              <div className="w-full md:basis-[26%] bg-gray-700 mb-1">
                <img
                  src={Doctor6}
                  alt=""
                  className="w-full md:h-48 object-fit"
                />
                <div className="bg-slate-900 text-white">
                  <h1>Dr. Md. Yusuf Ali</h1>
                  <h2>yusuf.ali@gmail.com</h2>
                  <p>Avaiable all day</p>
                  <h2>8 Years of Experience</h2>
                  <h2 className="text-md font-semibold mt-4">Rating</h2>
                  <p className="text-yellow-500">★★★★☆</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Care;
