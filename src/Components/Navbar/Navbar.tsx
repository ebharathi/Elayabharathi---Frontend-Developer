const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full px-4 md:px-[64px] py-[16px] min-h-[72px] grid grid-cols-2 bg-black bg-opacity-[40%] backdrop-blur-md z-20 text-white">
      <div className="col-span-1 flex items-center gap-12">
        <p className="text-[20px]">AI.GEN</p>
        <ul className="hidden md:flex gap-8 text-[16px]">
          <li>Feature</li>
          <li>Roadmap</li>
          <li>Tokenomics</li>
        </ul>
      </div>
      <div className="hidden md:flex col-span-1 gap-4 justify-end items-center">
        <button className="px-5 py-1 h-[40px] w-[133px] rounded-[4px] bg-[#515759]">Whitepaper</button>
        <button className="px-5 py-1 h-[40px] w-[133px] rounded-[4px] bg-custom-gradient-one">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
