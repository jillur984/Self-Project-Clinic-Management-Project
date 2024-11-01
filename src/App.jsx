import Loginpage from "./page/Loginpage";
import Navbar from "./components/Navbar";
import SignupPage from "./page/SignupPage";
import { Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
import Footer from "./components/Footer";
import DoctorDetails from "./components/DoctorDetails";
import Patient from "./components/Patient";
import Contact from "./components/Contact";
import Care from "./components/Care";
import PatientEntry from "./components/PatientEntry";
import PrivateRoutes from "./routes/PrivateRoutes";
import AdminDashboard from "./auth/AdminDashboard";

import { ToastContainer} from "react-toastify";
import DoctorEntry from "./auth/DoctorEntry";

const App = () => {
  return (
    <>
      <div className="container bg-[#171d32] mx-auto px-0">
        <Navbar />
        
        <Routes>
          {/* implement private routes */}
          <Route element={<PrivateRoutes/>}>
          <Route path="/care" element={<Care />} />
          
          </Route>
          <Route path="/doctor-entry" element={<DoctorEntry />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/patient-entry" element={<PatientEntry/>} />
          <Route path="/report" element={<DoctorEntry/>} />
          <Route path="/doctor-details" element={<DoctorDetails />} />

          <Route path="/" exact element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
        <Footer />
        <ToastContainer theme="dark" />
      </div>
    </>
  );
};

export default App;
