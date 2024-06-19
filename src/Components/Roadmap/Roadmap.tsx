import Image from "next/image";
import R1 from "../../../public/r1.png";
import R2 from "../../../public/r2.png";
import R3 from "../../../public/r3.png";
interface props{
    id:string;
}
const Roadmap=({id}:props)=>{
    const roadmaps=[
        {
            title:"PHASE 1",
            details:["Horizen dai dai harmony dogecoin waves nexo.","Flow horizen waves dash tether zcash waves dash terraUSD.","Quant harmony amp cosmos PancakeSwap decentraland decred. ","Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar."],
            img:R1
        },
        {
            title:"PHASE 2",
            details:["BitTorrent dai dogecoin crypto nexo nexo cosmos tezos ox PancakeSwap. ","Tether ethereum helium eCash IOTA. Litecoin enjin shiba-inu dash audius monero.","Aave PancakeSwap loopring horizen neo uniswap avalanche litecoin celsius TRON.","Hive stellar velas flow cardano."],
            img:R2
        },
        {
            title:"PHASE 3",
            details:["Revain audius bitcoin revain PancakeSwap elrond ipsum ethereum. ","Waves TRON dogecoin bancor eCash quant secret.","Celsius crypto bancor nexo litecoin decentraland crypto."],
            img:R3
        },

    ]
    return (
        <div id="roadmap" className="">
            <p className="text-center text-gradient text-[25px] md:text-[32px]">Roadmap</p>
            { 
                roadmaps.map((single)=>  
                <div className="px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 py-5 md:py-20">
                        <div className="flex justify-start items-center">
                            <div className="md:pl-40 md:pr-20">
                                <p className="text-[36px] md:text-[48px] text-gradient">{single.title}</p>
                                <ul className="pl-5 list-disc">
                                    {single.details.map((x)=><li className="list text-[12px] md:text-[20px] ml-5 text-white">{x}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-end">
                          <Image alt="" src={single?.img}/>
                        </div>
                </div>)
            }
        </div>
    )
}

export default Roadmap;