import Image from "next/image";
import CORE from "../../../public/core.png"
import MIC from "../../../public/mic.png"
import VIDEO from "../../../public/video.png"
const Menu = () => {
    const menu1 = [
      "Avatar", "Technology", "Design", "Artificial Intelligence", "AI Chat Bot",
      "Customizable", "3D Model","Assistant","Space","Technology"]
      const menu2=[ "People", "Create Videos", "Analyze","Photoshop",
      "Outfits", "3D Model", "Voice Chat", "Marketing", "Reaction","Fake Voice","Photo Generator"
    ];
    const colors=["bg-custom-gradient-four","bg-custom-gradient-five","bg-custom-gradient-six"]
    return (
      <div className="bg-custom-gradient-two py-3 relative overflow-hidden">
            <Image alt=""  className="w-10 md:w-auto absolute top-15 left-1/2" src={CORE}/>
            <Image alt=""  className="w-10 md:w-auto absolute bottom-8 left-2/3" src={MIC}/>
            <Image alt=""  className="w-10 md:w-auto absolute bottom-14  right-2/3" src={VIDEO}/>
            <div className="">
                <div className="py-10 flex flex-col space-y-5 items-center">
                    <div className="flex gap-4">
                    {
                        menu1.map((s,index)=><div className={`${colors[index % colors.length]} text-[10px] md:text-[20px] text-white px-2 md:px-10 py-2 rounded-md  flex-shrink-0 cursor-pointer`}>{s}</div>)
                    }
                    </div>
                    <div className="flex gap-5">
                        {
                            menu2.map((s,index)=><div className={`${colors[index % colors.length]} text-[10px] md:text-[20px] text-white px-2 md:px-10 py-2 rounded-md  flex-shrink-0 cursor-pointer`}>{s}</div>)
                        }
                    </div>
                </div>
            </div>
      </div>
    );
  };
  
  export default Menu;
  