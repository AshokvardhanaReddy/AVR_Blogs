import logo from "../assets/logo.png";


import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="w-[80%] m-auto py-3 sm:w-[97%] md:w-[90%] flex justify-between items-center">
        <Link to = "/" >
        <img
          src={logo}
          className="max-w-[200px] sm:w-[70%] "
          alt = "company Logo"
        />
        </Link>

        <button className="flex items-center gap-2 px-3 rounded py-1 border border-solid border-[gray] hover:border-[#E6E6FF] hover:bg-[#E6E6FF] ">
          <FaRegUser />
          <p >Login</p>
        </button>
      </div>

    </div>
  );
};

export default Header;
