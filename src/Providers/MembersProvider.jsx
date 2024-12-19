import { useEffect, useState } from "react";
import { MembersContext } from "../context";
import axios from "axios";

const MembersProvider = ({ children }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/members/local?size=100`
        );
        if (response.status === 200) {
          setMembers(response.data);
        }
      } catch (error) {
        console.log("Error fetching members:", error.message);
      }
    };

    fetchMembers();
  }, []);

  // console.log(members);

  return (
    <>
      <MembersContext.Provider value={{ members, setMembers }}>
        {children}
      </MembersContext.Provider>
    </>
  );
};

export default MembersProvider;
