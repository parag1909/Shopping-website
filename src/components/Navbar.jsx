import React from 'react'
import { Link} from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
  return (
    <div className='nav'>
        <div className='logo'>
            <img src='/images/brand_logo.png' alt="brand-logo"/>
        </div>
        <ul className='nav-menu'>
            <li>
              <Link to="/">HOME</Link>
              </li>
            <li href='#'>LOCATION</li>
            <li href='#'>ABOUT</li>
            <li>
              <Link to="/Contactus">CONTACT US</Link>
            </li>
        </ul>
        <button>Login</button>
    </div>
  )
}


export default Navbar   
