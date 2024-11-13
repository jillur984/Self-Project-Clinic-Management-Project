import DiaganosticIcon from "../assets/diaganostic.svg";
import ClinicLogo from "../assets/clinic_home.svg";
import Loginform from "../auth/Loginform";

const Loginpage = () => {
  return (
    <>
      <section className="container flex flex-col md:flex-row lg:basis-[50%] ">
        {/* login Page left */}

        <div className="items-center">
          <div className="mt-10 p-10">
            <div className="flex items-center justify-center gap-1 ">
              <div>
                <img
                  src={DiaganosticIcon}
                  alt=""
                  className="w-12 md:w-8 mx-auto rounded-lg "
                />
              </div>
              <h2 className="text-2xl text-blue-600">
                <span className="text-purple-800 text-2xl">Popular</span> Diaganostic
                Center
              </h2>
            </div>
            <h2 className="text-justify font-bold text-slate-500 mx-6 mt-4   ">
              Popular Diaganostic is very famouse Diaganostic in the bangladesh. situated in beside Mymensingh medical colledge. Our other branch is Habiganj,Sylhet,Bangladesh
            </h2>
            <div className="mt-8">
              <img src={ClinicLogo} className="w-full p-5 mx-auto" />
            </div>
          </div>
        </div>
        {/* Login Page Right */}
        <Loginform />
      </section>
    </>
  );
};

export default Loginpage;
