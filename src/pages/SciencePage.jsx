import { Outlet } from "react-router-dom";
import { NavLinkItem } from "../components/NavLinkItem";
import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";

const SciencePage = () => {
  const {subNavbar} = useContext(StoreContext);
  const normalSubNav = "h-[550px] flex flex-col justify-normal overflow-y-auto border-r-2 border-b-2 border-solid border-sky-600 rounded sm:absolute sm:bg-[--bg-color] sm:border-none md:absolute md:bg-[--bg-color] md:border-none "
  const hideSubNav = "sm:hidden md:hidden"
return (
  <div>
    <div className="border-2 border-solid border-sky-700 w-9/12 m-auto grid grid-cols-[30%_70%] justify-between rounded sm:w-full sm:block md:w-[80%] md:block lg:w-[80%] xl:w-[78%] sm:relative  ">
      <div className= {!subNavbar ? `${normalSubNav} ${hideSubNav}` : normalSubNav} >
        <NavLinkItem title="What is Science ?" path="what is science" />
        <NavLinkItem title="Do you know about Ancient Science in India ?"  path="details about ancient science in india" />
        <NavLinkItem title="What is Space Exploration ?" path="what is space exploration" />
        <NavLinkItem title="Detail Explanation about Nuclear Science ?" path="details about nuclear science" />
        <NavLinkItem title="What is Climate Change  ?" path="what is climate change" />
        <NavLinkItem title="What is Modern Science ?" path="what is modern science" />
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  </div>
);
};

export default SciencePage;
