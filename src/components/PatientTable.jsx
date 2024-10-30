import jillur from "../assets/jillur.jpg";
const PatientTable = () => {
  return (
    <>
      <div className="container mx-auto overflow-x-auto">
        <table className="border w-full border-collapse  mb-2">
          <thead className="">
            <tr className="">
              <th className="border border-black">ID</th>
              <th className="border border-black">Patient</th>
              <th className="border border-black">Created At</th>
              <th className="border border-black">Gender</th>
              <th className="border border-black">Blood Group</th>
              <th className="border border-black">Age</th>
              <th className="border border-black">Actions</th>
            </tr>
          </thead>
          
          <tbody className="">
            <tr className="border">
              <td className="text-center">1</td>
              <td className="text-center">
                <div className=" flex justify-end ">
                  <div className="flex items-center justify-center">
                    <img
                      src={jillur}
                      alt=""
                      className="h-12 w-12 rounded-full "
                    />
                  </div>
                  <div className="mx-4">
                    <h1>Md. Jillur Rahman</h1>
                    <h2>+8801611780984</h2>
                  </div>
                </div>
              </td>
              <td className="px-10 text-center">20 Augest 2021</td>
              <td className="px-6 text-center">Male</td>
              <td className="px-6 text-center">B+</td>
              <td className="px-6 text-center">27</td>
              <td className="px-6 text-center">
                <span className="font-bold cursor-pointer">...</span>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b-2">
              <td className="text-center">1</td>
              <td className="text-center">
                <div className=" flex justify-end ">
                  <div className="flex items-center justify-center">
                    <img
                      src={jillur}
                      alt=""
                      className="h-4 w-8 md:h-12 md:w-12  rounded-full "
                    />
                  </div>
                  <div className="mx-4">
                    <h1>Md. Jillur Rahman</h1>
                    <h2>+8801611780984</h2>
                  </div>
                </div>
              </td>
              <td className="px-10 text-center">20 Augest 2021</td>
              <td className="px-6 text-center">Male</td>
              <td className="px-6 text-center">B+</td>
              <td className="px-6 text-center">27</td>
              <td className="px-6 text-center">
                <span className="font-bold cursor-pointer">...</span>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b-2">
              <td className="text-center">1</td>
              <td className="text-center">
                <div className=" flex justify-end ">
                  <div className="flex items-center justify-center">
                    <img
                      src={jillur}
                      alt=""
                      className="h-12 w-12 rounded-full "
                    />
                  </div>
                  <div className="mx-4">
                    <h1>Md. Jillur Rahman</h1>
                    <h2>+8801611780984</h2>
                  </div>
                </div>
              </td>
              <td className="px-10 text-center">20 Augest 2021</td>
              <td className="px-6 text-center">Male</td>
              <td className="px-6 text-center">B+</td>
              <td className="px-6 text-center">27</td>
              <td className="px-6 text-center">
                <span className="font-bold cursor-pointer">...</span>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b-2">
              <td className="text-center">1</td>
              <td className="text-center">
                <div className=" flex justify-end ">
                  <div className="flex items-center justify-center">
                    <img
                      src={jillur}
                      alt=""
                      className="h-12 w-12 rounded-full "
                    />
                  </div>
                  <div className="mx-4">
                    <h1>Md. Jillur Rahman</h1>
                    <h2>+8801611780984</h2>
                  </div>
                </div>
              </td>
              <td className="px-10 text-center">20 Augest 2021</td>
              <td className="px-6 text-center">Male</td>
              <td className="px-6 text-center">B+</td>
              <td className="px-6 text-center">27</td>
              <td className="px-6 text-center">
                <span className="font-bold cursor-pointer">...</span>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">
                <div className=" flex justify-end ">
                  <div className="flex items-center justify-center">
                    <img
                      src={jillur}
                      alt=""
                      className="h-12 w-12 rounded-full "
                    />
                  </div>
                  <div className="mx-4">
                    <h1>Md. Jillur Rahman</h1>
                    <h2>+8801611780984</h2>
                  </div>
                </div>
              </td>
              <td className="px-10 text-center">20 Augest 2021</td>
              <td className="px-6 text-center">Male</td>
              <td className="px-6 text-center">B+</td>
              <td className="px-6 text-center">27</td>
              <td className="px-6 text-center">
                <span className="font-bold cursor-pointer">...</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PatientTable;
