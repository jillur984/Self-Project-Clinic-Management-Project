
import jillur from "../assets/jillur.jpg";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const PatientTable = () => {
  return (
    <>
      <div className="container mx-auto overflow-x-auto">
        <table className="border w-full border-collapse mb-2 ">
          <thead className="">
            <tr className="">
              <th className="border border-black">ID</th>
              <th className="border border-black">Patient</th>
              <th className="border border-black">Created At</th>
              <th className="border border-black">Gender</th>
              <th className="border border-black">Blood Group</th>
              <th className="border border-black">Age</th>
              <th className="border border-black ">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-black">
              <td className="border border-black px-4 py-2 text-center ">1</td>
              <td className="border border-black px-4 py-2 text-center">
                <div className="border-black px-2 py-2 flex justify-center  ">
                  <div className="flex items-center justify-center gap-3">
                    <img
                      src={jillur}
                      alt=""
                      className="h-4 w-8 md:h-12 md:w-12  rounded-full "
                    />
                  </div>
                  <div className="mx-2">
                    <h1>Md. Jillur Rahman</h1>
                    <h2>+8801611780984</h2>
                  </div>
                </div>
              </td>
              <td className="border border-black px-4 py-2 text-center">
                20 Augest 2021
              </td>
              <td className="border border-black px-4 py-2 text-center">
                Male
              </td>
              <td className="border border-black px-4 py-2 text-center">B+</td>
              <td className="border border-black px-4 py-2 text-center">27</td>
              <td className=" border border-black px-4 py-2 text-center">
                <span className="font-bold cursor-pointer">
                  <div className="flex justify-center gap-3">
                    <FaEdit />
                    <MdDelete onClick={()=>confirm("Are you want to Delete ?")} />
                  </div>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PatientTable;
