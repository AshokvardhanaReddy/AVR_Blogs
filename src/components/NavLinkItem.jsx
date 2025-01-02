

import { NavLink } from "react-router-dom";

export const NavLinkItem = ({title}) => {
    return (
        <>
        <NavLink to = "/" className = "w-full  hover:bg-sky-700 hover:text-white py-2 pl-4 truncate" >{title}</NavLink>
        </>
    )
}
