import { useState } from "react";

const Sidebar = (onRoleChange) => {
  const [doctor, setDoctor] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  console.log(selectedRole);

  const handleSidebarFilter = (role) => {
    if (role === "doctor") {
      // Toggle the doctor checkbox state
      setDoctor((prev) => !prev); // Toggle the value of doctor

      // Update selectedRole based on the checkbox state
      if (!doctor) {
        onRoleChange("doctor"); // If checked, set role
      } else {
        onRoleChange(""); // If unchecked, clear the selected role
      }
    }
  };

  return (
    <>
      <aside className="border-r-2 border-red-600  p-10  ">
        <h1 className="text-justify text-nowrap mb-2">Filtered by:</h1>
        <div className="mb-2">
          <input
            type="checkbox"
            id="doctor"
            checked={doctor}
            onChange={() => handleSidebarFilter("doctor")}
          />
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
          <input
            type="checkbox"
            id="administrator"
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
    </>
  );
};

export default Sidebar;
