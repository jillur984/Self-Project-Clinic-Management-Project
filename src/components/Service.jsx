import Marquee from "react-fast-marquee";

const Service = () => {
  return (
    <section className="bg-slate-900 animate-pulse py-10 ">
      <h1 className="text-center text-3xl text-yellow-400 font-bold mb-6">We Offer the Following Services</h1>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Marquee autoFill className="flex mx-3">
            <h2 className="bg-green-600 m-2 text-white text-xl md:text-2xl font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              Ultrasound
            </h2>
            <h2 className="bg-blue-600 m-2 text-white text-xl md:text-2xl font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              ECG
            </h2>
            <h2 className="bg-red-600 m-2 text-white text-xl md:text-2xl font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              X-Ray
            </h2>
            <h2 className="bg-yellow-600 m-2 text-black text-xl md:text-2xl font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              Blood Test
            </h2>
            <h2 className="bg-purple-600 m-2 text-white text-xl md:text-2xl font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              MRI Scan
            </h2>
          </Marquee>
        </div>

        <div className="flex justify-center gap-10">
          <Marquee autoFill pauseOnClick direction="right" className="space-x-6">
            <h2 className="bg-green-600 m-2 text-white text-xl md:text-2xl font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              Mammogram
            </h2>
            <h2 className="bg-orange-600 m-2 text-white text-xl md:text-2xl font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              Stress Test
            </h2>
            <h2 className="bg-teal-600 m-2 text-white text-xl md:text-2xl font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              Bone Density Test
            </h2>
            <h2 className="bg-indigo-600 m-2 text-white text-xl md:text-2xl font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              Sleep Study
            </h2>
            <h2 className="bg-pink-600 m-2 text-white text-xl md:text-2xl font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              Dialysis
            </h2>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Service;
