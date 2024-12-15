import MedicalImage1 from "../assets/hospital10.jpg";
import MedicalImage2 from "../assets/hospital11.jpg";
import MedicalImage3 from "../assets/hospital12.jpg";
import MedicalImage4 from "../assets/hospital13.jpg";
import AllMember from "../components/AllMember";
import Service from "../components/Service";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Marquee from "react-fast-marquee";
import Established from "../components/Established";
const Homepage = () => {
  return (
    <>
      <div className="mb-10">
        <div className="overflow-hidden whitespace-nowrap bg-black-500 text-white py-2 w-full">
          <Marquee autoFill>
            <h1 className="text-sm md:text-2xl text-pink-400 animate-pulse text-center">
              🩸...Welcome to Jillur-M Clinic and Diagonestic Center Pvt
              Limited...🩸
            </h1>
            <p className="text-sm md:text-2xl animate-pulse text-center">
              🎉 Special Offer! Get 50% Discount on X-Ray Services at Our
              Clinic! 🏥
            </p>
          </Marquee>
        </div>

        {/* Banner Image */}
        <Carousel
          autoPlay
          infiniteLoop
          dynamicHeight={true}
          showThumbs={true}
          thumbWidth={100}
          stopOnHover={true}
        >
          <div>
            <div className="">
              <img
                src={MedicalImage1}
                alt=""
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          <div>
            <div className="">
              <img src={MedicalImage2} alt="" className="w-full h-96" />
            </div>
          </div>
          <div>
            <div className="">
              <img src={MedicalImage3} alt="" className="w-full h-96" />
            </div>
          </div>
          <div>
            <div className="">
              <img src={MedicalImage4} alt="" className="w-full h-96" />
            </div>
          </div>
        </Carousel>
        <AllMember />
        <div>
          <Service />
        </div>
        <Established />
      </div>
    </>
  );
};

export default Homepage;
