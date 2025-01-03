import { useEffect } from "react";

import axios from "axios";

const Membersidebar = () => {
  useEffect(() => {
    const handleFilterRoleData = async (selectedRole) => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVER_BASE_URL
          }/members/local/?filter=role:${selectedRole}`
        );
        if (response.status === 200) {
          console.log("Response from Backend", response?.data?.data);
        }
      } catch (error) {
        console.log("The API Error is", error.message);
      }
    };
  }, []);

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
            <input type="checkbox" id="nurse" className="" value="nurse" />
            <label htmlFor="nurse" className="px-1">
              Nurse
            </label>
          </div>
          <div className="w-full flex items-center mb-2">
            <input type="checkbox" id="administrator" value="administrator" />
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
      </div>
    </>
  );
};

export default Membersidebar;
