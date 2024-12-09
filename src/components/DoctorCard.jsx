import { Link } from "react-router-dom";
import Doctor1 from "../assets/doctor1.jpg";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ filteredData }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full basis-[80%] md:basis-[70%] sm:basis-[60%] mx-auto">
        {
          <div className="grid w-full justify-center items-center md:grid-cols-3 lg:grid-cols-4 gap-3  ">
            {filteredData.map((doctor) => {
              return (
                <Link to={`/doctor-details/${doctor.id}`} key={doctor.id}>
                  <div className="w-full bg-gray-700 mb-1">
                    <FaEdit
                      className="flex"
                      onClick={() => navigate("/report")}
                    />
                    <img
                      src={Doctor1}
                      alt=""
                      className="w-full md:h-48 object-cover"
                    />

                    <div className="bg-slate-900  md:p-5 text-white">
                      {doctor?.username ? (
                        <h1>{doctor.username}</h1>
                      ) : (
                        <h1>Name is Empty</h1>
                      )}

                      <h2>{doctor?.email}</h2>
                      <p>Avaiable all day</p>
                      <h2>8 Years of Experience</h2>
                      <h2 className="text-md font-semibold mt-4">Rating</h2>
                      <p className="text-yellow-500">★★★★☆</p>
                      <button className="bg-white text-black block mx-auto p-1.5  hover:text-yellow-500 hover:bg-black font-bold animate-pulse">
                        Booked Now
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        }
      </div>
    </>
  );
};

export default DoctorCard;
