
import { useSignupInfo } from "../hooks/useSignupInfo";

const AdminDashboard = () => {
  const{signupUserInfo,setSignUpUserInfo}=useSignupInfo()
  console.log(signupUserInfo)
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">
        User Management Role...Account Verification
      </h1>
      <table className="border border-collapse w-full ">
        <thead>
          <tr>
            <td className="border px-4 py-2">Name</td>
            <td className="border px-4 py-2">Email</td>
            <td className="border px-4 py-2">Role</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">{signupUserInfo?.data?.username}</td>
            <td className="border px-4 py-2">{signupUserInfo?.data?.email}</td>
            <td className="border px-4 py-2 flex gap-10">
              <select name="" id="">
                <option value="user">User</option>
                <option value="user">Admin</option>
              </select>

              <button className="border bg-black text-white p-1 flex mx-auto justify-center hover:bg-orange-600 w-[50%]">
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
