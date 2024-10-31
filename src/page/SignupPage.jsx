import { useForm } from "react-hook-form";
import { useRef } from "react";
import SignupImage from "../assets/signup1.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSignupInfo } from "../hooks/useSignupInfo";

const SignupPage = () => {
  const navigate = useNavigate();

  const { setSignupUserInfo } = useSignupInfo();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    try {
      let response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/local/register`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 201) {
        const { data, access_token } = response.data;
        try {
          const authToken = access_token;
          console.log(`Sign Up Time Auth Token ${authToken}`);
          setSignupUserInfo( data, authToken );
          navigate("/login");
        } catch (error) {
          console.log(error.message);
        }
      }
    } catch (error) {
      console.error(error);
      setError("root".random, {
        type: "random",
        message: `SomeThing Went Wrong ${error.message}`,
      });
    }
  };

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <>
      <div className="container grid  justify-center grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <img src={SignupImage} alt="Sign Up" className="rounded mt-5 mb-5" />
        </div>
        <div className="order-1 md:order-2 mt-5 ">
          <h1 className="text-center text-2xl font-bold ">SIGN UP</h1>
          <form className="mt-5" onSubmit={handleSubmit(submitForm)}>
            <div className="mb-4">
              <input
                {...register("fName", {
                  required: "Please Enter your First Name",
                })}
                type="text"
                id="fName"
                name="fName"
                className={`auth-input ${
                  !!errors.fName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Enter your FirstName"
              />
            </div>
            {errors.fName && (
              <p className="text-red-500 text-xs mt-1 pb-2">
                {errors.fName.message}
              </p>
            )}
            <div className="mb-4">
              <input
                {...register("lName", {
                  required: "Please Enter Your Last Name",
                })}
                type="text"
                id="lName"
                name="lName"
                className={`auth-input ${
                  !!errors.lName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="LastName"
              />
            </div>
            {errors.lName && (
              <p className="text-red-500 text-xs mt-1 pb-2">
                {errors.lName.message}
              </p>
            )}
            <div className="mt-4">
              <input
                {...register("email", {
                  required: "Email Address is Required",
                })}
                type="email"
                id="email"
                name="email"
                className={`auth-input ${
                  !!errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Enter Your Email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 pb-2">
                {errors.email.message}
              </p>
            )}
            <div className="mt-4">
              <input
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 character",
                  },
                })}
                type="password"
                id="password"
                name="password"
                className={`auth-input ${
                  !!errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Enter Your Password"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 pb-2">
                {errors.password.message}
              </p>
            )}
            <div className="mt-4">
              <input
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`auth-input ${
                  !!errors.confirmPassword
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Confirm Your Password"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1 pb-2">
                {errors.confirmPassword.message}
              </p>
            )}
            <button className="w-full mt-6 h-10 bg-green-600 text-white rounded">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
