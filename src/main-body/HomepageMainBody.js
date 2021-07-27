import React from 'react'
import HomePageImageSlider from "../components/HomePageImageSlider"
import virtualBook from "../FoodImages/virtualBook.jpg"
import Photo from "../FoodImages/front-page-images/photo.jpg"
import TeaImage from "../FoodImages/front-page-images/tea image.jpg"
import Footer from '../Footer/Footer'
// import ImageSlider from "../components/ImageSlider"


const HomepageMainBody = () => {
    return (
        <div className="homepage-body">
            <HomePageImageSlider />
            <div className="explore-more-div">

                <h1 className="expore-more-heading">Explore More</h1>

                <div className="explore-more-details">

                    <img className="virtualBook-image" src={virtualBook} alt="not found"></img>
                    <p className="explore-more-para">

                    <ul>

                    <li>Explore the world of Foodies with our virtual Cook-Book Concept.</li>
                     <li> with over 100+ food recipies made in such a way that it will be easy to make and implement.</li>

                     <li>HealWithMeal makes it easier for you to make dishes in a short period of time with an ease.</li>
                    </ul>

                    </p>
                </div>
            </div>
            <div className = "about-us">
            <h1 className = "about-us-heading">About Us</h1>
            <div className = "about-us-details">
            <img className = "founder-image" src = {Photo} alt = "Not found"></img>
            <p className = "about-us-para">
            Hello Foodies, This is Shubham Sangwan and Shivani Sangwan Founder-CEO of HealWithMeal welcomes you all in<strong style = {{color: "orange"}}> HealWithMeal.com</strong> . In the mean time of Corona-period.
                    Try to stay healthy and safe as well as keep your family and surrounding happy with the taste of
                    these beautiful dishes. Enjoy The Meal.....
            </p>
            <img className = "about-us-tea-image" src = {TeaImage} alt = "Not found"></img>
            </div>

            <div>
            <Footer/>
            </div>
            

            </div>
        </div>
    )
}

export default HomepageMainBody
