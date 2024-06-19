import Image from "next/image";
import ENJOY_SVG from "../../../public/enjoy.png";
import P1 from "../../../public/p1.png"
import P2 from "../../../public/p2.png"
import P3 from "../../../public/p3.png"
import P4 from "../../../public/p4.png"
import P5 from "../../../public/p5.png"
import P6 from "../../../public/p6.png"
import P7 from "../../../public/7.png"
import P8 from "../../../public/p8.png"
import P9 from "../../../public/p9.png"
// import P1 from "../../../public/p1.png"
// import P1 from "../../../public/p1.png"
// import P1 from "../../../public/p1.png"
const Header=()=>{
    return (
        <div className="py-[100px] min-h-screen grid grid-cols-10 bg-custom-gradient-two z-10">
            <div className="col-span-10 md:col-span-6 flex items-center justify-end">
                <div className=" flex flex-col  space-y-7 pr-3">
                    <div className="py-10">
                        <span className="">
                            <span className="bg-[#181414] text-[12px] px-[10px] py-[12px] rounded-[9px]">🎉 New in AI.GEN: Real Time Interaction</span>
                        </span>
                    </div>
                    <p className="text-[48px] leading-[59px]">IOTA polygon serum ipsum<br/> WAX terraUSD gala THETA.</p>
                    <p className="text-[14px] leading-[20px]"  >Chiliz serum TRON dash aave cardano crypto celo. Golem<br/> ankr bancor horizen ethereum quant bitcoin.</p>
                    <button className="px-5 py-1 h-[40px] w-[133px] rounded-[4px] bg-custom-gradient-one">Get Started</button>
                </div>
            </div>
            <div className="col-span-4  hidden  md:grid-cols-3 relative md:grid">
                         <div className="flex flex-col absolute top-0 left-14">
                              <Image alt="p1" src={P1}/>
                              <Image alt="p1"  src={P2}/>
                              <Image alt="p1"  src={P3}/>
                         </div>
                         <div className="flex flex-col absolute left-[38%] top-[-100px]">
                              <Image alt="p1"  src={P4}/>
                              <Image alt="p1"  src={P5}/>
                              <Image alt="p1"  src={P6}/>
                         </div>
                         <div className="flex flex-col items-end absolute top-0 right-[1px]">
                              <Image alt="p1"  src={P7} />
                              <Image alt="p1"  src={P8}/>
                              <Image alt="p1" src={P9}/>
                         </div>
            </div>
        </div>
    )
}
export default Header;