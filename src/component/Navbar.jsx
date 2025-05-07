import React from 'react'
import './css/comp.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/icon.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt="logo" />
            </div>
            <ul className='nav-item'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                <Link to='/todo'><li>Todo</li></Link>

            </ul>
        </div>
    )
}

export default Navbar