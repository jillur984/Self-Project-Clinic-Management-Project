import PatientSummaryCard from "./PatientSummaryCard";
import PatientTable from "./PatientTable";

const Patient = () => {
  return (
    <>
      <section className="container">
        <div className=" mt-8 mb-10 ">
          <input
            type="text"
            name=""
            id=""
            className="border w-[30%] p-3 rounded-md border-black"
            placeholder="search patiens"
          />
        </div>

        <PatientSummaryCard />
        <div className="border border-gray-300 mx-2 mb-2">
          <div className="flex container">
            <div className=" mt-8 mb-10 w-[20%] ">
              <input
                type="text"
                name=""
                id=""
                className="border border-gray-300 p-3 rounded-md "
                placeholder="search patiens"
              />
            </div>
            <div className="mt-8 ">
              <select className="border border-gray-300 bg-white h-12 w-48 rounded-md">
                <option value="">Sort by Patiens</option>
                <option value="small">Oldest Patients</option>
                <option value="medium">Newest Patients</option>
              </select>
            </div>
            <div className="mt-8 mx-7 w-48 ">
              <select className="border border-gray-300 bg-white h-12 w-48 rounded-md">
                <option value="">Gender</option>
                <option value="small">Male</option>
                <option value="medium">Female</option>
              </select>
            </div>
            <div className=" mt-8 mb-10 w-[20%] ">
              <input
                type="text"
                name=""
                id=""
                className="border border-gray-300 p-3 rounded-md "
                placeholder="search patiens"
              />
            </div>
            <div className="border border-gray-300 h-16 mt-7 w-[20%] bg-green-500 relative hover:bg-gray-400">
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ">
                FILTER
              </button>
            </div>
          </div>
          <PatientTable />
        </div>
        <div className="flex justify-end items-end mt-12 mb-5 relative">
          <div className="relative h-16 w-16">
            <button className="flex items-center justify-center border h-18 w-18 bg-blue-600 rounded-full font-bold absolute inset-0 m-auto bounce-animation">
              +
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Patient;
