const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full px-[64px] py-[16px] min-h-[72px] grid grid-cols-2 bg-transparent bg-opacity-[60%] backdrop-blur-sm z-20">
      <div className="col-span-1 flex items-center gap-12">
        <p className="text-[20px]">AI.GEN</p>
        <ul className="flex gap-8 text-[16px]">
          <li>Feature</li>
          <li>Roadmap</li>
          <li>Tokenomics</li>
        </ul>
      </div>
      <div className="col-span-1 flex gap-4 justify-end items-center">
        <button className="px-5 py-1 h-[40px] w-[133px] rounded-[4px] bg-[#515759]">Whitepaper</button>
        <button className="px-5 py-1 h-[40px] w-[133px] rounded-[4px] bg-custom-gradient-one">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
