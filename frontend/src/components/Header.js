import React from 'react';
import './Header.css';
import menu from '../assets/menu.png';
import logo from '../assets/logo.png';
import { FaBars ,FaSearch} from 'react-icons/fa';
import searchIcon from '../assets/menu.png';
import image1 from '../assets/menu.png';
import image2 from '../assets/menu.png';
import image3 from '../assets/menu.png';

function Header() {
  return (
    <div className="header sticky">
      <div className="header__left">
        {/* <img className='header__menu' src={menu} alt="Menu Icon" /> */}
        <FaBars className="header__menu"/>
        <img className='header__logo' src={logo} alt="Logo" />

      </div>
      <div className="header__center">
        <div className="header__searchContainer">
        <input className="header__searchbar" type='text' placeholder='Search' />
        <button className="header__searchButton">
          <FaSearch />
        </button>
      </div>
      </div>
      <div className="header__right">

        {/* <img className='header__image' src={image1} alt="Image1" /> */}
      </div>
    </div>
  )
}

export default Header;
