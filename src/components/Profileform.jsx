import { useLocation } from "react-router-dom";

const Profileform = () => {
  const location = useLocation();
  const { email, username, phone } = location.state || {};

  console.log(phone);

  return (
    <>
      <form className="space-y-6">
        <div className="flex flex-wrap gap-8 p-5">
          {/* Email Field */}
          <div className="basis-[23%] flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue={email}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* First Name Field */}
          <div className="basis-[23%] flex flex-col">
            <label htmlFor="firstname" className="text-lg font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="firstname"
              value={username}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Mobile Field */}
          <div className="basis-[23%] flex flex-col">
            <label htmlFor="mobile" className="text-lg font-medium mb-2">
              Mobile
            </label>
            <input
              type="number"
              id="mobile"
              defaultValue={phone}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="basis-[23%] flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-2">
              Image
            </label>
            <input
              type="file"
              id="file"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-red-600 text-white p-3 w-[40%] rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default Profileform;
