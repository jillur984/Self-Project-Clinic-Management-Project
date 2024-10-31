import { useState } from "react";
import { SignupContext } from "../context";
const SignupInfoProvider = ({ children }) => {
  const [SignupUserInfo, setSignupUserInfo] = useState({});

  return (
    <SignupContext.Provider value={{ SignupUserInfo, setSignupUserInfo }}>
      {children}
    </SignupContext.Provider>
  );
};

export default SignupInfoProvider;
