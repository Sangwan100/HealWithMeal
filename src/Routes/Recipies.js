import React from 'react'
import HeaderWithNavbar from "../components/HeaderWithNavbar"
import DropDownAnimation from "../components/DropDownAnimation"
import "../Css/recipie.css"
import Dosa from "../FoodImages/dosa.jpg"
// import VirtualBook from "../FoodImages/book.jpg"
import Footer from "../Footer/Footer"
// import Header from '../Header/Header'
// import HeaderNavbar from "../components/HeaderNavbar"


const Recipies = () => {
    return (
        <div className="header">
            <HeaderWithNavbar />
            <div className="virtual-book-heading-div">
                <h1>Try our Virtual Book concept</h1>
                <p className="virtual-book-div-para">"We have designed a new format of presenting Recipies in a virtual book format which is wasy to read and look attractive and simple 😃"</p>
            </div>
            <div className="dropDown dropdown-recipie-js">
                <DropDownAnimation />
            </div>

            <div className="virtual-book-section">
                <h1 className="virtual-book-section-heading">Recipies Virtual Cook-Book</h1>

                <div className="virtual-book-image"  >

                    <div className="recipie-details-div1">

                        <h1 className="recipie-title">Masala Dosa Recipie</h1>

                        <div className="recipie-description">
                            <p>* Dosa is basically a delicious south indian dish which is very easy to make with only some of the ingredients.</p>
                        </div>
                        <div className="dosa-div">
                            <img className="dosa-image" src={Dosa} alt="not found"></img>
                        </div>

                        <div>
                            <h3 style={{ marginLeft: 10, color: "darkred", letterSpacing: 5 }}>Ingredients Required :- </h3>

                            <ul style={{ marginLeft: 100 }}>
                                <li>lroem kasdk dasd</li>
                                <li>lroem kasdk dasd</li>
                                <li>lroem kasdk dasd</li>
                                <li>lroem kasdk dasd</li>
                                <li>lroem kasdk dasd</li>
                                <li>lroem kasdk dasd</li>
                            </ul>
                        </div>

                    </div>

                    <div className="recipie-details-div2">

                        <h1 className="recipie-title">Process of Making</h1>

                        <ol style={{ textAlign: "justify", lineHeight: 2, marginLeft: 10 }}>
                            <li >Dosa is really a wonderful dishes which can be made in less.</li>
                            <li >Dosa is really a wonderful dishes which can be made in less.</li>
                            <li >Dosa is really a wonderful dishes which can be made in less.</li>
                            <li >Dosa is really a wonderful dishes which can be made in less.</li>
                            <li >Dosa is really a wonderful dishes which can be made in less.</li>
                            <li >Dosa is really a wonderful dishes which can be made in less.</li>
                            <li >Dosa is really a wonderful dishes which can be made in less.</li>
                        </ol>
                    </div>

                </div>


            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Recipies
