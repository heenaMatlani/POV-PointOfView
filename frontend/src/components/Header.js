import React, { useState,useEffect } from "react";
import "./Header.css";
import logo from "../assets/logoo1.png";
import { FaBars, FaSearch} from "react-icons/fa";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Header() {

    const navigate = useNavigate();

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
    fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("User logged out successfully");
          // Additional logic if needed
        } else {
          console.error("Error logging out:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
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

    const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Execute search action here
      console.log("Enter key pressed. Perform search...");
      navigate(`/searched?query=${searchQuery}`);
      // Redirect to search page with the query
    }
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
            onKeyPress={handleKeyPress}
          />
          <button className="header__searchButton" onClick={() => navigate(`/searched?query=${searchQuery}`)}>
            <FaSearch className="header__search" />
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
              <Link to='/national'><li><button><i class="bi bi-geo-alt"></i>National</button> </li></Link>
              <Link to='/entertainment'><li><button><i class="bi bi-film"></i>Entertainment </button></li></Link>
              <Link to="/international"><li><button><i class="bi bi-globe"></i>International </button></li></Link>
              <Link to="/sports"><li><button><i class="bi bi-trophy"></i>Sports </button> </li></Link>
              <Link to="/health"><li><button><i class="bi bi-capsule"></i>Health  </button></li></Link>
              <Link to="/business"><li><button><i class="bi bi-briefcase"></i>Business  </button></li></Link>
              <Link to="/technology"><li><button><i class="bi bi-phone"></i>Technology </button></li></Link>
            </ul>
          </div>
        )}
            </li>
            <Link to="/feedback"><li><button><i class="bi bi-chat-square-text"></i> SEND FEEDBACK</button></li></Link>
           <Link to= "/about"> <li><button><i class="bi bi-info-circle"></i> ABOUT</button></li></Link>
          </ul>

        </div>
        </div>
      )}
    </div>
  );
}

export default Header;