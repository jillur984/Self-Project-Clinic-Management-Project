import { useState } from "react";
import { SignupContext } from "../context";
const SignupInfoProvider = ({ children }) => {
  const [signupUserInfo, setSignupUserInfo] = useState({});

  return (
    <SignupContext.Provider value={{ signupUserInfo, setSignupUserInfo }}>
      {children}
    </SignupContext.Provider>
  );
};

export default SignupInfoProvider;
