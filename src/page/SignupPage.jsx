import SignupImage from "../assets/signup1.jpg";

const SignupPage = () => {
  return (
    <>
      <div className="container grid  justify-center grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <img src={SignupImage} alt="Sign Up" className="rounded mt-5" />
        </div>
        <div className="order-1 md:order-2 mt-5">
          <h1 className="text-center text-2xl font-bold ">Sign Up</h1>
          <form className="mt-5">
          <div className="mb-4">
              <input
                type="text"
                id="fName"
                className="block mx-auto w-full h-10 px-2 border rounded"
                placeholder="First Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="lName"
                className="block mx-auto w-full h-10 px-2 border rounded"
                placeholder="LastName"
              />
            </div>
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
                className="block mx-auto w-full h-10 px-2 border rounded outline-none"
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
