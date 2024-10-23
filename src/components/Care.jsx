import DoctorCard from "./DoctorCard";
import Searchbar from "./Searchbar";

const Care = () => {
  return (
    <>
      <Searchbar />
      <div className="container flex justify-center items-start mb-8 mt-2">
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

        {/* Content Section */}
        <div className="w-[80%] container ">
          <DoctorCard />
        </div>
      </div>
    </>
  );
};

export default Care;
