import { MdOutlineToday } from "react-icons/md";
import { BsCalendar2MonthFill } from "react-icons/bs";
import { GiCalendarHalfYear } from "react-icons/gi";

const PatientSummaryCard = () => {
  return (
    <>
    <h1 className="text-2xl font-bold mb-5 mx-1">Patiens</h1>
        <div className="container flex flex-col md:flex-row justify-between">
          <div className="h-24 m-2 w-[25%] border border-gray-200 rounded-md">
            <div className="flex justify-between mt-2">
              <div>
                <h1 className="font-semibold">Today Patiens</h1>
                <span className="font-bold">10</span>
                <h2 className="text-gray-400">Total Patiens 10 Today</h2>
              </div>
              <div>
                <MdOutlineToday className="h-10 w-10 mt-5 rounded-md" />
              </div>
            </div>
          </div>

          <div className="h-24 m-2 w-[25%] border border-gray-200 rounded-md">
            <div className="flex justify-between mt-2">
              <div>
                <h1 className="font-semibold">Monthly Patiens</h1>
                <span className="font-bold">230</span>
                <h2 className="text-gray-400">
                  Total Patiens <span className="text-red-400">10</span> This
                  Month
                </h2>
              </div>
              <div>
                <BsCalendar2MonthFill className="h-10 w-7 mt-4 rounded-md" />
              </div>
            </div>
          </div>

          <div className="h-24 m-2 w-[25%] border border-gray-200 rounded-md">
            <div className="flex justify-between mt-2">
              <div>
                <h1 className="font-semibold">Yearly Patiens</h1>
                <span className="font-bold">1500</span>
                <h2 className="text-gray-400">
                  Total Patiens <span className="text-blue-700">1500</span>{" "}
                  Yearly
                </h2>
              </div>
              <div>
                <GiCalendarHalfYear className="h-10 w-7 mt-4 rounded-md" />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default PatientSummaryCard