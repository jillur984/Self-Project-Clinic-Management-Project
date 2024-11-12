import { MembersContext } from "../context";
import { useContext,} from "react";

export const useMembers = () => {
  
  return useContext(MembersContext);
};
