import { useState } from "react";
import { useMembers } from "../hooks/useMembers";

import MemberCard from "./MemberCard";
import Pagination from "./Pagination";

const AllMember = () => {
  const { members } = useMembers();

  console.log(Array.isArray(members?.data));

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(12);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = members?.data?.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const TotalPages = Math.ceil(members?.data?.length / recordsPerPage);

  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-6 text-white">
        All Members
      </h1>
      <div className="flex justify-around gap-10">
        <aside className="border-r-2 border-red-600 pr-4 p-16">
          <h1>Filtered by</h1>
          <div>
            <input type="checkbox" id="doctor" />
            <label htmlFor="doctor">Doctor</label>
          </div>
          <div>
            <input type="checkbox" id="nurse" />
            <label htmlFor="nurse">Nurse</label>
          </div>
        </aside>
        <div className="flex-grow pl-4 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentRecords?.map((memberItem) => {
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

export default AllMember;
