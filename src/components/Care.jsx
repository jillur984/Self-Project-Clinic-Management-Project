import { useEffect, useState } from "react";
import axios from "axios";
import SidebarFilter from "./SidebarFilter";
import DoctorCard from "./DoctorCard";

const Care = () => {
  const [doctorData, setDoctorData] = useState([]);

  console.log(doctorData?.data);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVER_BASE_URL
          }/members/local?page=2&size=10&filter=role:doctor&expand=doctor.*`
        );
        if (response.status === 200) {
          setDoctorData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctorData();
  }, []);

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
        <SidebarFilter/>
       
        {/*Doctor Card Section Work */}
        <DoctorCard doctorData={doctorData?.data || []}/>
      </div>
    </section>
  );
};

export default Care;
