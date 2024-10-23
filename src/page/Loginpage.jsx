import DiaganosticIcon from "../assets/diaganostic.svg";
import ClinicLogo from "../assets/clinic_home.svg";
import Loginform from '../auth/Loginform'

const Loginpage = () => { 
  return (
    <>
      <section className="container w-full flex  gap-2">
        {/* login Page left */}

        <div className="max-w-[50%] items-center">
          <div className="mt-10 p-10 w-full">
            <div className="flex items-center justify-center gap-1 ">
              <div>
                <img src={DiaganosticIcon} alt="" className="w-12 mx-auto rounded " />
              </div>
              <h2 className="text-1xl text-blue-600">
                <span className="text-purple-800">Popular</span> Diaganostic
                Center
              </h2>
            </div>
            <h2 className=" text-justify items-center mx-6 mt-4 w-full ">
              Popular Diaganostic is very famouse Diaganostic in the bangladesh.
            </h2>
            <div className="mt-8">
              <img src={ClinicLogo} className="w-full p-5 mx-auto" />
            </div>
          </div>
        </div>
        {/* Login Page Right */}
        <Loginform/>
      </section>
    </>
  );
};

export default Loginpage;
