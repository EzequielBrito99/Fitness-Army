import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  let initialStatus = false;

  if (window.screen.width > 576) {
    initialStatus = true
  }

  const [navStatus, setNavStatus] = useState(initialStatus);
  const [searchStatus, setSearchStatus] = useState(false);

  const handleNavStatus = () => {
    if (window.screen.width < 576) {
      setNavStatus(!navStatus);
    }
  };

  const handleSearchStatus = () => {
      setSearchStatus(!searchStatus);
  };

  return (
    <div className='navbar fixed-top container bg-white'>
      {
        (navStatus)
          ?
          <i className='icono fa fa-close d-sm-none' onClick={handleNavStatus}></i>
          :
          <i className='icono fa fa-bars d-sm-none' onClick={handleNavStatus}></i>
      }
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Logo" />
      </div>
      <ul className={'navbar-nav d-flex flex-column justify-content-between ' + (!navStatus && 'nav-close')}>
        <span className='d-flex flex-column flex-md-row gap-3'>
          <li><NavLink to='/' className='nav-item' onClick={handleNavStatus}>Home</NavLink></li>
          <li><NavLink to='/catalog' className='nav-item' onClick={handleNavStatus}>Catalog</NavLink></li>
          <li><NavLink to='/contact' className='nav-item' onClick={handleNavStatus}>Contact</NavLink></li>
        </span>
        <span className='nav-redes p-2 d-md-none'>
          <i className='icono fa fa-facebook'></i>
          <i className='icono fa fa-instagram'></i>
        </span>
      </ul>
      <i className='icono fa fa-search' onClick={handleSearchStatus}></i>
      <div className={"nav-search position-absolute bg-white top-0 start-0 w-100 d-flex justify-content-md-end align-items-baseline py-4 px-2 " + (!searchStatus&&'search-close')}>
        <input type="search" name="search" id="search-input" className='flex-grow-1 flex-md-grow-0 w-25' />
        <i className='icono fa fa-search'></i>
        <i className='icono fa fa-close' onClick={handleSearchStatus}></i>
      </div>
      <i className='icono fa fa-shopping-bag'></i>
    </div>
  )
}

export default Navbar
