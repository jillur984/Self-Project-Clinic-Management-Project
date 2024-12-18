import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const Loginform = () => {
  const navigate = useNavigate();

  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_BASE_URL}/auth/local/login`,
      formData,
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.status === 200) {
      const { data, access_token } = response.data;
      try {
        if (access_token) {
          const authToken = access_token;
          console.log(`Login Time Auth Token ${authToken}`);
          setAuth({ data, access_token });
          toast.success("Login in Succesfully");
          navigate("/");
        }
      } catch (error) {
        console.error(error);
        setError("root".random, {
          type: "random",
          message: `User with email ${formData.email} is not found`,
        });
      }
    }
  };

  return (
    <div className="mt-16 mx-auto w-full p-8 shadow-md rounded-lg mr-10">
      <h1 className="text-3xl font-semibold text-white mb-4 text-center">
        Login to Your Account
      </h1>
      <p className="text-white font-light text-center mb-8">
        Welcome back! Please enter your details.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
        {/* Email or Username */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-1"
          >
            Email
          </label>
          <input
            {...register("email", { required: "Email Address is Required" })}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email or username"
            className={`auth-input ${
              !!errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white mb-1"
          >
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Your Password Must be At least 8 character",
              },
            })}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className={`auth-input ${
              !!errors.password
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
        </div>

        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>
          Don't have an account?
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-600 hover:underline"
          >
            {" "}
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Loginform;
