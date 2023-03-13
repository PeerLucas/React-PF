import React from "react";
import CartWidget from "../CartWidget"
import { NavLink } from "react-router-dom";
import './navBar.css'

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <NavLink className="nav_link" to='/'> PLAY SOUND</NavLink>
                </div>

                <ul className="nav_list">

                    <li> <NavLink className="nav_link" to='/categoria/artistas'>Artistas </NavLink> </li>
                    <li> <NavLink className="nav_link" to='/categoria/albums'>Albums </NavLink> </li>
                    <li> <NavLink className="nav_link" to='cart'><CartWidget/> </NavLink> </li>

                </ul>
            </nav>
        </div>
    );
}

export default NavBar;