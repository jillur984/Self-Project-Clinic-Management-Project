import { Link } from "react-router-dom";
import Jillur from "../assets/jillur.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden h-16 container bg-green-500 md:flex justify-end items-center shadow-md">
        <ul className="flex gap-6 m-4 font-semibold text-black">
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/sheba">Care</Link>
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
                src={Jillur}
                alt="Profile"
                className="h-10 border rounded-full cursor-pointer"
              />
            </span>
          </div>
        </ul>
      </nav>

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
              <Link to="/sheba">Care</Link>
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
