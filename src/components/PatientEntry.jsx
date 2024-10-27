

const PatientEntry = () => {
  return (
    <>
 <section>
 <h2 className="text-center mb-2 p-3 text-2xl font-bold">Welcome to Patient Entry Form</h2>
 <hr/>
 <div>
 <form action="" method="post" className="flex justify-center">
   <div className="flex gap-8">
   <label htmlFor="name" className="text-[20px]">First Name:</label>
   <input type="text" name="patientname" id="patientname" placeholder="Enter Patient Name" />
   <label htmlFor="name" className="text-[20px]">Last Name:</label>
   <input type="text" name="patientname" id="patientname" placeholder="Enter Patient Name" />
   </div>
 </form>
 </div>
 </section>
    </>
  )
}

export default PatientEntry