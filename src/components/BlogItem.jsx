
import { useContext } from "react";
import { NavLink} from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";
import { BlogContext } from '../context/BlogContextProvider';

const BlogItem = ({ title, description, category, image, id }) => {
const { setDisplayBlogId} = useContext(BlogContext);

  return (
    <div className=" max-w-[330px] sm:max-w-[300px] bg-white border rounded " onClick={() => setDisplayBlogId(id)} >
      <NavLink to={`/${category}/${id}`} className = "" >
        <img
          src="https://dummyimage.com/250"
          alt=""
          className="h-[250px] w-[100%] px-2 py-2 rounded"
        />
      </NavLink>
      <p className="ml-2 mt-2 px-4 py-1 rounded inline-block bg-[#E6E6FF] text-black font-semibold text-sm">
        {category}
      </p>

      <div className="p-2">
        <p className="mb-2 text-lg text-left font-semibold tracking-tight text-gray-900 line-clamp-1">
          {title}
        </p>
        <p
          className="mb-3 text-sm text-justify tracking-tight text-gray-700 line-clamp-3"
        >{description}</p>
        <NavLink
          to={`/${category}/${id}`}
          className=" border border-black rounded inline-flex items-center gap-2 px-3 py-1  font-semibold text-center hover:bg-[#E6E6FF] hover:border-[#E6E6FF]"
        >
          Read more
          <FaArrowRightLong/>
        </NavLink>
      </div>
    </div>
  );
};

export default BlogItem;
