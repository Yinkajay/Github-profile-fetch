import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import StateContext from '../store/state-context'
import styles from './Navbar.module.css'
import { FaHome, FaGitAlt } from 'react-icons/fa'



const Navbar = () => {
    const ctx = useContext(StateContext)

    return (
        <nav>
            <NavLink  to='/' style={({ isActive }) => ({
                    borderBottom: isActive ? '#fff solid' : '',
                  })}>Home <FaHome /></NavLink>
            {ctx.hasFetchedProfile &&
                <NavLink  style={({ isActive }) => ({
                    borderBottom: isActive ? '#fff solid' : '',
                  })}  to='/repos' >Repos <FaGitAlt /></NavLink>
            }
        </nav>
    )
}

// style={({ isActive }) => ({ borderBottom: isActive ? 'var(--light-pink)' : '' })}

export default Navbar
