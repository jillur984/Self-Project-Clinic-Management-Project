import MedicalImage from "../assets/medical.webp";
import AllMember from "../components/AllMember";
import Service from "../components/Service";
const Homepage = () => {
  return (
    <>
      <div>
        <div className="overflow-hidden whitespace-nowrap bg-black-500 text-white py-2 w-full">
          <p className="text-sm md:text-2xl animate-pulse text-center">
            🎉 Special Offer! Get 50% Discount on X-Ray Services at Our Clinic!
            🏥
          </p>
        </div>
        <div>
          <div className="">
            <img src={MedicalImage} alt="" className="w-full h-96" />
          </div>
        </div>
        <AllMember />
        <div>
          <Service />
        </div>
        <p className="text-justify mt-5 font-serif text-md md:text-2xl leading-tight tracking-wider text-white mb-1 px-1">
          Jillur-M Diagnostic Center, established over 20 years ago, is one of
          the leading healthcare facilities in Bangladesh. Renowned for its
          comprehensive diagnostic services, the center features a team of
          highly specialized doctors and medical professionals across various
          fields. It offers an extensive range of services, including advanced
          imaging techniques (like MRI and CT scans), laboratory tests, and
          health screenings. The center is equipped with state-of-the-art
          technology to ensure accurate and timely results, supporting both
          patients and healthcare providers in making informed medical
          decisions. Jillur-M Diagnostic Center emphasizes patient comfort and
          care, providing a welcoming environment for all visitors. Its
          commitment to quality healthcare and innovative practices has made it
          a trusted name in the Bangladeshi healthcare landscape.
        </p>
      </div>
    </>
  );
};

export default Homepage;
