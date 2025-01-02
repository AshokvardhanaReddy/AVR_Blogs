import styles from "./comp-css/Comment.module.css";

import { AiFillLike, AiFillDislike } from "react-icons/ai";

import Logo from "../assests/logo192.png";
import { Para } from "./Para";
import { ReactionIcon } from "./ReactionIcon";
export const Comment = () => {
  return (
    <>
      <div className="bg-white w-[95%] mx-auto my-4 rounded-md ">
        <div className="m-auto w-[100%] px-3 py-3 flex justify-between align-middle  lg:mx-4 xl:mx-4 ">
          <div className = "grid grid-cols-[15%,auto] gap-1.5 align-center justify-start ">
            <img
              src={Logo}
              alt="profile_image"
              className="w-[60px] bg-white block m-auto rounded-full border border-solid border-gray-500 sm:w-[140px] md:w-[180px] lg:w-[180px] xl:w-[180px]"
            />
            <div className="">
              <h4>Ashokvardhan</h4>
              <p>10 Days Ago</p>
            </div>
          </div>

          <div className=" flex gap-1.5 place-items-center md:w-[180px] lg:w-[170px] xl:w-[200px] ">
            <ReactionIcon icon={<AiFillLike/>} text="10" />
            <ReactionIcon icon={<AiFillDislike />} text="5" />
          </div>
        </div>

        <Para>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste modi
       
        </Para>
      </div>
    </>
  );
};
