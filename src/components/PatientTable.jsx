import jillur from '../assets/jillur.jpg'
const PatientTable = () => {
  return (
    <>
      <div className='container mx-auto overflow-x-auto'>
        <table className="container min-w-full border border-collapse mb-2">
            <thead className="container">
                <tr className="">
                    <th className="">#</th>
                    <th className="">Patient</th>
                    <th className="px-10">Created At</th>
                    <th className="px-6">Gender</th>
                    <th className="px-6">Blood Group</th>
                    <th className="px-6">Age</th>
                    <th className="px-6">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border-b-2'>
                    <td className="text-center">1</td>
                    <td className="text-center">
                        <div className=' flex justify-end '>
                            <div className='flex items-center justify-center'>
                            <img src={jillur} alt="" className='h-12 w-12 rounded-full ' />
                            </div>
                            <div className='mx-4'>
                            <h1>Md. Jillur Rahman</h1>
                            <h2>+8801611780984</h2>
                            </div>
                        </div>
                    </td>
                    <td className="px-10 text-center">20 Augest 2021</td>
                    <td className="px-6 text-center">Male</td>
                    <td className="px-6 text-center">B+</td>
                    <td className="px-6 text-center">27</td>
                    <td className="px-6 text-center"><span className="font-bold cursor-pointer">...</span></td>
                </tr>
            </tbody>
            <tbody>
                <tr className='border-b-2'>
                    <td className="text-center">1</td>
                    <td className="text-center">
                        <div className=' flex justify-end '>
                            <div className='flex items-center justify-center'>
                            <img src={jillur} alt="" className='h-12 w-12 rounded-full ' />
                            </div>
                            <div className='mx-4'>
                            <h1>Md. Jillur Rahman</h1>
                            <h2>+8801611780984</h2>
                            </div>
                        </div>
                    </td>
                    <td className="px-10 text-center">20 Augest 2021</td>
                    <td className="px-6 text-center">Male</td>
                    <td className="px-6 text-center">B+</td>
                    <td className="px-6 text-center">27</td>
                    <td className="px-6 text-center"><span className="font-bold cursor-pointer">...</span></td>
                </tr>
                
            </tbody>
            <tbody>
                <tr className='border-b-2'>
                    <td className="text-center">1</td>
                    <td className="text-center">
                        <div className=' flex justify-end '>
                            <div className='flex items-center justify-center'>
                            <img src={jillur} alt="" className='h-12 w-12 rounded-full ' />
                            </div>
                            <div className='mx-4'>
                            <h1>Md. Jillur Rahman</h1>
                            <h2>+8801611780984</h2>
                            </div>
                        </div>
                    </td>
                    <td className="px-10 text-center">20 Augest 2021</td>
                    <td className="px-6 text-center">Male</td>
                    <td className="px-6 text-center">B+</td>
                    <td className="px-6 text-center">27</td>
                    <td className="px-6 text-center"><span className="font-bold cursor-pointer">...</span></td>
                </tr>
            </tbody>
            <tbody>
                <tr className='border-b-2'>
                    <td className="text-center">1</td>
                    <td className="text-center">
                        <div className=' flex justify-end '>
                            <div className='flex items-center justify-center'>
                            <img src={jillur} alt="" className='h-12 w-12 rounded-full ' />
                            </div>
                            <div className='mx-4'>
                            <h1>Md. Jillur Rahman</h1>
                            <h2>+8801611780984</h2>
                            </div>
                        </div>
                    </td>
                    <td className="px-10 text-center">20 Augest 2021</td>
                    <td className="px-6 text-center">Male</td>
                    <td className="px-6 text-center">B+</td>
                    <td className="px-6 text-center">27</td>
                    <td className="px-6 text-center"><span className="font-bold cursor-pointer">...</span></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className="text-center">1</td>
                    <td className="text-center">
                        <div className=' flex justify-end '>
                            <div className='flex items-center justify-center'>
                            <img src={jillur} alt="" className='h-12 w-12 rounded-full ' />
                            </div>
                            <div className='mx-4'>
                            <h1>Md. Jillur Rahman</h1>
                            <h2>+8801611780984</h2>
                            </div>
                        </div>
                    </td>
                    <td className="px-10 text-center">20 Augest 2021</td>
                    <td className="px-6 text-center">Male</td>
                    <td className="px-6 text-center">B+</td>
                    <td className="px-6 text-center">27</td>
                    <td className="px-6 text-center"><span className="font-bold cursor-pointer">...</span></td>
                </tr>
            </tbody>
        </table>
      </div>
    </>
  );
};

export default PatientTable;
