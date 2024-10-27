const PatientEntry = () => {
    return (
      <>
        <section className="container mx-auto p-6 bg-white rounded shadow-md">
          <h2 className="text-center mb-4 text-2xl font-bold text-gray-800">
            Welcome to Patient Entry Form
          </h2>
          <p className="text-center md:mx-24 mb-8 text-lg text-gray-600">
            Thank you for applying to our practice. Please complete the patient
            registration form with your information, and a doctor will contact you shortly.
          </p>
  
          <form method="POST" className="space-y-6 w-full">
            {/* Patient Name */}
            <div className="flex flex-col md:flex-row items-center w-full gap-4">
              <label className="md:w-[20%] font-semibold text-gray-700">
                Patient Name:
              </label>
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-[80%]">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="w-full md:w-[50%] p-2 border rounded shadow-sm"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="w-full md:w-[50%] p-2 border rounded shadow-sm"
                  placeholder="Last Name"
                />
              </div>
            </div>
  
            {/* Gender */}
            <div className="flex flex-col md:flex-row items-center w-full gap-4">
              <label className="md:w-[20%] font-semibold text-gray-700">
                Gender:
              </label>
              <div className="flex gap-6 items-center md:w-[80%]">
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="radio" name="gender" value="male" />
                  <span>Male</span>
                </label>
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="radio" name="gender" value="female" />
                  <span>Female</span>
                </label>
              </div>
            </div>
  
            {/* Phone Number */}
            <div className="flex flex-col md:flex-row items-center w-full gap-4">
              <label className="md:w-[20%] font-semibold text-gray-700">
                Phone No:
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-full md:w-[50%] p-2 border rounded shadow-sm"
                placeholder="Your Phone Number"
              />
            </div>
  
            {/* Date of Birth */}
            <div className="flex flex-col md:flex-row items-center w-full gap-4">
              <label className="md:w-[20%] font-semibold text-gray-700">
                Date of Birth:
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="w-full md:w-[50%] p-2 border rounded shadow-sm"
              />
            </div>
  
    {/* Address */}

    <div className="flex flex-col md:flex-row items-center w-full gap-4">
              <label className="md:w-[20%] font-semibold text-gray-700">
                Address:
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="w-full md:w-[50%] p-2 border rounded shadow-sm"
                placeholder="Give Your Address"
              />
            </div>
            

       {/* past medicine history */}

       <div className="flex flex-col md:flex-row items-center w-full gap-4">
              <label className="md:w-[20%] font-semibold text-gray-700">
                Past Medicine History:
              </label>
              <div className="flex gap-6 items-center md:w-[30%]">
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" name="fever" value="fever" />
                  <span>Fever</span>
                </label>
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" name="gender" value="female" />
                  <span>Nimonia</span>
                </label>
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" name="gender" value="female" />
                  <span>Anemia</span>
                </label>
                
              </div>
              <input type="text" name="" id="" className="w-full md:basis-[50%] space-x-4 p-3 " placeholder="Write Details here" />
            </div>
           {/* Submit Form */}

           <button className="border border-gray-950  rounded-xl bg-yellow-500 font-bold hover:bg-purple-600 p-5 flex mx-auto">Submit Your Form</button>

          </form>
        </section>
      </>
    );
  };
  
  export default PatientEntry;
  