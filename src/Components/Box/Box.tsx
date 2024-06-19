import Image from "next/image";
import SHOE from "../../../public/shoe.png";
import BOX_GIRL from "../../../public/box-girl.png";
import KEYBOARD from "../../../public/keyboard.png";
import HALO from "../../../public/halo.png"
const Box=()=>{
    return (
        <div className=" text-[10px] md:text-[20px] text-white py-20 px-5 md:px-0 flex flex-col gap-2 md:gap-10 justify-center items-center">
            <div className="grid grid-cols-5 gap-1 md:gap-5">
                <div className="col-span-2 bg-[#272426] rounded-xl overflow-hidden group relative">
                    <div className="flex flex-col justify-center items-center min-h-[100px] transition-opacity opacity-100 group-hover:opacity-0">
                    <p className="text-white">AI</p>
                    <p className="text-white">Outfits</p>
                    </div>

                    <div className="relative transition-transform transform group-hover:-translate-y-1/4">
                    <Image src={SHOE} alt="Shoe Image" className="w-full" />
                    </div>
                </div>

                <div className="col-span-3 bg-[#272426] rounded-xl overflow-hidden group relative">
                    <div className="flex flex-col justify-center items-center min-h-[100px] transition-opacity opacity-100 group-hover:opacity-0">
                    <p className="text-white">Realistic AI</p>
                    <p className="text-white">Avatar</p>
                    </div>
                    <div className="relative transition-transform transform group-hover:-translate-y-1/4">
                    <Image src={BOX_GIRL} alt="Box Girl Image" className="w-full" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-1 md:gap-5">
                <div className="col-span-3 bg-[#272426] rounded-xl overflow-hidden group relative">
                    <div className="flex flex-col justify-center items-center min-h-[100px] transition-opacity opacity-100 group-hover:opacity-0">
                    <p className="text-white">Generate or Write your</p>
                    <p className="text-white">Script</p>
                    </div>

                    <div className="relative transition-transform transform group-hover:-translate-y-1/4">
                    <Image src={KEYBOARD} alt="KEYBOARD Image" className="w-full" />
                    </div>
                </div>

                <div className="col-span-2 bg-[#272426] rounded-xl overflow-hidden group relative">
                    <div className="flex flex-col justify-center items-center min-h-[100px] transition-opacity opacity-100 group-hover:opacity-0">
                    <p className="text-white">AI Powered Voice </p>
                    <p className="text-white">Generator</p>
                    </div>
                    <div className="relative transition-transform transform group-hover:-translate-y-1/4">
                    <Image src={HALO} alt="HALO Image" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box;