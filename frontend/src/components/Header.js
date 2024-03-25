import React, { useState,useEffect } from "react";
import "./Header.css";
import logo from "../assets/logo1.jpeg";
import { FaBars, FaSearch} from "react-icons/fa";
import { Link} from "react-router-dom";

function Header() {

  const [isSidebarOpen , setIsSidebarOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    console.log("Hamburger menu clicked");
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    // Handle logout logic here
    // For example, clear user session or perform any necessary cleanup
    console.log("Logout clicked");
  };

  useEffect(() => {
    // Add or remove 'explore-open' class based on isExploreOpen state
    if (isExploreOpen) {
      document.body.classList.add("explore-open");
    } else {
      document.body.classList.remove("explore-open");
    }
  }, [isExploreOpen]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query state
  };

  return (
    <div className={`header sticky ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* <div className="header__left">
        <FaBars className="header__menu" onClick={toggleSidebar} />
        <Link to="/homepage"><img className="header__logo" src={logo} alt="Logo" /></Link>
      </div> */}
            <div className="header__left">
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="hamburger__container">
            <div className="hamburger__inner"></div>
            <div className="hamburger__hidden"></div>
          </div>
        </div>
        <Link to="/homepage"><img className="header__logo" src={logo} alt="Logo" /></Link>
      </div>
      <div className="header__center">
        <div className="header__searchContainer">
          <input
            className="header__searchbar"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="header__searchButton">
            <Link to={`/searched?query=${searchQuery}`}><FaSearch className="header__search" /></Link>
          </button>
        </div>

      </div>
      <div className="header__right">
        <Link to="/likedvideos"><i class="bi bi-heart"></i></Link>
        <div className="dropdown">
        <i class="bi bi-person-circle" onClick={toggleDropdown}></i>
        <div className={`dropdown__menu ${isDropdownOpen ? 'active' : ''}`}>
            <button onClick={handleLogout}><Link to= "/">Logout </Link></button>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="sidebar">
          {/* <div className="header__left">
            <FaBars className="sidebar__menu" onClick={toggleSidebar} />
            <img className="sidebar__logo" src={logo} alt="Logo" />
          </div> */}
                <div className="header__left">
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="hamburger__container">
            <div className="hamburger__inner"></div>
            <div className="hamburger__hidden"></div>
          </div>
        </div>
        <Link to="/homepage"><img className="header__logo" src={logo} alt="Logo" /></Link>
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
              <li><button><i class="bi bi-geo-alt"></i>National</button> </li>
              <li><button><i class="bi bi-film"></i>Entertainment </button></li>
              <li><button><i class="bi bi-globe"></i>International </button></li>
              <li><button><i class="bi bi-trophy"></i>Sports </button> </li>
              <li><button><i class="bi bi-capsule"></i>Health  </button></li>
              <li><button><i class="bi bi-briefcase"></i>Business  </button></li>
              <li><button><i class="bi bi-phone"></i>Technology </button></li>
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