import axios from "axios";
import { useAuth } from "../hooks/useAuth";
import { useMembers } from "../hooks/useMembers";
import { useState } from "react";

const AdminDashboard = () => {
  const { members } = useMembers();
  const { auth } = useAuth();
  const [userRole, setUserRole] = useState();

  const [userStatus, setUserStatus] = useState();

  console.log(members);

  // console.log(keepRole);

  // merger status and role in object as per backend api

  console.log("Token", auth.access_token);

  // const handleRole = async (id, role, status) => {
  //   console.log(id, role, status);

  //   const payload = {
  //     role: selectedUserRole || role,
  //     status: selectedStatus || status,
  //   };

  //   try {
  //     const response = await axios.post(
  //       `${
  //         import.meta.env.VITE_SERVER_BASE_URL
  //       }/auth/verification/account-verification/${id}`,
  //       payload,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${auth.access_token}`,
  //         },
  //       }
  //     );
  //     if (response.status === 200) {
  //       console.log("Succes", response.data);
  //     }
  //   } catch (error) {
  //     console.log("You got a Error", error.message);
  //   }
  // };

  const handleRole = async (id, role, status) => {
    if (!auth?.access_token) {
      console.error("No valid access token found");
      return;
    }

    const payload = {
      role: userRole || role,
      status: userStatus || status,
    };

    console.log("Request Payload:", payload);

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_SERVER_BASE_URL
        }/auth/verification/account-verification/${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.access_token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Success:", response.data);
      }
    } catch (error) {
      console.error("Error:", error.message);
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
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
            <td className="border px-4 py-2">Status</td>
          </tr>
        </thead>
        <tbody>
          {members?.data?.map((member) => {
            return (
              <tr key={member.id}>
                <td className="border px-4 py-2">{member?.username}</td>
                <td className="border px-4 py-2">{member?.email}</td>
                <td className="border px-4 py-2">
                  <select
                    name=""
                    id=""
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value)}
                  >
                    <option value="user">user</option>
                    <option value="doctor">doctor</option>
                    <option value="nurse">nurse</option>
                  </select>
                </td>
                <td className="border px-4 py-2 flex gap-10">
                  <select
                    name=""
                    id=""
                    value={userStatus}
                    onChange={(e) => setUserStatus(e.target.value)}
                  >
                    <option value="active">active</option>
                    <option value="pending">pending</option>
                  </select>

                  <button
                    className="border bg-black text-white p-1 flex mx-auto justify-center hover:bg-orange-600 w-[50%]"
                    onClick={() => handleRole(member?.id, userRole, userStatus)}
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
