import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import StateContext from '../store/state-context'
import styles from './Navbar.module.css'
import { FaHome, FaGitAlt } from 'react-icons/fa'


const Navbar = () => {
    const ctx = useContext(StateContext)

    return (
        <nav>
            <NavLink to='/'>Home <FaHome /></NavLink>
            <NavLink to='/repos'>Repos <FaGitAlt /></NavLink>
        </nav>
    )
}

export default Navbar
