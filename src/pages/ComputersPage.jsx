import { Outlet } from "react-router-dom";
import { NavLinkItem } from "../components/NavLinkItem";
import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";

const ComputersPage = () => {
  const {subNavbar} = useContext(StoreContext);
  const normalSubNav = "h-[550px] flex flex-col justify-normal overflow-y-auto border-r-2 border-b-2 border-solid border-sky-600 rounded sm:absolute sm:bg-[--bg-color] sm:border-none md:absolute md:bg-[--bg-color] md:border-none "
  const hideSubNav = "sm:hidden md:hidden"
return (
  <div>
    <div className="border-2 border-solid border-sky-700 w-9/12 m-auto grid grid-cols-[30%_70%] justify-between rounded sm:w-full sm:block md:w-[80%] md:block lg:w-[80%] xl:w-[78%] sm:relative  ">
      <div className= {!subNavbar ? `${normalSubNav} ${hideSubNav}` : normalSubNav} >
        <NavLinkItem title="What is TDS ?" path = "what is TDS" />
        <NavLinkItem title="Do you know about PF ?"  path = "do-you-know-about PF" />
        <NavLinkItem title="What is Income Tax ?" path = "what-is-incommeTax" />
        <NavLinkItem title="Detail Explanation about ITR ?" path = "details-about ITR" />
        <NavLinkItem title="What is BNS ?" path = "what-is-BNS" />
        <NavLinkItem title="What is RTI ?" path = "what-is-RTI" />
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  </div>
);
};

export default ComputersPage;
