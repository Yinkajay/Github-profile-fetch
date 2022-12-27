import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink>Home</NavLink>
            <NavLink>Repos</NavLink>
        </nav>
    )
}

export default Navbar
