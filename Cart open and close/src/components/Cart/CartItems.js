import React, { Fragment } from "react"
import  ReactDOM from "react-dom";
import './CartItems.css'

const BackDrop =()=>{
    return (
        <div className="backdrop"></div>
    )
}
const CartList =({onCartRemove})=>{
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
                <button onClick={onCartRemove}>Close</button>
                <button>Order</button>
            </div>
        </div>
    )
}
const CartItems = ({onCartRemove})=>{
   
    return(
         <Fragment>
            {ReactDOM.createPortal(<BackDrop></BackDrop>,document.getElementById('backdrop-root'))},
            {ReactDOM.createPortal(<CartList onCartRemove={onCartRemove}></CartList>,document.getElementById('cart-items-root'))}
         </Fragment>
            
    )     

}

export default CartItems