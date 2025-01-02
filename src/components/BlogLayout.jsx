import { Comment } from "./Comment";
import styles from "./comp-css/BlogLayout.module.css";

import { NavLink } from "react-router-dom";

export const BlogLayout = () => {
  return (
    <>
      <section className={styles.blog_layout}>
        <div className={styles.blog_layout_menu}>
          
         <NavLink  className={({ isActive }) => isActive ? styles.active : "" } to = "/" >Article - 1</NavLink>
         <NavLink className={({ isActive }) => isActive ? styles.active : "" } to = "/article2" >Article - 2</NavLink>
         <NavLink className={({ isActive }) => isActive ? styles.active : "" } to = "/article3" >Article - 3</NavLink>
         <NavLink className={({ isActive }) => isActive ? styles.active : "" } to = "/article4" >Article - 4</NavLink>

        </div>
        <div className={styles.blog_layout_content}>
          <div >
            <h1>Blog Heading....</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
              incidunt! Ab dignissimos voluptatibus explicabo eveniet eius iste
              accusantium numquam aliquid?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
              incidunt! Ab dignissimos voluptatibus explicabo eveniet eius iste
              accusantium numquam aliquid?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
              incidunt! Ab dignissimos voluptatibus explicabo eveniet eius iste
              accusantium numquam aliquid?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
              incidunt! Ab dignissimos voluptatibus explicabo eveniet eius iste
              accusantium numquam aliquid?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
              incidunt! Ab dignissimos voluptatibus explicabo eveniet eius iste
              accusantium numquam aliquid?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
              incidunt! Ab dignissimos voluptatibus explicabo eveniet eius iste
              accusantium numquam aliquid?
            </p>
          </div>
          <Comment/>
          <Comment/>

        </div>
       
    </section>
    </>
  );
};
