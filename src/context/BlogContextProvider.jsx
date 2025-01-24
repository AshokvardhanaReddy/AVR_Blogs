import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {

    const [menu, setMenu] = useState("All");
    const [blogsData, setBlogsData] = useState([]);
    const [displayBlogId, setDisplayBlogId] = useState("");
   
    const url = "https://srfrozenfoods-server.netlify.app/api/";
    const fetchBlogData = async () => {
      await fetch(`${url}blogs`)
        .then((res) => res.json())
        .then((data) => setBlogsData(data));
    };
   
    useEffect(() => {
      fetchBlogData();
    }, []);


    const contextValue = {menu, setMenu, blogsData, setBlogsData, displayBlogId, setDisplayBlogId}

    return (
        <BlogContext.Provider value={contextValue}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;