
"use client"
import React from 'react';
import { DonutChart } from './DonutChart';

const TokenomicsGraph = () => {
     const data = [
        {name:"BNB LP Pool", value: 30},
        {name:"Burned", value: 30},
        {name:"LP Pool", value: 35},
        {name:"Partnership/CEX Wallet", value: 5},
       
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
    <div className="flex flex-col items-center text-white bg-custom-gradient-two py-20">
      <p className="text-center text-gradient text-[25px] md:text-[32px]">Tokenomics</p>
      <div className='grid grid-cols-1 space-y-5 md:grid-cols-2 w-full pt-10'>
          <div className='col-span-1  flex-1 flex flex-col gap-5 md:gap-10 justify-center md:px-40'>
               <div className='grid grid-cols-10 '>
                    <div className='col-span-5 flex items-center'>
                        <p>Name</p>
                    </div>
                    <div className='col-span-5 flex items-center'>
                        <p>: <span className='pl-5 opacity-[50%]'>AI GEN</span></p>
                    </div>
                </div>
               <div className='grid grid-cols-10 '>
                    <div className='col-span-5 flex items-center'>
                        <p>Total Supply</p>
                    </div>
                    <div className='col-span-5 flex items-center'>
                        <p>: <span className='pl-5 opacity-[50%]'>1B</span></p>
                    </div>
                </div>
               <div className='grid grid-cols-10 '>
                    <div className='col-span-5 flex items-center'>
                        <p>Contract</p>
                    </div>
                    <div className='col-span-5 flex items-center'>
                        <p>: <span className='pl-5 opacity-[50%]'>Loren ipsum dolor sit a...</span></p>
                    </div>
                </div>
          </div>
          <div className='col-span-1  flex-1 flex flex-col gap-5 md:gap-10 justify-center md:px-40'>
               <div className='grid grid-cols-10 '>
                    <div className='col-span-5 flex items-center'>
                        <p>Token Name</p>
                    </div>
                    <div className='col-span-5 flex items-center'>
                        <p>: <span className='pl-5 opacity-[50%]'>$AIGEN</span></p>
                    </div>
                </div>
               <div className='grid grid-cols-10 '>
                    <div className='col-span-5 flex items-center'>
                        <p>Circulation Supply</p>
                    </div>
                    <div className='col-span-5 flex items-center'>
                        <p>: <span className='pl-5 opacity-[50%]'>1B</span></p>
                    </div>
                </div>
               <div className='grid grid-cols-10 '>
                    <div className='col-span-5 flex items-center'>
                        <p>Chain</p>
                    </div>
                    <div className='col-span-5 flex items-center'>
                        <p>: <span className='pl-5 opacity-[50%]'>Ethereum</span></p>
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
             <div className='border-[0.5px] border-gray rounded-md grid grid-cols-15 min-h-14'>
                   <div className='col-span-1 bg-[#be2c2c]'></div>
                   <div className='col-span-7 flex items-center'>
                      <p className='px-3'>Partnership</p>
                   </div>
                   <div className='col-span-7 flex items-center'>
                     <p>: <span className='pl-5 opacity-[50%]'>5% tokens</span></p>
                   </div>
             </div>
             <div className='border-[0.5px] border-gray rounded-md grid grid-cols-15 min-h-14'>
                   <div className='col-span-1 bg-[#ff8f34]'></div>
                   <div className='col-span-7 flex items-center'>
                      <p className='px-3'>LP Pool</p>
                   </div>
                   <div className='col-span-7 flex items-center'>
                     <p>: <span className='pl-5 opacity-[50%]'>35% tokens</span></p>
                   </div>
             </div>
             <div className='border-[0.5px] border-gray rounded-md grid grid-cols-15 min-h-14'>
                   <div className='col-span-1 bg-[#9934ff]'></div>
                   <div className='col-span-7 flex items-center'>
                       <p className='px-3'>Burned</p>
                   </div>
                   <div className='col-span-7 flex items-center'>
                     <p>: <span className='pl-5 opacity-[50%]'>30% tokens</span></p>
                   </div>
             </div>
             <div className='border-[0.5px] border-gray rounded-md grid grid-cols-15 min-h-14'>
                   <div className='col-span-1 bg-[#028dfd]'></div>
                   <div className='col-span-7 flex items-center'>
                     <p className='px-3'>BNP LP Pol</p>
                   </div>
                   <div className='col-span-7 flex items-center'>
                     <p>: <span className='pl-5 opacity-[50%]'>30% tokens</span></p>
                   </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsGraph;
