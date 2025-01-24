import { createContext, useEffect, useState, useCallback } from "react";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [menu, setMenu] = useState("All");
  const [blogsData, setBlogsData] = useState([]);
  const [displayBlogId, setDisplayBlogId] = useState("");

  const url = process.env.BACKEND_SERVER_URL;

  const fetchBlogData = useCallback(() => {
    fetch(`${url}blogs`)
      .then((res) => res.json())
      .then((data) => setBlogsData(data));
  }, [url]);

  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  const contextValue = {
    url,
    menu,
    setMenu,
    blogsData,
    setBlogsData,
    displayBlogId,
    setDisplayBlogId,
  };

  return (
    <BlogContext.Provider value={contextValue}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;

