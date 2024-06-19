"use client"
import Image from "next/image";
import { useState } from "react";
import GIRL from "../../../public/girl.png"

const MenuSection=()=>{
    const [active, setActive] = useState(0);

    return (
      <div className="relative bg-custom-gradient-two py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-3 px-5 md:px-0 md:ml-[-180px]">
          <div className="col-span-1 flex justify-end">
            <Image alt="" src={GIRL} className="w-full" />
          </div>
          <div className="col-span-1 flex py-5 md:py-28">
            <div>
              <p className="text-[27px] md:text-[48px] text-white">How it works</p>
              <br />
              <ul className="flex flex-col gap-2 text-[18px] md:text-[32px]">
                {['Select an Avatar', 'Create or Generate Script', 'Select AI Voices', 'Publish'].map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setActive(index)}
                    className={`cursor-pointer  opacity-50
                      ${index === active ? 'text-blue-400' : 'text-white'}
                    `}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default MenuSection;