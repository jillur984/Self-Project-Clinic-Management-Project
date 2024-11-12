import Doctor1 from "../assets/doctor3.jpeg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const DoctorEntry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const [doctorData, setDoctorData] = useState([]);

  const SubmitDoctorInfo = async (formData) => {
    const {
      condition,
      day,
      email,
      endTime,
      phone,
      speciality,
      startTime,
      userName,
    } = formData;

    const result = {
      userName,
      phone: `+${phone}`,
      email,
      speciality: speciality.split(","),
      conditions: condition,
      availibility: [{ day, startTime, endTime }],
    };

    console.log(doctorData);

    try {
      let response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/doctors`,
        result,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 201) {
        setDoctorData(response.data);
      }
    } catch (error) {
      console.error(error.response.data);
    }

    console.log(result);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="basis-[50%] p-1 md:mt-10">
          <img src={Doctor1} alt="" className="h-screen w-full  rounded-md" />
        </div>

        <form
          method="post"
          onSubmit={handleSubmit(SubmitDoctorInfo)}
          className="basis-[50%] md:mt-10 mx-1"
        >
          <legend className="text-2xl flex text-pink-600 justify-center items-center font-bold ">
            Welcome to Doctor Entry Form
          </legend>
          <div className="m-2">
            <label
              htmlFor=""
              id="userName"
              name="userName"
              className="text-xl  "
            >
              UserName:
            </label>
            <br />
            <input
              {...register("userName", {
                required: "Please Enter a Doctor Name",
              })}
              type="text"
              name="userName"
              id=""
              placeholder="Enter Your UserName"
              className={`auth-input ${
                !!errors.userName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>
          <div className="m-2">
            <label htmlFor="" className="text-xl ">
              Phone:
            </label>
            <br />
            <input
              {...register("phone", {
                required: "Phone Number is Required",
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 14 digits",
                },
              })}
              type="number"
              name="phone"
              id=""
              placeholder="Enter Your Phone No"
              className={`auth-input ${
                !!errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>
          <div className="m-2">
            <label htmlFor="" className="text-xl ">
              Email:
            </label>
            <br />
            <input
              {...register("email", {
                required: "Email Address is Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              className={`auth-input ${
                !!errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </div>
          <fieldset className="m-2">
            <label htmlFor="speciality" className="text-xl">
              Choose a Speciality:
            </label>
            <input
              {...register("speciality", {
                required: "at least give one Speciality",
              })}
              type="text"
              name="speciality"
              id=""
              placeholder=""
              className={`auth-input ${
                !!errors.speciality
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
          </fieldset>

          <fieldset className="m-2">
            <legend className="text-xl">Conditions Treated:</legend>
            <label htmlFor="" className="md:text-xl gap-2">
              <input
                type="checkbox"
                name="condition"
                {...register("condition", {
                  required: "Please select at least one condition",
                })}
                value="Diabetes"
                className=""
              />
              <span className="px-0.5">Diabetes</span>
            </label>
            <br />
            <label htmlFor="" className="md:text-xl gap-2">
              <input
                type="checkbox"
                {...register("condition", {
                  required: "Please select at least one condition",
                })}
                name="condition"
                value="Hypertension"
              />
              <span className="px-0.5">Hypertension</span>
            </label>
            <br />
            <label htmlFor="" className="md:text-xl gap-2">
              <input
                type="checkbox"
                name="condition"
                {...register("condition", {
                  required: "Please select at least one condition",
                })}
                value="Asthma"
              />
              <span className="px-0.5">Asthma</span>
            </label>
          </fieldset>

          <fieldset className="m-2">
            <div className="mb-4">
              <h2 className="text-xl mb-2">Availability From:</h2>
              <label htmlFor="day" className="block mb-1">
                Day:
              </label>
              <select
                id="day"
                name="day"
                className="border p-2 rounded w-full"
                {...register("day", { required: "Please select a day" })}
              >
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
              {errors.day && (
                <p className="text-red-500">{errors.day.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="startTime" className="block mb-1">
                Start Time:
              </label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                {...register("startTime", {
                  required: "Start time is required",
                })}
                className="border p-2 rounded w-full"
              />
              {errors.startTime && (
                <p className="text-red-500">{errors.startTime.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="endTime" className="block mb-1">
                End Time:
              </label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                {...register("endTime", { required: "End time is required" })}
                className="border p-2 rounded w-full"
              />
              {errors.endTime && (
                <p className="text-red-500">{errors.startTime.message}</p>
              )}
            </div>
          </fieldset>
          <button className="border w-full border-black bg-black text-white hover:bg-slate-300 hover:text-black mb-2 p-2">
            Submit
          </button>
        </form>
      </div>
      {doctorData?.data?.email}
    </>
  );
};

export default DoctorEntry;
