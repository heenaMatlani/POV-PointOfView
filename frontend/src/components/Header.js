import React from 'react';
import './Header.css';
import menu from '../assets/menu.png';
import logo from '../assets/logo.png';
import searchIcon from '../assets/menu.png';
import image1 from '../assets/menu.png';
import image2 from '../assets/menu.png';
import image3 from '../assets/menu.png';

function Header() {
  return (
    <div className="header sticky">
      <div className="header__left">
        <img className='header__menu' src={menu} alt="Menu Icon" />
        <img className='header__logo' src={logo} alt="Logo" />
      </div>
      <div className="header__center">
        <input className="header__searchbar" type='text' placeholder='Search' />
      </div>
      <div className="header__right">
        <img className='header__image' src={image1} alt="Image1" />
        <img className='header__image' src={image2} alt="Image2" />
        <img className='header__image' src={image3} alt="Image3" />
      </div>
    </div>
  )
}

export default Header;
