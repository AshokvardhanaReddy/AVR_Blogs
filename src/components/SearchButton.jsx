
import { useState } from "react";
import styles from "./comp-css/SearchButton.module.css";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export const SearchButton = () => {
    const [searchIcon, setSearchIcon] = useState(false);
    const handleSearchIcon = () => {
        setSearchIcon((prevIcon) => !prevIcon);
    }

    return (
        <>
        <div className = {styles.container}>
            <div  className = {!searchIcon ? styles.search : `${styles.search} ${styles.show_search}`} id="search-bar">
                <input type="search" placeholder="Search For Blog" name="q" className = {styles.search__input} />
                <div className = {styles.search__button} id="search-button" onClick={handleSearchIcon} >
                     {!searchIcon ? <FaSearch className = {styles.search__icon} /> : <IoCloseSharp className = {styles.search__icon} /> } 
                </div>
            </div>
        </div>
        </>
    )
}