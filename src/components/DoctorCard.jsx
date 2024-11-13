import { Link } from "react-router-dom";
import Doctor1 from "../assets/doctor1.jpg";
import Doctor2 from "../assets/doctor2.jpg";
import Doctor3 from "../assets/doctor3.jpeg";
import Doctor4 from "../assets/doctor4.jpeg";
import Doctor5 from "../assets/doctor5.jpeg";
import Doctor6 from "../assets/doctor6.jpeg";
import Doctor7 from "../assets/doctor7.jpeg";

const DoctorCard = ({doctorData}) => {

  console.log(doctorData)
  
  return (
    <>
    <div className="flex w-full basis-[80%] md:basis-[70%] sm:basis-[60%] mx-auto">
          <Link to="/doctor-details">
           {
            doctorData.map((doctor,i)=>{
             return <div key={i} className="grid w-full justify-center items-center mx-0  md:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  ">
              <div className="w-full md:basis-[26%] bg-gray-700 mb-1">
                <img
                  src={Doctor1}
                  alt=""
                  className="w-full md:h-48 object-cover"
                />
                {console.log(doctor)}
                <div className="bg-slate-900 text-white">
                  <h1>{doctor.id}</h1>
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
            })
           }
          </Link>
        </div>
    </>
  )
}

export default DoctorCard