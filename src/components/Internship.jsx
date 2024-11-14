import { useState } from "react";
import jillurmlogo from "../assets/jillur-m-card.png";

const Internship = () => {
  const [showMore, setShowMore] = useState(false);
  const [viewMore, setViewMore] = useState(false);

  return (
    <>
      <section className="container ">
        <h2 className="text-2xl text-center m-4 font-bold bg-white text-black animate-pulse">
          Are you looking for a Job Ready internship ?? Yes , you are right
          Destination
        </h2>
        <div className="flex">
          <div className="flex basis-[50%] border">
            <img src={jillurmlogo} alt="" className=" w-full object-fit" />
          </div>

          <div className="basis-[50%] text-center grid ">
            <h2 className="text-3xl block text-yellow-500 mx-auto">
              We are offering following Internship..
            </h2>
            <div className=" text-white border border-slate-600 p-10">
              <h2>Nursing Intern</h2>
              <h3>Duration-6 Month</h3>
              <p>
                <strong>
                  Requirement: Diploma in Nursing, Basis Knowledge of Patient
                  Care
                </strong>
              </p>
              <button
                className="h-10 w-36 hover:bg-yellow-600 hover:text-white bg-green-600 text-white"
                onClick={() => setShowMore(!showMore)}
              >
                view More
              </button>
              <button className="h-10 w-36 hover:bg-yellow-600 hover:text-white bg-purple-600 text-white mx-1.5 animate-pulse">
                Apply
              </button>
              {showMore && (
                <p>
                  1.Diploma or Equivalent: Students interested in nursing should
                  have a high school diploma or equivalent, focusing on courses
                  like biology, chemistry, and health sciences. 2.Licensed
                  Practical Nurse (LPN): Usually requires a diploma or
                  certificate in practical nursing, which can take around 1 year
                  at a vocational school or community college. 3.Registered
                  Nurse (RN): Requires at least an Associate Degree in Nursing
                  (ADN) or a Bachelor of Science in Nursing (BSN). An ADN
                  usually takes about 2-3 years, while a BSN generally takes 4
                  years. A BSN is often preferred for better job opportunities
                  and advancement.
                </p>
              )}
            </div>
            <div className=" text-white p-10 border border-slate-500">
              <h2>Nursing Intern</h2>
              <h3>Duration-6 Month</h3>
              <p>
                <strong>
                  Requirement: Diploma in Nursing, Basis Knowledge of Patient
                  Care
                </strong>
              </p>
              <button
                className="h-10 w-36 hover:bg-yellow-600 hover:text-white bg-green-600 text-white"
                onClick={() => setViewMore(!viewMore)}
              >
                show More
              </button>
              <button className="h-10 w-36 hover:bg-yellow-600 hover:text-white bg-purple-600 text-white mx-1.5 animate-pulse">
                Apply
              </button>
              {viewMore && (
                <p>
                  1.Diploma or Equivalent: Students interested in nursing should
                  have a high school diploma or equivalent, focusing on courses
                  like biology, chemistry, and health sciences. 2.Licensed
                  Practical Nurse (LPN): Usually requires a diploma or
                  certificate in practical nursing, which can take around 1 year
                  at a vocational school or community college. 3.Registered
                  Nurse (RN): Requires at least an Associate Degree in Nursing
                  (ADN) or a Bachelor of Science in Nursing (BSN). An ADN
                  usually takes about 2-3 years, while a BSN generally takes 4
                  years. A BSN is often preferred for better job opportunities
                  and advancement.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Internship;
