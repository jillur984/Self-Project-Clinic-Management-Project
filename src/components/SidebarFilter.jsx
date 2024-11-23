import { useState } from "react";

const SidebarFilter = ({ doctorData,setFilteredData}) => {
  const [filterDoctors, setFilterDoctors] = useState(doctorData);

  console.log(filterDoctors);

  const doctorFilter = (status, isChecked) => {
    if (isChecked) {
      // console.log("Hello I am",currentData

      // )
      const result = doctorData.filter(
        (currentData) => currentData.status === status
      );
      setFilteredData(result)
      
      
    } else {
      
      setFilteredData(doctorData)
    }
  };

  return (
    <>
      <div className="hidden md:block  p-10 basis-[18%]  ">
        <header>
          <h1 className="text-lg text-white font-bold mb-4">Filter By:</h1>
        </header>
        <fieldset className="">
          <div className="flex gap-1 text-white">
            <input
              type="checkbox"
              id="doctor-filter"
              className=""
              onChange={(e) => doctorFilter("active", e.target.checked)}
            />
            <label htmlFor="doctor-filter text-white">Doctor</label>
          </div>
          <div className="flex gap-1 text-white">
            <input type="checkbox" id="nurse-filter" className="" />
            <label htmlFor="nurse-filter text-white">Nurse</label>
          </div>
        </fieldset>

        <header>
          <h1 className="text-lg text-white font-semibold mt-6 mb-4">
            Filter By Weekend:
          </h1>
        </header>
        <fieldset className="text-white">
          {[
            "All Day",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ].map((day) => (
            <div key={day}>
              <input
                type="checkbox"
                id={`${day.toLowerCase()}-filter`}
                className="mr-2"
              />
              <label htmlFor={`${day.toLowerCase()}-filter`} className="">
                {day}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
      <div className="bg-white h-screen flex items-center justify-center">
        <div className="border-l border-gray-300 h-36"></div>
      </div>
    </>
  );
};

export default SidebarFilter;
