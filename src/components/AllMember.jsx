import { useState } from "react";
import { useMembers } from "../hooks/useMembers";
import Searchbar from "../components/Searchbar";
import MemberCard from "./MemberCard";
import Membersidebar from "./Membersidebar";
import Pagination from "./Pagination";

const AllMember = () => {
  const { members } = useMembers();

  const [filteredRoleData, setFilteredRoleData] = useState([]);

  console.log("Testing", filteredRoleData);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = members?.data?.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  // const TotalPages = Math.ceil(members?.data?.length / recordsPerPage);
  const TotalPages = Math.ceil(filteredRoleData.length / recordsPerPage);

  // here i implement search functionality
  const handleSearchData = (searchItem) => {
    setFilteredRoleData(searchItem);
  };

  return (
    <>
      <h1 className="text-center text-3xl text-yellow-400 font-bold mb-6 mt-5">
        All Members
      </h1>
      <Searchbar onSearchChange={handleSearchData} />

      <div className="flex gap-5  mt-8">
        <Membersidebar
          members={members}
          setFilteredRoleData={setFilteredRoleData}
        />

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
          {filteredRoleData.length > 0
            ? filteredRoleData.map((memberItem) => {
                return (
                  <MemberCard key={memberItem.id} memberItem={memberItem} />
                );
              })
            : members?.data?.map((memberItem) => {
                return (
                  <MemberCard key={memberItem.id} memberItem={memberItem} />
                );
              })}
        </div>
      </div>
      <Pagination
        TotalPages={TotalPages}
        currentRecords={currentRecords}
        currentPage={currentPage}
        recordsPerPage={recordsPerPage}
      />
    </>
  );
};

export default AllMember;
