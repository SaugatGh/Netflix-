import React, { useState } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Navbar = () => {
const [isScrolled,setIsScrolled]=useState(false)
window.onscroll=()=>{
  setIsScrolled(window.pageYOffset ===0 ? false :true)
  return ()=>(windws.onscroll=null);

}
  return (
    <div className={isScrolled ? "navbar scrolled":"navbar"} >
      <div className="container">
        <div className="left">
          <img
            src="https://www.out.com/sites/default/files/2019/07/19/netflix-logo-digital-750-1.jpg"
            alt="netflix logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>KID</span>
          <NotificationsNoneIcon className="icon" />
          <img
            src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2019/01/Profile-Pic-Images-5-300x286.jpg"
            alt="profile logo"
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
