import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Header from "@/Components/Header/Header";
import ImageSection from "@/Components/ImgSection/ImageSection";
import MenuSection from "@/Components/MenuSection/MenuSection";
import Menu from "@/Components/Menu/Menu";
import Box from "@/Components/Box/Box";
import Roadmap from "@/Components/Roadmap/Roadmap";
import GetStarted from "@/Components/GetStarted/GetStarted";
import Footer from "@/Components/Footer/Footer";
import TokenomicsGraph from "@/Components/Graph/Graph";
export default function Home() {
  return (
   <div>
     <div className="bg-gradient-first">
        <Navbar/>
        <Header/>
        <ImageSection/>
     </div>
     <div className="bg-gradient-two">
        <MenuSection/>
     </div>
     <div className="bg-gradient-three">
        <Menu/>
     </div>
     <div className="bg-gradient-four">
        <Box/>
     </div>
     <div className="bg-gradient-five">
        <TokenomicsGraph id=""/>
     </div>
      <div className="bg-gradient-six">
        <Roadmap id=""/>  
      </div>
      <div className="bg-gradient-seven">
        <GetStarted/>
      </div>
      <div className="bg-gradient-eight">
        <Footer/>
      </div>
   </div>
  );
}
