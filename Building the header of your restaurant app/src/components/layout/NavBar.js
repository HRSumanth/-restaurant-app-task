import React from "react";

import './NavBar.css'
import mealsImage from '../../assets/meals.jpg'
import NavBarCartBtn from "./NavBarCartBtn";

const NavBar =()=>{

    return(
        <nav>
            <header className="header" >
                <h2>ReactMeals</h2>
                <NavBarCartBtn></NavBarCartBtn>
            </header>
            <div className="main-image">
            <img src={mealsImage} alt="meals-Image"></img>
            </div>
            
        </nav>
    )

}

export default NavBar