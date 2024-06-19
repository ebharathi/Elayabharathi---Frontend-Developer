import YOUTUBE from "../../../public/youtube.png";
import LINEKDIN from "../../../public/linkedin.png";
import TIKTOK from "../../../public/titktok.png";
import TWITTER from "../../../public/twiiter.png";
import Image from "next/image";
const Footer=()=>{
    return (
        <footer className="px-1 md:px-10 pt-10 md:pt-20 pb-5 md:pb-10  text-white">
             <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 flex md:items-center justify-start pl-16 md:pl-0 text-[12px] md:text-[16px]">
                        <p>Dash dash terraUSD neo uniswap<br/> kadena helium avalanche polymath<br/> bancor.</p>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2 items-center md:items-end text-[12px] md:text-[16px]">
                          <div className="pr-16 md:pr-0 text-right w-full">
                          <p className="text-right">Looking for help?</p>
                          </div>
                          <div className="flex gap-1 md:gap-2">
                                <input  className="bg-transparent border-2 rounded-md px-2" type="text" placeholder="Enter your email"/>
                                <button className="bg-custom-gradient-seven px-4 py-2 rounded-md">Submit</button>
                          </div>
                    </div>
             </div>
             <div className="text-[12px] mt-10 md:mt-20 pt-5 md:pt-10 border-t-[1px] grid grid-cols-2">
                   <div className="flex justify-start">
                      <p>AI. GEN</p>
                   </div>
                   <div className="flex justify-end">
                      <ul className="flex gap-4 md:gap-8">
                         <li>
                            <Image alt="" className="w-3 md:w-auto" src={TWITTER}/>
                         </li>
                         <li>
                            <Image alt="" className="w-3 md:w-auto" src={LINEKDIN}/>
                         </li>
                         <li>
                            <Image alt="" className="w-3 md:w-auto" src={TIKTOK}/>
                         </li>
                         <li>
                            <Image alt="" className="w-3 md:w-auto" src={YOUTUBE}/>
                         </li>
                       
                      </ul>
                   </div>
             </div>
        </footer>
    )
}

export default Footer;