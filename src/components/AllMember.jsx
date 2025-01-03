import { useState } from "react";
import { useMembers } from "../hooks/useMembers";
import Searchbar from "../components/Searchbar";
import MemberCard from "./MemberCard";
import Membersidebar from "./Membersidebar";
import Pagination from "./Pagination";

const AllMember = () => {
  const { members } = useMembers();

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  // here i keep checkbox and search both data
  const [filteredData, setFilteredData] = useState();

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = members?.data?.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const TotalPages = Math.ceil(members?.data?.length / recordsPerPage);

  const handleSearchChange = (newSearchQuery) => {
    setFilteredData(newSearchQuery);
  };

  return (
    <>
      <h1 className="text-center text-3xl text-yellow-400 font-bold mb-6 mt-5">
        All Members
      </h1>
      <Searchbar onSearchChange={handleSearchChange} />

      <div className="flex gap-5  mt-8">
        <Membersidebar
          TotalPages={TotalPages}
          currentRecords={currentRecords}
          currentPage={currentPage}
          recordsPerPage={recordsPerPage}
          setCurrentPage={setCurrentPage}
          members={members}
        />

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
          {members?.data?.map((memberItem) => {
            return <MemberCard key={memberItem.id} memberItem={memberItem} />;
          })}
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default AllMember;
