
"use client"
import React from 'react';
import { DonutChart } from './DonutChart';

const TokenomicsGraph = () => {
     const data = [
        {name:"M", value: 90},
        {name:"Emily", value: 34},
        {name:"Marion", value: 53},
        {name:"Robert", value: 12},
        {name:"Nicolas", value: 58},
    ]
    

  const options = {
    responsive: true,
    cutout: '50%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col items-center text-white bg-custom-gradient-two pb-20">
      <h2 className="text-2xl text-pink-500 pb-10">Tokenomics</h2>
      <div className='grid grid-cols-1 space-y-5 md:grid-cols-2 w-full'>
          <div className='col-span-1  flex-1 flex flex-col gap-5 md:gap-10 justify-center md:px-40'>
               <div className='grid grid-cols-10 mx-10'>
                    <div className='col-span-5 flex items-center'>
                        <p>Partnership</p>
                    </div>
                    <div className='col-span-5 flex items-center'>
                        <p>: <span className='pl-5'>5% tokens</span></p>
                    </div>
                </div>
               <div className='grid grid-cols-10 mx-10'>
                    <div className='col-span-5 flex items-center'>
                        <p>Partnership</p>
                    </div>
                    <div className='col-span-5 flex items-center'>
                        <p>: <span className='pl-5'>5% tokens</span></p>
                    </div>
                </div>
               <div className='grid grid-cols-10 mx-10'>
                    <div className='col-span-5 flex items-center'>
                        <p>Partnership</p>
                    </div>
                    <div className='col-span-5 flex items-center'>
                        <p>: <span className='pl-5'>5% tokens</span></p>
                    </div>
                </div>
          </div>
          <div className='col-span-1  flex-1 flex flex-col gap-5 md:gap-10 justify-center md:px-40'>
               <div className='grid grid-cols-10 mx-10'>
                    <div className='col-span-5 flex items-center'>
                        <p>Partnership</p>
                    </div>
                    <div className='col-span-5 flex items-center'>
                        <p>: <span className='pl-5'>5% tokens</span></p>
                    </div>
                </div>
               <div className='grid grid-cols-10 mx-10'>
                    <div className='col-span-5 flex items-center'>
                        <p>Partnership</p>
                    </div>
                    <div className='col-span-5 flex items-center'>
                        <p>: <span className='pl-5'>5% tokens</span></p>
                    </div>
                </div>
               <div className='grid grid-cols-10 mx-10'>
                    <div className='col-span-5 flex items-center'>
                        <p>Partnership</p>
                    </div>
                    <div className='col-span-5 flex items-center'>
                        <p>: <span className='pl-5'>5% tokens</span></p>
                    </div>
                </div>
          </div>
      </div>
      <div className="relative flex md:flex-row  overflow-hidden flex-col  justify-center w-full ">
        <div className="hidden md:block flex-1">
         <DonutChart data={data} width={700} height={700}/>
        </div>
        <div className="relative left-[-50px] md:hidden flex-1">
         <DonutChart data={data} width={500} height={500}/>
        </div>
        <div className=' flex-1 flex flex-col gap-2 justify-center px-5 md:px-40'>
             <div className='border-[1px] rounded-md grid grid-cols-10 min-h-16'>
                   <div className='col-span-1 bg-red-500'></div>
                   <div className='col-span-5 flex items-center'>
                     <p>Partnership</p>
                   </div>
                   <div className='col-span-4 flex items-center'>
                     <p>: <span className='pl-5'>5% tokens</span></p>
                   </div>
             </div>
             <div className='border-[1px] rounded-md grid grid-cols-10 min-h-16'>
                   <div className='col-span-1 bg-red-500'></div>
                   <div className='col-span-5 flex items-center'>
                     <p>Partnership</p>
                   </div>
                   <div className='col-span-4 flex items-center'>
                     <p>: <span className='pl-5'>5% tokens</span></p>
                   </div>
             </div>
             <div className='border-[1px] rounded-md grid grid-cols-10 min-h-16'>
                   <div className='col-span-1 bg-red-500'></div>
                   <div className='col-span-5 flex items-center'>
                     <p>Partnership</p>
                   </div>
                   <div className='col-span-4 flex items-center'>
                     <p>: <span className='pl-5'>5% tokens</span></p>
                   </div>
             </div>
             <div className='border-[1px] rounded-md grid grid-cols-10 min-h-16'>
                   <div className='col-span-1 bg-red-500'></div>
                   <div className='col-span-5 flex items-center'>
                     <p>Partnership</p>
                   </div>
                   <div className='col-span-4 flex items-center'>
                     <p>: <span className='pl-5'>5% tokens</span></p>
                   </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsGraph;
