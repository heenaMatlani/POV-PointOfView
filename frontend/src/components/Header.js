import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo1.jpeg";
import { FaBars, FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {

  const [isSidebarOpen , setIsSidebarOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Hamburger menu clicked");
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };
  
  return (
    <div className={`header sticky ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="header__left">
        <FaBars className="header__menu" onClick={toggleSidebar} />
        <Link to="/homepage"><img className="header__logo" src={logo} alt="Logo" /></Link>
      </div>
      <div className="header__center">
        <div className="header__searchContainer">
          <input
            className="header__searchbar"
            type="text"
            placeholder="Search"
          />
          <button className="header__searchButton">
            <Link to="/searched"><FaSearch className="header__search" /></Link>
          </button>
        </div>
      
      </div>
      <div className="header__right">
        <Link to="/likedvideos"><i class="bi bi-heart"></i></Link>
        <Link to="/"><i class="bi bi-person-circle"></i></Link>
      </div>

      {isSidebarOpen && (
        <div className="sidebar">
          <div className="header__left">
            <FaBars className="sidebar__menu" onClick={toggleSidebar} />
            <img className="sidebar__logo" src={logo} alt="Logo" />
          </div>
          <div className="sidebar__list">
          <ul>
            <Link to="/homepage"><li><button><i class="bi bi-house"></i> HOME</button></li></Link>
            <Link to="/likedvideos"><li><button><i class="bi bi-heart"></i> LIKED VIDEOS</button></li></Link>
            <Link to="/channels"><li><button><i className="bi bi-collection-play"></i> CHANNELS</button></li></Link>
            <li><button onClick={toggleExplore}><i class="bi bi-fire"></i> EXPLORE</button></li>
            <li>
            {isExploreOpen && (
          <div className="explore__list">
            <ul>
              <li><i class="bi bi-globe"></i>National </li>
              <li><i class="bi bi-film"></i>Entertainment </li>
              <li><i class="bi bi-globe"></i>International </li>
              <li><i class="bi bi-trophy"></i>Sports  </li>
              <li><i class="bi bi-capsule"></i>Health  </li>
              <li><i class="bi bi-briefcase"></i>Business  </li>
              <li><i class="bi bi-phone"></i>Technology </li>
            </ul>
          </div>
        )}
            </li>
            <Link to="/feedback"><li><button><i class="bi bi-chat-square-text"></i> SEND FEEDBACK</button></li></Link>
            <li><button><i class="bi bi-info-circle"></i> ABOUT</button></li>
          </ul>
        
        </div>
        </div>
      )}
    </div>
  );
}

export default Header;