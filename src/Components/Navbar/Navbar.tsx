"use client"
import { useState } from 'react';
import Image from 'next/image';
import MENU from '../../../public/menu.png'; // replace with the correct path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full px-4 md:px-[64px] py-[16px] min-h-[72px] grid grid-cols-2 bg-black bg-opacity-[40%] backdrop-blur-md z-20 text-white">
        <div className="col-span-1 flex items-center gap-12">
          <p className="text-[20px]">AI.GEN</p>
          <ul className="hidden md:flex gap-8 text-[16px]">
            <li>Feature</li>
            <li><a href='#roadmap'>Roadmap</a></li>
            <li><a href='#tokenomics'>Tokenomics</a></li>
          </ul>
        </div>
        <div className="hidden md:flex col-span-1 gap-4 justify-end items-center">
          <button className="px-5 py-1 h-[40px] w-[133px] rounded-[4px] bg-[#515759]">Whitepaper</button>
          <button className="px-5 py-1 h-[40px] w-[133px] rounded-[4px] bg-custom-gradient-one">Get Started</button>
        </div>
        <div className="flex md:hidden col-span-1 gap-4 justify-end items-center">
          <Image
            alt="Menu"
            src={MENU}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          />
        </div>
      </nav>
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md z-30 transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ height: '100vh' }}
      >
        <div className="p-4 relative">
          <span className='text-[20px] text-white absolute right-5' onClick={()=>setIsOpen(false)}>X</span>
          <ul className="flex flex-col gap-8 text-[16px] text-white mt-20">
            <li>Feature</li>
            <li><a href='#roadmap'>Roadmap</a></li>
            <li><a href='#tokenomics'>Tokenomics</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
