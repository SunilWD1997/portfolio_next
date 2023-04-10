import Link from "next/link";
import MenuBar from "@/components/MenuBar";
import {MdOutlineDownload} from "react-icons/md";
import {TfiMenu} from "react-icons/tfi";
import {GrClose} from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
    const[showMenu, setShowMenu]=useState(false);

  return (
    <nav className="fixed z-10 bg-[white] w-full h-[60px] mx-auto px-[20px] md:px-[70px] shadow-lg flex justify-between items-center">
      <div className="text-2xl  font-medium hover:text-orange-400">
        <Link href="/">Sunil Patra</Link>
      </div>

      


      <MenuBar showMenu={showMenu} setShowMenu={setShowMenu}/>

      <div className="hidden text-[12px]  font-bold   md:flex flex-row items-center justify-center gap-1 border-[2px] border-orange-400 px-[13px] py-[4px] rounded-[7px] hover:bg-orange-400 hover:text-white">
        <Link href="/">Download CV  </Link> <MdOutlineDownload className=" text-[16px] "/>
      </div>

      <div className="md:hidden" onClick={()=>setShowMenu(!showMenu)}>
      {showMenu? <GrClose /> :<TfiMenu />}
      </div>
      
    </nav>
  );
};

export default Navbar;
