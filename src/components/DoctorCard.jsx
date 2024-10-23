import { Link } from "react-router-dom";
import Doctor from "../assets/doctor2.jpg";

const DoctorCard = () => {
  return (
    <>
      <div className="container grid mx-auto grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
        <div className="">
          <Link to="/doctor-details">
            <div className="bg-white shadow-lg rounded-lg p-4 w-64">
              <img
                src={Doctor}
                alt="Dr. Yusuf Ali"
                className="h-40 w-full object-cover object-center rounded-t-lg"
              />
              <h1 className="text-lg font-semibold mt-3 text-center">
                Dr. Yusuf Ali
              </h1>
              <p className="text-gray-600 mt-1 text-center">{`xyz@email.com`}</p>
              <p className="text-gray-500 mt-1 text-center">{`MBBS, FCPS, Dhaka Medical College`}</p>
              <p className="text-gray-500 mt-1 text-center">{`Available All Day`}</p>
              <p className="text-blue-600 font-semibold mt-2 text-center">{`8 Years of Experience in Medicine`}</p>
              <h2 className="text-md font-semibold mt-4 text-center">Rating</h2>
              <p className="text-yellow-500 text-center">★★★★☆</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center ">
          <Link to="/doctor-details">
            <div className="bg-white shadow-lg rounded-lg p-4 w-64">
              <img
                src={Doctor}
                alt="Dr. Yusuf Ali"
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <h1 className="text-lg font-semibold mt-3 text-center">
                Dr. Yusuf Ali
              </h1>
              <p className="text-gray-600 mt-1 text-center">{`xyz@email.com`}</p>
              <p className="text-gray-500 mt-1 text-center">{`MBBS, FCPS, Dhaka Medical College`}</p>
              <p className="text-gray-500 mt-1 text-center">{`Available All Day`}</p>
              <p className="text-blue-600 font-semibold mt-2 text-center">{`8 Years of Experience in Medicine`}</p>
              <h2 className="text-md font-semibold mt-4 text-center">Rating</h2>
              <p className="text-yellow-500 text-center">★★★★☆</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center ">
          <Link to="/doctor-details">
            <div className="bg-white shadow-lg rounded-lg p-4 w-64">
              <img
                src={Doctor}
                alt="Dr. Yusuf Ali"
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <h1 className="text-lg font-semibold mt-3 text-center">
                Dr. Yusuf Ali
              </h1>
              <p className="text-gray-600 mt-1 text-center">{`xyz@email.com`}</p>
              <p className="text-gray-500 mt-1 text-center">{`MBBS, FCPS, Dhaka Medical College`}</p>
              <p className="text-gray-500 mt-1 text-center">{`Available All Day`}</p>
              <p className="text-blue-600 font-semibold mt-2 text-center">{`8 Years of Experience in Medicine`}</p>
              <h2 className="text-md font-semibold mt-4 text-center">Rating</h2>
              <p className="text-yellow-500 text-center">★★★★☆</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center ">
          <Link to="/doctor-details">
            <div className="bg-white shadow-lg rounded-lg p-4 w-64">
              <img
                src={Doctor}
                alt="Dr. Yusuf Ali"
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <h1 className="text-lg font-semibold mt-3 text-center">
                Dr. Yusuf Ali
              </h1>
              <p className="text-gray-600 mt-1 text-center">{`xyz@email.com`}</p>
              <p className="text-gray-500 mt-1 text-center">{`MBBS, FCPS, Dhaka Medical College`}</p>
              <p className="text-gray-500 mt-1 text-center">{`Available All Day`}</p>
              <p className="text-blue-600 font-semibold mt-2 text-center">{`8 Years of Experience in Medicine`}</p>
              <h2 className="text-md font-semibold mt-4 text-center">Rating</h2>
              <p className="text-yellow-500 text-center">★★★★☆</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
