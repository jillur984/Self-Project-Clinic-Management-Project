import { useMembers } from "../hooks/useMembers";
const AdminDashboard = () => {
  const { members } = useMembers();

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl text-center m-2">
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
          {members?.data?.map((member,index) => {
           return <tr key={index}>
              <td className="border px-4 py-2">{member?.username}</td>
              <td className="border px-4 py-2">{member?.email}</td>
              <td className="border px-4 py-2 flex gap-10">
                <select name="" id="">
                  <option value="user">{member?.role}</option>
                  <option value="user">doctor</option>
                  <option value="user">nurse</option>
                 
                  
                </select>

                <button className="border bg-black text-white p-1 flex mx-auto justify-center hover:bg-orange-600 w-[50%]">
                  Submit
                </button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
