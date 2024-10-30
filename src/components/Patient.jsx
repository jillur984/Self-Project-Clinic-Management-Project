import PatientSummaryCard from "./PatientSummaryCard";
import PatientTable from "./PatientTable";
import { useNavigate } from "react-router-dom";

const Patient = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-3 md:mx-auto w-full">
        <input
          type="text"
          name=""
          id=""
          className="border sm:w[50%] md:w-[60%] sm:mx-auto placeholder:text-white p-2 flex mx-auto rounded-md border-black"
          placeholder="search patiens"
        />
      </div>

      {/*<PatientSummaryCard /> */}

      <div className="container mb-5 mt-5">
        <div className="flex flex-col md:flex-row gap-y-4 w-full justify-evenly">
          <div className="basis-[33%]">
            <select className="flex-1 p-4 mx-2 w-[50%]">
              <option value="px-0">Sort by Patiens</option>
              <option value="small px-0">Oldest Patients</option>
              <option value="medium px-0">Newest Patients</option>
            </select>
          </div>
          <div className="basis-[33%]">
            <select className="flex-1 p-4 mx-2 w-[50%]">
              <option value="">Gender</option>
              <option value="small">Male</option>
              <option value="medium">Female</option>
            </select>
          </div>

          <button className="p-4 border ml-1 mr-1 md:m-0 text-black bg-slate-400 hover:bg-orange-400 basis-[33%] ">
            Filter
          </button>
        </div>
      </div>

      <PatientTable />
      <div className="flex justify-end items-end mt-12 mb-5 relative">
        <div className="relative h-16 w-16">
          <button
            className="flex items-center justify-center border h-18 w-18 bg-blue-600 rounded-full font-bold absolute inset-0 m-auto bounce-animation"
            onClick={() => navigate("/patient-entry")}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Patient;
