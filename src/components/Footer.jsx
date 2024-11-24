const Footer = () => {
  return (
    <footer className="bg-black text-gray-700 py-6 container w-[100%] ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4">
            <h4 className="font-bold mb-2 text-white">About Us</h4>
            <p className="text-white ">
              Jillur-M Diagnostic Center: Pioneering Healthcare Excellence for
              Over 20 Years
            </p>
          </div>

          <div className="w-full md:w-1/4 mb-4">
            <h4 className="mb-2 font-bold text-white animate-pulse">
              Quick Links
            </h4>
            <ul className="list-none text-white">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Care
                </a>
              </li>
              <li>
                <a href="/appointments" className="hover:underline">
                  Patient
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:underline">
                  Report
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-4 text-white">
            <h4 className="mb-2 text-1xl font-bold text-white">
              Contact Information
            </h4>
            <p>📞 Phone: +8801611-780984</p>
            <p>📧 Email:jillur.cse.bd@gmail.com</p>
            <p>Nandibari,Muktagacha,Mymensingh</p>
          </div>

          <div className="w-full md:w-1/4 mb-4">
            <h4 className="font-semibold mb-2 text-white">Follow Us</h4>
            <div className="flex space-x-4 md:space-x-0.5 bg-white text-black font-bold p-2 hover:bg-yellow-800 hover:text-white">
              <a href="#facebook" className="hover:underline">
                Facebook
              </a>
              <a href="#twitter" className="hover:underline">
                Twitter
              </a>
              <a href="#instagram" className="hover:underline">
                Instagram
              </a>
              <a href="#linkedin" className="hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-300 pt-4 flex flex-col items-center">
          <p className="text-sm text-center">
            © 2024 Jillur-M Diagnostic Center. All rights reserved.
          </p>
          <p className="text-sm text-center">
            <a href="#privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{" "}
            |
            <a
              href="#terms-of-service"
              className="text-blue-600 hover:underline"
            >
              {" "}
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
