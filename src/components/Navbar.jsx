import { useContext} from "react";
import { NavLink} from "react-router-dom";
import  {BlogContext}  from "../context/BlogContextProvider";

const Navbar = () => {
    const {setMenu} = useContext(BlogContext);
    const active = "bg-black text-white py-1 px-4 rounded";
    const notActive = " hover:text-[gray]"
  return (
    <>
    <div className="bg-[#F1F5F9]">
    <div className="w-[80%] m-auto sm:w-[97%] md:w-[90%]">
      <div className="flex justify-center place-items-center overflow-auto gap-6 py-2 ">
        <NavLink to = "/"
          onClick={() => setMenu("All")}
         className={({isActive}) => isActive ? active : notActive}
        >
          All
        </NavLink>

        <NavLink to = "/Accounts"
          onClick={() => setMenu("Accounts")}
          className={({isActive}) => isActive ? active : notActive}
        >
          Accounts
        </NavLink>

        <NavLink to = "/Politics"
          onClick={() => setMenu("Politics")}
          className={({isActive}) => isActive ? active : notActive}
        >
          Politics
        </NavLink>

        <NavLink to = "Central Govt."
          onClick={() => setMenu("Central Govt.")}
          className={({isActive}) => isActive ? active : notActive}
        >
          Central Govt.
        </NavLink>

        <NavLink to = "Sports"
          onClick={() => setMenu("Sports")}
          className={({isActive}) => isActive ? active : notActive}
        >
          Sports
        </NavLink>
      </div>
    </div>
  </div>
      
</>
  )
}

export default Navbar
