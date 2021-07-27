import React from 'react'
import "../Css/header.css"
import Logo from '../components/Logo'

const HeaderNavbar = () => {
    return (
        <div className="logo-navbar-div">
        <Logo/>
            <div className="navbar-div">
                <ul className="navbar">
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">Recipies</a></li>
                    <li><a href="/#">Explore more</a></li>
                    <li><a href="/#">About us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderNavbar
