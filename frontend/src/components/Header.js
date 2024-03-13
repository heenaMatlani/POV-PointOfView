import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo_blackk.png";
import { FaBars, FaSearch} from "react-icons/fa";

function Header() {

  const [isSidebarOpen , setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Hamburger menu clicked");
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className={`header sticky ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="header__left">
        <FaBars className="header__menu" onClick={toggleSidebar} />
        <img className="header__logo" src={logo} alt="Logo" />
      </div>
      <div className="header__center">
        <div className="header__searchContainer">
          <input
            className="header__searchbar"
            type="text"
            placeholder="Search"
          />
          <button className="header__searchButton">
            <FaSearch className="header__search" />
          </button>
        </div>
      
      </div>
      <div className="header__right">
        <i class="bi bi-heart"></i>
        <i class="bi bi-person-circle"></i>
      </div>

      {isSidebarOpen && (
        <div className="sidebar">

          <ul>
            <li><button><i class="bi bi-house"></i> HOME</button></li>
            <li><button><i class="bi bi-heart"></i> LIKED VIDEOS</button></li>
            <li><button><i className="bi bi-collection-play"></i> CHANNELS</button></li>
            <li><button><i class="bi bi-fire"></i> EXPLORE</button></li>
            <li><button><i class="bi bi-chat-square-text"></i> SEND FEEDBACK</button></li>
            <li><button><i class="bi bi-info-circle"></i> ABOUT</button></li>
          </ul>

        </div>
      )}
    </div>
  );
}

export default Header;