import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Jillur from "../assets/jillur.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Boolean state for modal

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

const handelLogout=()=>{
  navigate("/login")
  setModalOpen(false)
}

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden w-full h-16 container bg-green-600 md:flex justify-end items-center shadow-md">
        <ul className="flex gap-6 m-4 font-semibold text-black">
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/care">Care</Link>
          </li>
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/patient">Patient</Link>
          </li>
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/report">Report</Link>
          </li>
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/signup">Internship Care</Link>
          </li>
          <div className="h-auto">
            <span>
              <img
                onClick={() => setModalOpen(true)} // Open modal on image click
                src={Jillur}
                alt="Profile"
                className="h-10 border rounded-full cursor-pointer"
              />
            </span>
          </div>
        </ul>
      </nav>

      {/* Modal for Profile */}
      {modalOpen && (
        <>
          {/* Modal content */}
          <div className="fixed top-10 right-16 bg-white border rounded-md shadow-lg p-2 w-48 z-50">
            <h1 className="text-lg font-semibold mb-2 cursor-pointer">My Profile</h1>
            <span className="block text-blue-600 cursor-pointer hover:underline"onClick={handelLogout} >
              Logout
            </span>
            <button
              onClick={closeModal} // Close modal on click
              className="absolute top-0 right-0 p-1 text-black text-2xl"
            >
              &times;
            </button>
          </div>
          {/* Overlay to close modal when clicked outside */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={closeModal}
          />
        </>
      )}

      {/* Mobile Navigation */}
      <div className="md:hidden w-full bg-green-600 items-center flex justify-end mr-3">
        <button onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu className="text-white" />
        </button>
      </div>

      {isOpen && (
        <div className="h-auto w-full text-center bg-green-600 flex md:hidden flex-col justify-end">
          <ul className="flex flex-col gap-6 m-4 font-semibold text-black">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/care">Care</Link>
            </li>
            <li>
              <Link to="/patient">Patient</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/report">Report</Link>
            </li>
            <li>
              <Link to="/signup">Internship Care</Link>
            </li>
            <div className="flex items-center justify-center">
              <img
                onClick={() => setModalOpen(true)} // Open modal on mobile too
                src={Jillur}
                alt="Profile"
                className="h-10 border rounded-full cursor-pointer"
              />
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
