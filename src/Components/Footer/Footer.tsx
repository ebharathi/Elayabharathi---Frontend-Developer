import YOUTUBE from "../../../public/youtube.png";
import LINEKDIN from "../../../public/linkedin.png";
import TIKTOK from "../../../public/titktok.png";
import TWITTER from "../../../public/twiiter.png";
import Image from "next/image";
const Footer=()=>{
    return (
        <footer className="px-10 pt-20 pb-10">
             <div className="grid grid-cols-2">
                    <div className="col-span-1 flex items-center justify-center">
                        <p>Dash dash terraUSD neo uniswap<br/> kadena helium avalanche polymath<br/> bancor.</p>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2 items-end">
                           <p className="text-right text-[14px]">Looking for help?</p>
                          <div className="flex gap-2">
                                <input  className="bg-transparent border-2 rounded-md px-2" type="text" placeholder="Enter your email"/>
                                <button className="bg-custom-gradient-seven px-4 py-2 rounded-md">Submit</button>
                          </div>
                    </div>
             </div>
             <div className="mt-20 pt-10 border-t-[1px] grid grid-cols-2">
                   <div className="flex justify-start">
                      <p>AI. GEN</p>
                   </div>
                   <div className="flex justify-end">
                      <ul className="flex gap-8">
                         <li>
                            <Image alt="" src={TWITTER}/>
                         </li>
                         <li>
                            <Image alt="" src={LINEKDIN}/>
                         </li>
                         <li>
                            <Image alt="" src={TIKTOK}/>
                         </li>
                         <li>
                            <Image alt="" src={YOUTUBE}/>
                         </li>
                       
                      </ul>
                   </div>
             </div>
        </footer>
    )
}

export default Footer;