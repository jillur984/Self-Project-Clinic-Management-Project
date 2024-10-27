import { AuthContext } from "../context";
import { useContext, useDebugValue } from "react";

export const useAuth = () => {
  const { auth } = useContext(AuthContext);

  useDebugValue(auth, (auth) =>
    auth?.user ? "user logged in" : "user logged out"
  );

  return useContext(AuthContext);
};
