import React from 'react'

const Allslips = () => {
  return (
    <div className='w-full min-h-screen bg-red-400  flex flex-wrap gap-20  py-4 px-6  '>
        <div className='customercontainer w-[280px] h-[400px] flex flex-col rounded-[10px] overflow-hidden  bg-blue-800'>
            <h1 className='text-center font-semibold bg-purple-500 p-2'>Customer-1</h1>
               
               <div className='w-[90%] h-[70%] bg-blue-400 m-auto '>

               </div>


            <div className="flex  gap-4 p-2">
                <button className="bg-green-500 hover:bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                </button>
            </div>

               


        </div>


   






        



      
    </div>
  )
}

export default Allslips
