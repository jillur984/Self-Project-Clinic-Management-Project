import { MdOutlineToday } from "react-icons/md";

const PatientSummaryCard = () => {
  return (
    <>
    <h1 className="text-2xl font-bold mb-5 mx-1">Patiens</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      <div className="grid col-span-4 bg-white mb-5 border border-gray-400 rounded-md">
      <div className="flex justify-between items-center p-5">
      <div className="">
        <h1>Today Patients</h1>
        <h2>10</h2>
        <p>Total Patients 10 Today</p>
      </div>
      <div>
        <MdOutlineToday/>
      </div>
      </div>
      </div>
     </div>
     
    </div>
    </>
  )
}

export default PatientSummaryCard