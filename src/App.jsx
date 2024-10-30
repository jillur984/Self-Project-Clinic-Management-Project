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


const App = () => {
  return (
    <>
      <div className="container bg-[#171d32] mx-auto px-4">
        <Navbar />
        
        <Routes>
          <Route element={<PrivateRoutes/>}>
          <Route path="/care" element={<Care />} />
          </Route>
          
          <Route path="/patient" element={<Patient />} />
          <Route path="/patient-entry" element={<PatientEntry/>} />
          <Route path="/doctor-details" element={<DoctorDetails />} />

          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
