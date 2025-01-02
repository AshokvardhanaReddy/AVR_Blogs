import { NavLinkItem } from "./NavLinkItem";
import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";

export const SideNavigation = () => {
  const {subNavbar} = useContext(StoreContext);
  const normalSubNav = "h-[550px] flex flex-col justify-normal overflow-y-auto border-r-2 border-b-2 border-solid border-sky-600 rounded sm:absolute sm:bg-[--bg-color] sm:border-none md:absolute md:bg-[--bg-color] md:border-none "
  const hideSubNav = "sm:hidden md:hidden"


  return (
    <>
      <div className= {!subNavbar ? `${normalSubNav} ${hideSubNav}` : normalSubNav}>
        <NavLinkItem title="What is TDS ?"  />
        <NavLinkItem title="Do you know about PF ?" />
        <NavLinkItem title="What is Income Tax ?" />
        <NavLinkItem title="Detail Explanation about ITR ?" />
        <NavLinkItem title="What is BNS ?" />
        <NavLinkItem title="What is RTI ?" />
      </div>
    </>
  );
};
