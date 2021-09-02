import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Navbar = () => {
  const {showSidebar, showSubmenu, hideSubmenu} = useGlobalContext();

  const handleEvent = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    showSubmenu(page, {center, bottom}) 
  }

  const closeSubmenu = (e) =>{
    if (!e.target.classList.contains('link-btn')){
      hideSubmenu();
    }
  }

  return (
    <nav className='nav' onMouseOver={closeSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className='nav-logo'/>
          <button className="btn toggle-btn" onClick={showSidebar}>
            <FaBars/>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className='link-btn' onMouseOver={handleEvent}>products</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={handleEvent}>developers</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={handleEvent}>company</button>
          </li>
        </ul>
        <button className='btn signin-btn'>sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
