import { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import Pagination from "./Pagination";
import axios from "axios";
import { useMembers } from "../hooks/useMembers";
import { handleFilterRole } from "../utils/handleFilterRole";

const Membersidebar = ({
  TotalPages,
  currentRecords,
  currentPage,
  recordsPerPage,
  setCurrentPage,
  searchQuery,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRole, setSelectedRole] = useState();

  console.log(selectedRole);
  const { members } = useMembers();

  // console.log(members?.data);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const query = searchQuery.trim()
          ? `?search_term=${searchQuery}&page=${currentPage}&size=${recordsPerPage}`
          : `?page=${currentPage}&size=${recordsPerPage}`;
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/members/local/${query}`
        );
        if (response.status === 200) {
          setFilteredData(response?.data?.data || []);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchSearchData();
  }, [searchQuery, currentPage, recordsPerPage]);

  useEffect(() => {
    const handleFilterRoleData = async (selectedRole) => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVER_BASE_URL
          }/members/local/?filter=${selectedRole}`
        );
        if (response.status === 200) {
          setFilteredData(response?.data?.data || []);
        }

        console.log("Response from Backend", response?.data?.data);
      } catch (error) {
        console.log("The API Error is", error.message);
      }
    };

    handleFilterRoleData();
  }, [selectedRole]);

  return (
    <>
      <div className="flex justify-around gap-10">
        <aside className="border-r-2 border-red-600  p-10  ">
          <h1 className="text-justify text-nowrap mb-2">Filtered by:</h1>
          <div className="mb-2">
            <input
              type="checkbox"
              id="doctor"
              value="doctor"
              onChange={(e) => setSelectedRole(e.target.value)}
            />
            <label htmlFor="doctor" className="px-1">
              Doctor
            </label>
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              id="nurse"
              className=""
              value="nurse"
              onChange={(e) => setSelectedRole(e.target.value)}
            />
            <label htmlFor="nurse" className="px-1">
              Nurse
            </label>
          </div>
          <div className="w-full flex items-center mb-2">
            <input
              type="checkbox"
              id="nurse"
              value="administrator"
              onChange={(e) => setSelectedRole(e.target.value)}
            />
            <label htmlFor="nurse" className="px-1 text-nowrap">
              Administrator
            </label>
          </div>
          <div>
            <input type="checkbox" id="nurse" />
            <label htmlFor="nurse" className="px-1">
              User
            </label>
          </div>
        </aside>
        <div className="flex-grow pl-4 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredData?.map((memberItem) => {
              return <MemberCard key={memberItem.id} memberItem={memberItem} />;
            })}
          </div>

          {/* here implement Pagination Component and pass data  */}
          <Pagination
            TotalPages={TotalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Membersidebar;
