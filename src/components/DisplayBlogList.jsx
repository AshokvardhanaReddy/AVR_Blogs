import { useContext } from "react";

import { BlogContext } from "../context/BlogContextProvider";
import BlogItem from "./BlogItem";


const DisplayBlogList = () => {
const {menu, blogsData} = useContext(BlogContext);
  return (
  <>
   <div className="bg-[#E6E6FF]  w-[100%] m-auto py-4 ">
  <div className="w-[80%] m-auto grid grid-cols-4 gap-4 md:w-[90%] md:gap-3 md:grid-cols-3 sm:w-[97%] sm:grid-cols-2 sm:gap-2">
    {blogsData
      .filter((item) => (menu === "All" ? true : item.category === menu))
      .map((item, index) => {
        return (
          <BlogItem
            key={index}
            id={item._id}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
          />
        );
      })}
  </div>
  </div>
  </>
  )
}

export default DisplayBlogList
