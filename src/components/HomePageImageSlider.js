import React from 'react'
import ImageSlider from "../components/ImageSlider"

const HomePageImageSlider = () => {
    return (
        <div className="recipe-div">
            <h1 className = "receipe-div-heading">Recipies</h1>
            <div className = "Recipe-item-div">
           <ImageSlider/>
           </div>
        </div>
    )
}

export default HomePageImageSlider
