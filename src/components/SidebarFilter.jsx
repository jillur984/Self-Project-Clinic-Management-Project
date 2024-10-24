import DoctorCard from "./DoctorCard";

const SidebarFilter = () => {
  return (
    <div className="container w-full flex justify-center place-content-center items-center mr-24 mb-2 md:mb-8 mt-2">
    {/* Filter Section */}
    <div className="h-auto hidden md:block max-w-[20%] border rounded-md p-4 shadow-md">
      <header>
        <h1 className="text-lg font-semibold mb-4">Filter By:</h1>
      </header>
      <fieldset className="space-y-2">
        <div>
          <input type="checkbox" id="doctor-filter" className="mr-2" />
          <label htmlFor="doctor-filter">Doctor</label>
        </div>
        <div>
          <input type="checkbox" id="nurse-filter" className="mr-2" />
          <label htmlFor="nurse-filter">Nurse</label>
        </div>
      </fieldset>

      <header>
        <h1 className="text-lg font-semibold mt-6 mb-4">
          Filter By Weekend:
        </h1>
      </header>
      <fieldset className="space-y-2">
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
            <label htmlFor={`${day.toLowerCase()}-filter`}>{day}</label>
          </div>
        ))}
      </fieldset>
    </div>

    {/* Vertical Line */}
    <div className="border-r-2 h-full mx-8"></div>

    {/* Doctor Card Section */}
   
     <div className="">
     <DoctorCard />
     </div>
    
  </div>
  )
}

export default SidebarFilter