import { NavLinkItem } from "./NavLinkItem";

export const SideNavigation = () => {
  return (
    <>
      <div className="h-[550px] flex flex-col justify-normal overflow-y-auto border-r-2 border-b-2 border-solid border-sky-600 rounded sm:hidden md:hidden  ">
        <NavLinkItem title="What is TDS ?" />
        <NavLinkItem title="Do you know about PF ?" />
        <NavLinkItem title="What is Income Tax ?" />
        <NavLinkItem title="Detail Explanation about ITR ?" />
        <NavLinkItem title="What is BNS ?" />
        <NavLinkItem title="What is RTI ?" />

       
      </div>
    </>
  );
};
