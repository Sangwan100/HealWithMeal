import React from 'react'
import LetsGoAnnimation from "../../components/LetsGoAnnimation"
import "../../Css/header.css"

const HeaderDiv2 = () => {
    return (
        <div className="div-2">
        <h3>Get Started with us and enjoy the ride of Foodies...</h3>
        <button className="lets-go-button"
         >  
        <div className = "animation-div">
       <span style = {{marginTop:10 , color: "black", fontWeight:"bold"}}> Lets Go </span>
        <LetsGoAnnimation />
         </div>
        </button>
        
    </div>
    )
}

export default HeaderDiv2
