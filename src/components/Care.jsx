import { useEffect, useState } from "react";
import axios from "axios";
import SidebarFilter from "./SidebarFilter";
import DoctorCard from "./DoctorCard";

const Care = () => {
  const [doctorData, setDoctorData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page] = useState(0);

  useEffect(() => {
    const fetchDoctorData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVER_BASE_URL
          }/members/local?page=${page}&size=36&filter=role:doctor&expand=doctor.*`
        );
        if (response.status === 200) {
          setDoctorData(response.data?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorData();
  }, [page]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData(doctorData);
    } else {
      const filtered =doctorData?.filter((doctor) =>
        doctor?.username?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, doctorData]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <span className="loading loading-spinner text-yellow-400 w-20 h-20"></span>
        <h2 className="text-2xl font-bold text-yellow-400 mt-4">
          Please wait! Data is loading...
        </h2>
      </div>
    );
  }

  return (
    <section className="container bg-black mt-2">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search... "
          className="w-full mt-5 h-10 md:w-5/6 lg:w-2/3 xs:w-2/2 px-4 placeholder:text-black bg-gray-200 border-2 border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>
      <div className="flex gap-5 ">
        {/* Sidebar filter Work */}
        <SidebarFilter doctorData={doctorData} />

        {/*Doctor Card Section Work */}

        {/* <DoctorCard doctorData={doctorData?.data || []} /> */}
        <DoctorCard filteredData={filteredData} />
      </div>
    </section>
  );
};

export default Care;
