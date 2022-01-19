import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { UilSun, UilMoon } from '@iconscout/react-unicons'
import './Navbar.css'

function Navbar() {

    const [nav, setNav] = useState(false)
    const changBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', changBackground)

    return (
        <nav className={ nav ? "nav active" : "nav" }>
            <Link to="home" className="logo" smooth={ true } duration={ 1000 }>
                <a className='logo__text' href="#"><span>ng</span>mnhdc</a>
            </Link>
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="home" smooth={ true } duration={ 1000 }>Home</Link></li>
                <li><Link to="about" smooth={ true } duration={ 1000 }>About</Link></li>
                {/* <li><Link to="skills" smooth={ true } duration={ 1000 }>Skills</Link></li> */ }
                <li><Link to="projects" smooth={ true } duration={ 1000 }>Projects</Link></li>
                <li><Link to="contact" smooth={ true } duration={ 1000 }>Contact</Link></li>
                {/* <li><UilSun size="20" color="#61DAFB" /></li>
                <li><UilMoon size="18" color="#61DAFB" /></li> */}
            </ul>
        </nav>
    )
}
export default Navbar
