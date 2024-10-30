import HospitalImage from "../assets/hospital1.jpg";
import LocationIcon from "../assets/location.png";
import HelpLineIcon from "../assets/helpline.png";
import EmailIcon from "../assets/email.png";

const Contact = () => {
  return (
    <section className="container ">
      {/* Header Image with Overlayed Text */}
      <div className="relative">
        <img
          src={HospitalImage}
          alt="Hospital"
          className="w-full h-64"
        />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl font-bold">
          Contact Us
        </span>
      </div>

      {/* Introduction Text */}
      <div className="text-center mt-5 mb-16 w-full">
        <h1 className="font-bold text-2xl text-white">Let's Get in Touch</h1>
        <p className="text-gray-500 text-lg text-white">
          We are open for any suggestions or just to have a chat
        </p>
      </div>

      {/* Contact Info Boxes */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-5 mt-5 w-full">
        {/* Address Box */}
        <div className="flex items-start p-8 w-full md:w-1/3 text-justify gap-4 bg-gray-100 rounded-lg shadow-md">
          <img
            src={LocationIcon}
            alt="Location Icon"
            className="h-10 md:h-12 mt-1"
          />
          <div>
            <h2 className="font-semibold text-xl mb-1">Our Address</h2>
            <p className="text-gray-700">Muktagacha, Mymensingh</p>
          </div>
        </div>

        {/* Hotline Box */}
        <div className="flex items-start p-8 w-full md:w-1/3 text-justify gap-4 bg-gray-100 rounded-lg shadow-md">
          <img
            src={HelpLineIcon}
            alt="Helpline Icon"
            className="h-10 md:h-12 mt-1"
          />
          <div>
            <h2 className="font-semibold text-xl mb-1">Hotline</h2>
            <p className="text-gray-700">+8801734634864</p>
            
          </div>
        </div>

        {/* Email Box */}
        <div className="flex items-start p-8 w-full md:w-1/3 text-justify gap-4 bg-gray-100 rounded-lg shadow-md">
          <img src={EmailIcon} alt="Email Icon" className="h-10 md:h-12 mt-1" />
          <div>
            <h2 className="font-semibold text-xl mb-1">Email Us</h2>
            <p className="text-gray-700">jillur.cse.bd@outlook.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full mx-8 md:w-[60%] order-2 md:order-1">
          <div className="w-full">
            <h1 className="font-bold text-2xl text-gray-600 mb-2 mt-2">
              Have any Questions?
            </h1>
            <form action="">
              {/* name and email filed */}

              <div className="w-full md:flex gap-4 mb-4">
                <div className="w-full md:w-[50%]">
                  <label htmlFor="name" className="font-bold text-gray-600">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="w-full p-2"
                  />
                </div>

                <div className="w-full md:w-[50%]">
                  <label htmlFor="email" className="font-bold text-gray-600">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full p-2"
                  />
                </div>
              </div>

              {/* Subject flield Start */}

              <div className="w-full">
                <label htmlFor="subject" className="font-bold text-gray-600">
                  Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full p-4 "
                />
              </div>
              <div className="">
                <label htmlFor="message" className="text-gray-600 font-bold">
                  Your Message:
                </label>
                <br />
                <textarea
                  name="message"
                  id="message"
                  className="w-full p-7 h-40 bg-gray-100"
                ></textarea>
              </div>
              <button className="bg-black  text-white rounded-md w-[30%] hover:bg-gray-700 p-1 mt-4 mb-4">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Embedded */}
        <div className="w-full mt-5 md:w-[40%] h-[400px] order-1 md:order-2">
          <iframe
            title="Clinic Management App Location"
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Mymensingh,Bangladesh+(Clinic%20Management%20App)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;