import DiaganosticIcon from "../assets/diaganostic.svg";
import ClinicLogo from "../assets/clinic_home.svg";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="container w-full flex  gap-2">
        {/* login Page left */}

        <div className="max-w-[50%] items-center">
          <div className="mt-10 p-10 w-full">
            <div className="flex items-center justify-center gap-1 ">
              <div>
                <img src={DiaganosticIcon} alt="" className="w-12 mx-auto rounded " />
              </div>
              <h2 className="text-1xl text-blue-600">
                <span className="text-purple-800">Popular</span> Diaganostic
                Center
              </h2>
            </div>
            <h2 className=" text-justify items-center mx-6 mt-4 w-full ">
              Popular Diaganostic is very famouse Diaganostic in the bangladesh.
            </h2>
            <div className="mt-8">
              <img src={ClinicLogo} className="w-full p-5 mx-auto" />
            </div>
          </div>
        </div>
        {/* Login Page Right */}
        <div className="mt-16 mx-auto w-full bg-white p-8 shadow-md rounded-lg mr-10">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Login to Your Account
          </h1>
          <p className="text-gray-500 font-light text-center mb-8">
            Welcome back! Please enter your details.
          </p>

          <form className="space-y-6">
            {/* Email or Username */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email or username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={()=>navigate("/home")}
              >
                Login
              </button>
            </div>
          </form>

          {/* Footer */}
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
      </section>
    </>
  );
};

export default Loginpage;
