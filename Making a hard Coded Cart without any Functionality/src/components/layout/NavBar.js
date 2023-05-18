import React, { useState } from "react";


import './NavBar.css'
import mealsImage from '../../assets/meals.jpg'
import NavBarCartBtn from "./NavBarCartBtn";
import CartItems from "../Cart/CartItems";

const NavBar =()=>{
     const [cart, setCart]=useState(false)

    const cartButtonHandler=()=>{
        setCart(true)
    }

    return(
        <nav>
            {cart && <CartItems></CartItems>}
            <header className="header" >
                <h2>ReactMeals</h2>
                <NavBarCartBtn onClickBtn={cartButtonHandler}></NavBarCartBtn>
            </header>
            <div className="main-image">
            <img src={mealsImage} alt="meals-Image"></img>
            </div>
            
        </nav>
    )

}

export default NavBar