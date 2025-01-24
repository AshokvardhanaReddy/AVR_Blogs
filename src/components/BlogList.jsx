// import { blog_data } from '../assets/assets'
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const url = "https://srfrozenfoods-server.netlify.app/api/";
  const fetchBlogData = async () => {
    await fetch(`${url}blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  };
 

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <>
      <div className="bg-[#F1F5F9]">
        <div className="w-[80%] m-auto sm:w-[97%] md:w-[90%]">
          <div className="flex justify-center overflow-auto gap-6 py-2 ">
            <button
              onClick={() => setMenu("All")}
              className={
                menu === "All"
                  ? "bg-black text-white py-1 px-4 rounded"
                  : " hover:text-[gray]"
              }
            >
              All
            </button>
            <button
              onClick={() => setMenu("Accounts")}
              className={
                menu === "Accounts"
                  ? "bg-black text-white py-1 px-4 rounded"
                  : "hover:text-[gray]"
              }
            >
              Accounts
            </button>
            <button
              onClick={() => setMenu("Politics")}
              className={
                menu === "Politics"
                  ? "bg-black text-white py-1 px-4 rounded"
                  : "hover:text-[gray]"
              }
            >
              Politics
            </button>
            <button
              onClick={() => setMenu("Central Govt.")}
              className={
                menu === "Central Govt."
                  ? "bg-black text-white py-1 px-4 rounded"
                  : "hover:text-[gray]"
              }
            >
              Central Govt.
            </button>
            <button
              onClick={() => setMenu("Sports")}
              className={
                menu === "Sports"
                  ? "bg-black text-white py-1 px-4 rounded"
                  : "hover:text-[gray]"
              }
            >
              Sports
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#E6E6FF]  w-[100%] m-auto py-4 ">
      <div className="w-[80%] m-auto grid grid-cols-4 gap-4 md:w-[90%] md:gap-3 md:grid-cols-3 sm:w-[97%] sm:grid-cols-2 sm:gap-2">
        {blogs
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
  );
};

export default BlogList;
