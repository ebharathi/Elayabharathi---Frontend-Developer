import Image from "next/image";
import SHOE from "../../../public/shoe.png";
import BOX_GIRL from "../../../public/box-girl.png";
import KEYBOARD from "../../../public/keyboard.png";
import HALO from "../../../public/halo.png"
const Box=()=>{
    return (
        <div className="bg-custom-gradient-two text-[10px] md:text-[20px] text-white py-20 px-5 md:px-0 flex flex-col gap-2 md:gap-10 justify-center items-center">
            <div className="grid grid-cols-5 gap-1 md:gap-5">
                 <div className="col-span-2 bg-[#272426] rounded-xl">
                         <div className="flex flex-col justify-center items-center  min-h-[100px]">
                            <p>AI</p>
                            <p>Outfits</p>
                         </div>
                         <div>
                             <Image alt="" className="w-full" src={SHOE}/>
                         </div>
                 </div>
                 <div className="col-span-3 bg-[#272426] rounded-xl">
                         <div className="flex flex-col justify-center items-center  min-h-[100px]">
                            <p>Realistic AI</p>
                            <p>Avatar</p>
                         </div>
                         <div>
                             <Image alt="" className="w-full" src={BOX_GIRL}/>
                         </div>
                 </div>
            </div>
            <div className="grid grid-cols-5 gap-5">
                 <div className="col-span-3 bg-[#272426] rounded-xl">
                         <div className="flex flex-col justify-center items-center  min-h-[100px]">
                            <p>Generate or Write your</p>
                            <p>Script</p>
                         </div>
                         <div>
                             <Image alt="" className="w-full" src={KEYBOARD}/>
                         </div>
                 </div>
                 <div className="col-span-2 bg-[#272426] rounded-xl">
                         <div className="flex flex-col justify-center items-center  min-h-[100px]">
                            <p>AI Powered Voice </p>
                            <p>Generator</p>
                         </div>
                         <div>
                             <Image alt="" className="w-full" src={HALO}/>
                         </div>
                 </div>
            </div>
        </div>
    )
}

export default Box;