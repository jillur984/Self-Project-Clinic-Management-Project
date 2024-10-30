const Footer = () => {
  return (
    <footer className="bg-black text-gray-700 py-6 container w-[100%] ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4">
            <h4 className="font-semibold mb-2">About Us</h4>
            <p>
              Jillur-M Diagnostic Center: Pioneering Healthcare Excellence for
              Over 20 Years
            </p>
          </div>

          <div className="w-full md:w-1/4 mb-4">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="list-none">
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-blue-600 hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/appointments"
                  className="text-blue-600 hover:underline"
                >
                  Appointments
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-600 hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faqs" className="text-blue-600 hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-4">
            <h4 className="font-semibold mb-2">Contact Information</h4>
            <p>📞 Phone: +880-XXXX-XXXX</p>
            <p>📧 Email: info@jillurmdiagnostic.com</p>
            <p>📍 Address: 123 Health St, Dhaka, Bangladesh</p>
          </div>

          <div className="w-full md:w-1/4 mb-4">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 md:space-x-0.5">
              <a href="#facebook" className="text-blue-600 hover:underline">
                Facebook
              </a>
              <a href="#twitter" className="text-blue-600 hover:underline">
                Twitter
              </a>
              <a href="#instagram" className="text-blue-600 hover:underline">
                Instagram
              </a>
              <a href="#linkedin" className="text-blue-600 hover:underline">
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
