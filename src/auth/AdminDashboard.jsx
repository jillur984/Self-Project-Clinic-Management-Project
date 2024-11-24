import axios from "axios";
import { useAuth } from "../hooks/useAuth";
import { useMembers } from "../hooks/useMembers";
import { useState } from "react";

const AdminDashboard = () => {
  const { members } = useMembers();
  const { auth } = useAuth();
  const [role] = useState("");
  const [keepRole, setKeepRole] = useState("");

  console.log(keepRole);

  console.log(auth.access_token);

  console.log(members);

  const handleRole = async (id, keepRole) => {
    console.log(id, keepRole);

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_SERVER_BASE_URL
        }/auth/verification/account-verification/${id}`,
        { role: keepRole },
        {
          headers: {
            Authorization: `Bearer ${auth.access_token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Succes", response.data);
      }
    } catch (error) {


      
      console.log("You got a Error", error.message);
    }
  };

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
          {members?.data?.map((member) => {
            return (
              <tr key={member.id}>
                <td className="border px-4 py-2">{member?.username}</td>
                <td className="border px-4 py-2">{member?.email}</td>
                <td className="border px-4 py-2 flex gap-10">
                  <select
                    name=""
                    id=""
                    value={role}
                    onChange={(e) => setKeepRole(e.target.value)}
                  >
                    <option>Select Role</option>
                    <option>user</option>
                    <option>doctor</option>
                    <option>nurse</option>
                  </select>

                  <button
                    className="border bg-black text-white p-1 flex mx-auto justify-center hover:bg-orange-600 w-[50%]"
                    onClick={() => handleRole(member?.id, keepRole)}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
