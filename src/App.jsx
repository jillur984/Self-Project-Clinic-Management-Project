import Loginpage from "./page/Loginpage";
import Navbar from "./components/Navbar";
import SignupPage from "./page/SignupPage";
import { Routes, Route } from "react-router-dom";
import Sheba from "./components/Sheba";
import Homepage from "./page/Homepage";
import Footer from "./components/Footer";
import DoctorDetails from "./components/DoctorDetails";
import Patient from "./components/Patient";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <Navbar />

        <Routes>
          <Route path="/doctor-details" element={<DoctorDetails />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/sheba" element={<Sheba />}></Route>
          <Route path="/patient" element={<Patient/>}></Route>
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
