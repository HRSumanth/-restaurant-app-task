import React, { Fragment } from "react"
import  ReactDOM from "react-dom";
import './CartItems.css'

const BackDrop =()=>{
    return (
        <div className="backdrop"></div>
    )
}
const CartList =()=>{
    return (
        <div className="modal">
            <div >
                <p>Sushi</p>
            </div>
            <div className="total">
                <p>Total</p>
                <p>35.62</p>
            </div>
            <div>
                <button>Close</button>
                <button>Order</button>
            </div>
        </div>
    )
}
const CartItems = ()=>{
   
    return(
         <Fragment>
            {ReactDOM.createPortal(<BackDrop></BackDrop>,document.getElementById('backdrop-root'))},
            {ReactDOM.createPortal(<CartList></CartList>,document.getElementById('cart-items-root'))}
         </Fragment>
            
    )     

}

export default CartItems