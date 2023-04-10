import React from "react";
import Link from "next/link";

const MenuBar = ({showMenu, setShowMenu}) => {
  const menuItems = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Portfolio", url: "/portfolio" },
    { id: 4, title: "Blog", url: "/blog" },
    { id: 5, title: "Contact Us", url: "/contact" },
  ];

  return (
    <div>
    <ul className="hidden md:flex gap-4">
      {menuItems?.map((items) => {
        return (
          <li key={items.id} className=" text-[14px] font-medium hover:text-orange-500">
            <Link href={items.url}>{items.title}</Link>
          </li>
        );
      })}
    </ul>
    <ul className={`z-40 bg-[whitesmoke] w-full absolute top-[58px]    ${showMenu? `left-[0]`: `left-[-110%]`}   duration-200 flex flex-col gap-[20px]  py-[20px]    md:hidden `}>
      {menuItems?.map((items) => {
        return (
          <li onClick={()=>setShowMenu(false)} key={items.id} className=" text-[18px] font-medium hover:text-red-500 px-[20px] py-[5px] ">
            <Link href={items.url}>{items.title}</Link>
          </li>
        );
      })}
    </ul>
    </div>
  );
};

export default MenuBar;
