import React, { useContext } from "react";
import { LuMenuSquare } from "react-icons/lu";
import { NavLink } from "react-router-dom";

import { StoreContext } from "../context/StoreContext";

const CarouselNav = () => {
  const cssStr = " px-3 rounded hover:bg-sky-700 hover:text-white text-center";
  const cssActive = "bg-sky-700 text-center text-white";

  const {setSubNavbar } = useContext(StoreContext);
  const handleSubMenu = () => {
    setSubNavbar((prevState) => !prevState);
  };

  return (
    <section className="bg-white">
      <div className="py-3 sm:py-2 flex gap-1 justify-start align-middle w-[78%] mx-auto sm:w-[100%] sm:gap-0 md:w-[80%] lg:w-[80%] xl:w-[80%]">
        <LuMenuSquare
          className="text-4xl mx-1 lg:hidden xl:hidden"
          onClick={handleSubMenu}
        />
        <div className=" m-auto w-[100%] px-3 flex gap-12 overflow-auto scrollbar-hidden sm:gap-2 ">
          <NavLink
            to="/Accounts"
            className={({ isActive }) =>
              isActive ? `${cssStr} ${cssActive}` : cssStr
            }
          >
            Accounts
          </NavLink>
          <NavLink
            to="/Science"
            className={({ isActive }) =>
              isActive ? `${cssStr} ${cssActive}` : cssStr
            }
          >
            Science
          </NavLink>
          <NavLink
            to="/Social"
            className={({ isActive }) =>
              isActive ? `${cssStr} ${cssActive}` : cssStr
            }
          >
            Social
          </NavLink>
          <NavLink
            to="/Mathematics"
            className={({ isActive }) =>
              isActive ? `${cssStr} ${cssActive}` : cssStr
            }
          >
            Mathematic
          </NavLink>
          <NavLink
            to="/Biology"
            className={({ isActive }) =>
              isActive ? `${cssStr} ${cssActive}` : cssStr
            }
          >
            Biology
          </NavLink>
          <NavLink
            to="/Computers"
            className={({ isActive }) =>
              isActive ? `${cssStr} ${cssActive}` : cssStr
            }
          >
            Computers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CarouselNav;
