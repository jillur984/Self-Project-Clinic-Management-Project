import { useState } from "react";
import { useMembers } from "../hooks/useMembers";
import Searchbar from "../components/Searchbar";

import Membersidebar from "./Membersidebar";

const AllMember = () => {
  const { members } = useMembers();

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = members?.data?.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const TotalPages = Math.ceil(members?.data?.length / recordsPerPage);

  const handleSearchChange = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  // console.log(searchQuery);

  return (
    <>
      <h1 className="text-center text-3xl text-yellow-400 font-bold mb-6 mt-5">
        All Members
      </h1>
      <Searchbar onSearchChange={handleSearchChange} />

      <Membersidebar
        TotalPages={TotalPages}
        currentRecords={currentRecords}
        currentPage={currentPage}
        recordsPerPage={recordsPerPage}
        setCurrentPage={setCurrentPage}
        members={members}
        searchQuery={searchQuery}
      />
    </>
  );
};

export default AllMember;
