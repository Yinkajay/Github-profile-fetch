import React from 'react'
import { NavLink } from 'react-router-dom'
import StateContext from '../store/state-context'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <StateContext.Consumer>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/repos'>Repos</NavLink>
            </nav>
        </StateContext.Consumer>
    )
}

export default Navbar
