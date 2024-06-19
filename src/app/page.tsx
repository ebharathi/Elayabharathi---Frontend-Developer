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
export default function Home() {
  return (
   <div>
      <Navbar/>
      <Header/>
      <ImageSection/>
      <MenuSection/>
      <Menu/>
      <Box/>
      <Roadmap/>  
      <GetStarted/>
      <Footer/>
   </div>
  );
}
