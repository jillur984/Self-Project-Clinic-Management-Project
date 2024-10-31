import { SignupContext } from "../context";
import { useContext,} from "react";

export const useSignupInfo = () => {
  
  return useContext(SignupContext);
};
