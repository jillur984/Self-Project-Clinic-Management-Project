import { Link } from "react-router-dom";
import Doctor from "../assets/doctor2.jpg";

const DoctorCard = () => {
  return (
    <>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <div className="grid place-items-center">
          <div className="container grid justify-center items-center">
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

          <div className="grid justify-center ">
            <Link to="/doctor-details">
              <div className= "bg-white shadow-lg rounded-lg p-4 w-64">
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
          <div className="grid justify-center items-center mb-5">
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
          <div className="grid justify-center items-center mb-5">
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
      
    </>
  );
};

export default DoctorCard;
