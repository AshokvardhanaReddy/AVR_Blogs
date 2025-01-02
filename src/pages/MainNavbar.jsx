import styles from "./pages-css/MainNavbar.module.css";
import companyLogo from "../assests/logo192.png";

import { FaUserCircle } from "react-icons/fa";

export const MainNavbar = () => {
  return (
    <>
      <section  >
        <div className = " flex place-items-center justify-between m-auto  py-1.5 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-9/12" >
          <div className = "flex place-items-center gap-3 " >
            <img src={companyLogo} alt="company_logo" className = "w-16 aspect-square sm:w-12 md:w-14 lg:w-16 " />
            <div>
              <h2 className = {styles.company_name} >AVR Blogs</h2>
            </div>
          </div>


          {/* Login to website Implementation */}
          <button  className = "flex place-items-center gap-3 bg-white rounded hover:bg-sky-700 hover:text-white py-2 px-4 " >
            <FaUserCircle  className = "text-xl" />
            <p>Login</p>
          </button>
        </div>
      </section>
    </>
  );
};
