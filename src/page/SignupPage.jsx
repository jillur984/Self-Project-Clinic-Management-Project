import SignupImage from "../assets/signup1.jpg";

const SignupPage = () => {
  return (
    <>
      <div className= "w-full mx-8 h-screen flex flex-col lg:flex-row justify-center items-center lg:items-start">
        <div className="lg:max-w-[50%] w-full p-4 flex justify-center mt-12 ">
          <img
            src={SignupImage}
            alt="Sign Up"
            className="mt-12 w-full h-[325px] rounded  "
          />
        </div>
        <div className="bg-gray-400 p-6 rounded-lg w-full lg:max-w-[50%] mx-4 md:mt-28 mr-6">
          <h1 className="text-center text-2xl font-bold ">Sign Up</h1>
          <form className="mt-5">
            <div>
              <input
                type="email"
                id="email"
                className="block mx-auto w-full h-10 px-2 border rounded"
                placeholder="Email"
              />
            </div>
            <div className="mt-4">
              <input
                type="password"
                id="password"
                className="block mx-auto w-full h-10 px-2 border rounded"
                placeholder="Password"
              />
            </div>
            <div className="mt-4">
              <input
                type="password"
                id="confirm-password"
                className="block mx-auto w-full h-10 px-2 border rounded"
                placeholder="Confirm Password"
              />
            </div>
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
