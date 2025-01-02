
import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export const NavLinkItem = ({title, path}) => {
      const {setSubNavbar} = useContext(StoreContext);
    const active = "bg-sky-700 text-white py-2 pl-4 ";
    const inActive = "w-full  hover:bg-sky-700 hover:text-white py-2 pl-4 truncate"

    const handleHamburgerMenu = () => {
        setSubNavbar((prevState) => !prevState);
      }
    return (
        <>
        <NavLink to = {path} className = {({isActive}) => isActive ? `${active} {inActive}` : inActive} onClick={handleHamburgerMenu}  >{title}</NavLink>
        </>
    )
}
