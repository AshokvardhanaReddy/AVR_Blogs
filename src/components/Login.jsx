

import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <>
        {/* sm:w-11/12 md:w-10/2 lg:w-9/12 xl:w-9/12 */}
        <section className = "h-[calc(100vh-70px)] bg-indigo-500 flex place-items-center " >
        <div className="m-auto bg-indigo-600 rounded-xl" >
          <h1 className="text-center text-4xl py-5 text-white font-black" >Login</h1>
          <div className="bg-white p-10" >
            <div className="flex rounded my-4  border border-sky-500" >
              <div className="w-10 flex place-items-center rounded bg-indigo-500" >
                <FaRegUser className="text-xl m-auto text-white" />
              </div>
              <input placeholder='User Name' className="p-1.5 outline-none w-full" />
            </div>
            <div className="flex rounded my-4 border border-sky-500" >
              <div className="w-10 flex place-items-center rounded bg-indigo-500" >
                <RiLockPasswordLine className="text-xl m-auto text-white" />
              </div>
              <input placeholder="Password" className="p-1.5  outline-none w-full" />
            </div>
            <p className="text-indigo-500 mb-4 text-left" >Forget Password ?</p>
            <button className="bg-indigo-500 w-full m-auto p-2.5 text-white text-center" >Login</button>
            <p className="text-center py-5" >Not a Member? <Link className="text-indigo-500" >Signup Now</Link></p>
          </div>
        </div>
      </section>
        </>
    )
}