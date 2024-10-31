import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Jillur from "../assets/jillur.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { auth, setAuth } = useAuth();

  console.log(auth);

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Boolean state for modal

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  const handelLogout = () => {
    setAuth({});
    navigate("/login");
    setModalOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className=" text-white container">
        <nav className="hidden md:flex justify-end items-center shadow-md navbar">
          <ul className="flex gap-6 m-4 font-semibold ">
            <li className="hover:bg-white hover:text-black p-2 rounded-sm transition duration-300 ">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-white hover:text-black p-2 rounded-sm transition duration-300">
              <Link to="/care">Care</Link>
            </li>
            <li className="hover:bg-white hover:text-black p-2 rounded-sm transition duration-300">
              <Link to="/patient">Patient</Link>
            </li>
            <li className="hover:bg-white hover:text-black p-2 rounded-sm transition duration-300">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:bg-white hover:text-black p-2 rounded-sm transition duration-300">
              <Link to="/report">Report</Link>
            </li>
            <li className="hover:bg-white hover:text-black p-2 rounded-sm transition duration-300">
              <Link to="/signup">Internship</Link>
            </li>
            {auth?.data?.id && (
              <div className="h-auto">
                <span className="flex gap-2 justify-center">
                  <img
                    onClick={() => setModalOpen(true)} // Open modal on image click
                    src={Jillur}
                    alt="Profile"
                    className="h-10 border rounded-full cursor-pointer"
                  />
                  <span className="flex lg:mt-2">
                    {auth?.data?.username}({auth?.data?.role})
                  </span>
                </span>
              </div>
            )}
          </ul>
        </nav>

        {/* Modal for Profile */}
        {modalOpen && (
          <>
            {/* Modal content */}
            <div className="fixed top-10 right-16 bg-white border rounded-md shadow-lg p-2 w-48 z-50">
              <h1 className="text-md p-2 text-black font-bold mb-2 cursor-pointer">
                My Profile
              </h1>
              {
                auth?.data?.role==='user' ? (
                  <h2 className="text-black">Settings(User)</h2>
                ):(
                  <h2 className="cursor-pointer text-black text-[15px] p-1" onClick={()=>
                    {
                      navigate("/dashboard");
                      closeModal()
                    }
                  }>Dashboard(Admin)</h2>
                )
              }
              <span
                className="block text-blue-600 p-2 cursor-pointer hover:underline"
                onClick={handelLogout}
              >
                Logout
              </span>
          {
            console.log(auth.data.role)
          }
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
        <div className="md:hidden w-full bg-black items-center flex justify-end ">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoMdClose className="text-white m-1 text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-white m-1 text-2xl" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="w-full text-center bg-black flex md:hidden flex-col justify-end">
            <ul className="flex flex-col gap-6 m-4 font-semibold text-white">
              <li className=" hover:bg-white hover:text-black active:bg-white active:text-black">
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li className="hover:bg-white hover:text-black active:bg-white active:text-black">
                <Link to="/care">Care</Link>
              </li>
              <li className="hover:bg-white hover:text-black active:bg-white active:text-black">
                <Link to="/patient">Patient</Link>
              </li>
              <li className="hover:bg-white hover:text-black active:bg-white active:text-black">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="hover:bg-white hover:text-black active:bg-white active:text-black">
                <Link to="/report">Report</Link>
              </li>
              <li className="hover:bg-white hover:text-black active:bg-white active:text-black">
                <Link to="/signup">Internship Care</Link>
              </li>
              {auth?.data?.id && (
                <div className="flex items-center justify-center">
                  <div className="flex items-center">
                    <img
                      onClick={() => setModalOpen(true)} // Open modal on mobile too
                      src={Jillur}
                      alt="Profile"
                      className="h-10 border flex rounded-full cursor-pointer"
                    />
                    <span className="flex lg:mt-2">
                      {auth?.data?.username} {auth?.data?.role}
                    </span>
                  </div>
                </div>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
