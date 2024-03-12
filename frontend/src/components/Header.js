import React, { useState } from "react";
import "./Header.css";
import menu from "../assets/menu.png";
import logo from "../assets/logo.png";
import { FaBars, FaSearch } from "react-icons/fa";

function Header() {

  const [isSidebarOpen , setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="header sticky">
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
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="header__right">
        {/* <img className='header__image' src={image1} alt="Image1" /> */}
      </div>

      {isSidebarOpen && (
        <div className="sidebar">

          <ul>
            <li>Option 1</li>
            <li>Option 1</li>
            <li>Option 1</li>
            <li>Option 1</li>
          </ul>

        </div>
      )}
    </div>
  );
}

export default Header;
