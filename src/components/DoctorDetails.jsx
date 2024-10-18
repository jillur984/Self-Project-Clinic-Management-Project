import Doctor from '../assets/doctor2.jpg';

const DoctorDetails = () => {
  return (
    <div className="container mx-auto w-full flex flex-col md:flex-row p-4">
      {/* Doctor Image Section */}
      <div className="w-full md:w-1/2 p-2">
        <img 
          src={Doctor} 
          alt="Dr. Yousuf Ali" 
          className="w-full h-auto rounded-lg shadow-lg" 
        />
      </div>

      {/* Doctor Info Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center bg-gradient-to-r from-cyan-100 to-blue-200 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dr. Yousuf Ali</h1>
        <p className="text-gray-700 mb-1">Specialization: <span className="font-semibold">Family Medicine</span></p>
        <p className="text-gray-700 mb-1">Experience: <span className="font-semibold">10 Years</span></p>
        <p className="text-gray-700 mb-1">Location: <span className="font-semibold">Muktagacha, Mymensingh, Bangladesh</span></p>
        <p className="text-gray-700 mb-4">Phone: <span className="font-semibold">+8801611780984</span></p>

        <h2 className="font-bold text-lg mb-2">About Dr. Ali</h2>
        <p className="text-justify text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut totam officia dolor earum, alias quibusdam odio sed laborum ducimus voluptatem eaque nam unde? Accusantium atque rerum assumenda reiciendis nisi?
        </p>

        <h3 className="font-extrabold text-lg mb-2">Services Offered</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>* Annual Check-ups</li>
          <li>* Women's Health</li>
          <li>* Immunizations</li>
        </ul>

        <h3 className="font-extrabold text-lg mb-2">Education</h3>
        <p className="text-gray-700 mb-4">
          MBBS (Mymensingh Medical College), BCS (Health), FCPS, PJT
        </p>

        <button className="w-full h-12 bg-yellow-300 text-gray-800 font-bold rounded-lg hover:bg-yellow-400 transition duration-300">
          Appointment Now
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
