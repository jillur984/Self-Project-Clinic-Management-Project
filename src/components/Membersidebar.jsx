import { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import Pagination from "./Pagination";

const Membersidebar = ({
  TotalPages,
  currentRecords,
  currentPage,
  setCurrentPage,
  members,
}) => {
  // const [doctor, setDoctor] = useState("");
  // const [nurse, setNurse] = useState("");
  // const [user, setUser] = useState("");
  // const [admin, setAdmin] = useState("");

  // const [id, name, email, phone, role, status] = members?.data;

  // useEffect(() => {
  //   console.log(doctor);
  // }, [doctor]);

  return (
    <>
      <div className="flex justify-around gap-10">
        <aside className="border-r-2 border-red-600  p-10  ">
          <h1 className="text-justify text-nowrap mb-2">Filtered by:</h1>
          <div className="mb-2">
            <input type="checkbox" id="doctor" />
            <label htmlFor="doctor" className="px-1">
              Doctor
            </label>
          </div>
          <div className="mb-2">
            <input type="checkbox" id="nurse" className="" />
            <label htmlFor="nurse" className="px-1">
              Nurse
            </label>
          </div>
          <div className="w-full flex items-center mb-2">
            <input type="checkbox" id="nurse" />
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

export default Membersidebar;
