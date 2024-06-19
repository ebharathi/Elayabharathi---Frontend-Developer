"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import CORE from "../../../public/core.png";
import MIC from "../../../public/mic.png";
import VIDEO from "../../../public/video.png";

const Menu = () => {
  const menu1 = [
    "Avatar", "Technology", "Design", "Artificial Intelligence", "AI Chat Bot",
    "Customizable", "3D Model", "Assistant", "Space", "Technology"
  ];
  const menu2 = [
    "People", "Create Videos", "Analyze", "Photoshop",
    "Outfits", "3D Model", "Voice Chat", "Marketing", "Reaction", "Fake Voice", "Photo Generator"
  ];
  const colors = ["bg-custom-gradient-four", "bg-custom-gradient-five", "bg-custom-gradient-six"];

  const menu1Ref :any= useRef(null);
  const menu2Ref :any= useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startScrolling();
        } else {
          stopScrolling();
        }
      });
    }, options);

    if (menu1Ref.current && menu2Ref.current) {
      observer.observe(menu1Ref.current);
      observer.observe(menu2Ref.current);
    }

    return () => {
      observer.disconnect();
      stopScrolling();
    };
  }, []); 

  const startScrolling = () => {
    const scrollMenus = () => {
      const container1:any = menu1Ref.current;
      const container2:any = menu2Ref.current;

      if (container1) {
        container1.scrollLeft += 1;
      }
      if (container2) {
        container2.scrollLeft += 1;
      }
    };
    const scrollInterval = setInterval(scrollMenus, 20); 
    menu1Ref.current.scrollInterval = scrollInterval;
  };

  const stopScrolling = () => {
    if (menu1Ref.current.scrollInterval) {
      clearInterval(menu1Ref.current.scrollInterval);
      menu1Ref.current.scrollLeft = 0;
      menu2Ref.current.scrollLeft = 0; 
    }
  };

  return (
    <div className="bg-gradient-menuTwo py-5 md:py-40 relative overflow-hidden">
      <Image alt="" className="w-10 md:w-auto absolute top-15 left-1/2" src={CORE} />
      <Image alt="" className="w-10 md:w-auto absolute bottom-8 left-2/3" src={MIC} />
      <Image alt="" className="w-10 md:w-auto absolute bottom-14 right-2/3" src={VIDEO} />
      <div className="">
        <div className="py-10 flex flex-col space-y-5 items-center">
          <div ref={menu1Ref} id="menu1" className="flex gap-4 overflow-x-hidden">
            {menu1.map((s, index) => (
              <div
                key={index}
                className={`${colors[index % colors.length]} text-[10px] md:text-[20px] text-white px-2 md:px-10 py-2 rounded-md flex-shrink-0 cursor-pointer`}
              >
                {s}
              </div>
            ))}
          </div>
          <div ref={menu2Ref} id="menu2" className="flex gap-5 overflow-x-hidden">
            {menu2.map((s, index) => (
              <div
                key={index}
                className={`${colors[index % colors.length]} text-[10px] md:text-[20px] text-white px-2 md:px-10 py-2 rounded-md flex-shrink-0 cursor-pointer`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
