import React from 'react'
import "../Css/ImageCard.css"

const ImageCard = (props) => {
    return (
        // <div className = "recipie-div-universal">
        <div className = "recipes-details">
            <img className = "recipe-image" src = {props.recipeimage} alt = "not found"></img>
            <span className = "recipie-title">{props.Recipetitle}</span>        
        </div>
        // </div>
    )
}

export default ImageCard
