import React from 'react'
import "../Css/style.css"
import DropDownAnimation from "../components/DropDownAnimation"
import HeaderNavbar from "../components/HeaderNavbar"
import HeaderDiv1 from './HeaderComponents/HeaderDiv1'
import HeaderDiv2 from './HeaderComponents/HeaderDiv2'


const Header = () => {
    return (
        <header className="header">
            <HeaderNavbar />
            <HeaderDiv1 />

            <HeaderDiv2 />
            <div className="dropDown">
                <DropDownAnimation />
            </div>
        </header>
    )
}

export default Header
