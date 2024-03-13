import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo_blackk.png";
import { FaBars, FaSearch, FaHome, FaHeart, FaList, FaVideo, FaInfoCircle } from "react-icons/fa";

function Header() {

  const [isSidebarOpen , setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`header sticky ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="header__left">
        {/* <img className='header__menu' src={menu} alt="Menu Icon" /> */}
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
        {/* <img className='header__image' src={image1} alt="Image1" /> */}
        <i class="bi bi-heart"></i>
        <i class="bi bi-person-circle"></i>
      </div>

      {isSidebarOpen && (
        <div className="sidebar">

          <ul>
            <li><i class="bi bi-house"></i> HOME</li>
            <li><i class="bi bi-heart"></i> LIKED VIDEOS</li>
            <li><i className="bi bi-collection-play"></i> CHANNELS</li>
            <li><i class="bi bi-fire"></i> EXPLORE</li>
            <li><i class="bi bi-chat-square-text"></i> SEND FEEDBACK</li>
            <li><i class="bi bi-info-circle"></i> ABOUT</li>
          </ul>

        </div>
      )}
    </div>
  );
}

export default Header;
