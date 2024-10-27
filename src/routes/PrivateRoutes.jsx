import Navbar from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth.access_token ? (
        <div className="container mx-auto px-4">
         <Navbar/>
          <Outlet/>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
