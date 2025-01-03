import axios from "axios";
import { useEffect, useState } from "react";

const Membersidebar = ({ members, setFilteredRoleData }) => {
  const [keepRole, setKeepRole] = useState([]);
  // const [filteredRoleData, setFilteredRoleData] = useState([]);

  // console.log("got data by click checkbox", filteredRoleData);

  console.log("Hello Role", keepRole);

  const handleRole = (e) => {
    const roleValue = e.target.value;
    const roleChecked = e.target.checked;
    console.log("Role is", roleValue);
    if (roleValue) {
      setKeepRole((prevRole) => {
        console.log(Array.isArray(prevRole));
        if (roleChecked) {
          return [...prevRole, roleValue];
        } else {
          return prevRole.filter((item) => item !== roleValue);
        }
      });
    }
  };

  useEffect(() => {
    const handleFilterRoleData = async (keepRole) => {
      console.log("Selected Role is", keepRole);
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVER_BASE_URL
          }/members/local/?filter=role:${keepRole}`
        );
        if (response.status === 200) {
          setFilteredRoleData(response?.data?.data) || [];
        }
      } catch (error) {
        console.log("The API Error is", error.message);
      }
    };
    handleFilterRoleData(keepRole);
  }, [keepRole]);

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
              onChange={(e) => handleRole(e)}
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
              onChange={(e) => handleRole(e)}
            />
            <label htmlFor="nurse" className="px-1">
              Nurse
            </label>
          </div>
          <div className="w-full flex items-center mb-2">
            <input
              type="checkbox"
              id="administrator"
              value="administrator"
              onChange={(e) => handleRole(e)}
            />
            <label htmlFor="nurse" className="px-1 text-nowrap">
              Administrator
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="nurse"
              value="user"
              onChange={(e) => handleRole(e)}
            />
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
