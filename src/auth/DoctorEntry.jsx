import Doctor1 from "../assets/doctor3.jpeg";
const DoctorEntry = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="basis-[50%] p-1 md:mt-10">
          <img src={Doctor1} alt="" className="h-screen w-full  rounded-md" />
        </div>

        <form method="post" className="basis-[50%] md:mt-10 mx-1">
          <legend className="text-2xl flex text-pink-600 justify-center items-center font-bold ">
            Welcome to Doctor Entry Form
          </legend>
          <div className="m-2">
            <label htmlFor="" className="text-xl ">
              UserName:
            </label>
            <br />
            <input
              type="text"
              name="username"
              id=""
              placeholder="Enter Your UserName"
              className="text-xl w-full bg-white placeholder:text-black p-1"
            />
          </div>
          <div className="m-2">
            <label htmlFor="" className="text-xl ">
              Phone:
            </label>
            <br />
            <input
              type="number"
              name="phone"
              id=""
              placeholder="Enter Your Phone No"
              className="text-xl w-full bg-white placeholder:text-black p-1"
            />
          </div>
          <div className="m-2">
            <label htmlFor="" className="text-xl ">
              Email:
            </label>
            <br />
            <input
              type="email"
              name="username"
              id=""
              placeholder="Enter Your Email"
              className="text-xl w-full bg-white placeholder:text-black p-1"
            />
          </div>
          <fieldset className="m-2">
            <label htmlFor="speciality" className="text-xl">
              Choose a Speciality:
            </label>

            <select
              name="expert"
              id="expert"
              className="w-full text-xl bg-white text-black p-2"
            >
              <option value="cardiology" className="">
                Cardiology
              </option>
              <option value="dermatology" className="">
                Dermatology
              </option>
            </select>
          </fieldset>
          <fieldset className="m-2">
            <legend className="text-xl">Conditions Treated:</legend>
            <label htmlFor="" className="md:text-xl gap-2">
              <input
                type="checkbox"
                name="conditions"
                value="Diabetes"
                className=""
              />
              <span className="px-0.5">Diabetes</span>
            </label>
            <br />
            <label htmlFor="" className="md:text-xl gap-2">
              <input type="checkbox" name="conditions" value="Hypertension" />
              <span className="px-0.5">Hypertension</span>
            </label>
            <br />
            <label htmlFor="" className="md:text-xl gap-2">
              <input type="checkbox" name="conditions" value="Asthma" />
              <span className="px-0.5">Asthma</span>
            </label>
          </fieldset>

          <fieldset className="m-2">
            <div className="mb-4">
              <h2 className="text-xl mb-2">Availability From:</h2>
              <label htmlFor="day" className="block mb-1">
                Day:
              </label>
              <select id="day" name="day" className="border p-2 rounded w-full">
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="startTime" className="block mb-1">
                Start Time:
              </label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="endTime" className="block mb-1">
                End Time:
              </label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                className="border p-2 rounded w-full"
              />
            </div>
          </fieldset>
          <button className="border w-full m-2 border-black bg-black text-white hover:bg-slate-300 hover:text-black mb-2 p-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default DoctorEntry;
