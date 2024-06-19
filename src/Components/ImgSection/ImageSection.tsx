import Image from "next/image"
import S1 from "../../../public/s1.png"
import S2 from "../../../public/s2.png"
import S3 from "../../../public/s3.png"
import S4 from "../../../public/s4.png"
import S5 from "../../../public/s5.png"
import S6 from "../../../public/s6.png"
import S7 from "../../../public/s7.png"
import S8 from "../../../public/s8.png"
import S9 from "../../../public/s9.png"
import S10 from "../../../public/s10.png"
import S11 from "../../../public/s11.png"
import S12 from "../../../public/s12.png"
import S13 from "../../../public/s13.png"
import S14 from "../../../public/s14.png"
import S15 from "../../../public/s15.png"
import S16 from "../../../public/s16.png"
import S17 from "../../../public/s17.png"
import S18 from "../../../public/s18.png"
import S19 from "../../../public/s19.png"
import S20 from "../../../public/s20.png"
import S21 from "../../../public/s21.png"

const ImageSection=()=>{
    return(
        <div className="text-white bg-custom-gradient-three flex justify-center relative">
            <div className="absolute left-[53%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                   <p className="text-[11px] md:text-[40px] "><span className="text-yellow-500">Create, customize, and publish </span>your digital persona to life effortlessly.</p>
            </div>
             <div className="z-1">
                <div><Image className="opacity-50" alt="p1" src={S1}/></div>
                <div><Image  className="opacity-50"  alt="p1" src={S2}/></div>
                <div><Image  className="opacity-50"  alt="p1" src={S3}/></div>
             </div>
             <div className="pt-20 z-1">
                    <div><Image  className="opacity-50"  alt="p1" src={S4}/></div>
                    <div><Image  className="opacity-50"  alt="p1" src={S5}/></div>
                    <div><Image  className="opacity-50"  alt="p1" src={S6}/></div>
             </div>
             <div className="z-1">
                <div><Image  className="opacity-50"  alt="p1" src={S7}/></div>
                <div><Image  className="opacity-50"  alt="p1" src={S8}/></div>
                <div><Image  className="opacity-50"  alt="p1" src={S9}/></div>
             </div>
             <div  className="pt-20 z-1">
                <div><Image  className="opacity-50"  alt="p1" src={S10}/></div>
                <div><Image  className="opacity-50"  alt="p1" src={S11}/></div>
                <div><Image  className="opacity-50"  alt="p1" src={S12}/></div>
             </div>
             <div className="z-1">
                <div><Image  className="opacity-50"  alt="p1" src={S13}/></div>
                <div><Image  className="opacity-50"  alt="p1" src={S14}/></div>
                <div><Image  className="opacity-50"  alt="p1" src={S15}/></div>
             </div>
             <div  className="pt-20 z-1">
                <div><Image  className="opacity-50"  alt="p1" src={S16}/></div>
                <div><Image  className="opacity-50"  alt="p1" src={S17}/></div>
                <div><Image  className="opacity-50"  alt="p1" src={S18}/></div>
             </div>
             <div className="z-1">
                <div><Image  className="opacity-50"  alt="p1" src={S19}/></div>
                <div><Image  className="opacity-50"  alt="p1" src={S20}/></div>
                <div><Image  className="opacity-50"  alt="p1" src={S21}/></div>
             </div>
        </div>
    )
}

export default ImageSection;