
import './MealsItem.css'
import CartContext from '../Store/CartContext'
import { useContext,useState,useRef } from 'react'

const MealsItem = ({meals})=>{

    const {addItem}= useContext(CartContext)
    const enteredAmount = useRef();



   const addCartItem=(event)=>{
    event.preventDefault()
    const cartItem={...meals,amount:parseInt(enteredAmount.current.value)}
   
    addItem(cartItem)
   }
    return(
        
            <li className='meal'>
                <div>
                <h3>{meals.name}</h3>
                <div className='description'>{meals.description}</div>
                <div className='price'>{meals.price}</div>
                </div>
                <form className='form' onSubmit={addCartItem}>
                    <div className='input'>
                        <label>Amount</label>
                        <input ref={enteredAmount}type="number" min='1' max='5' defaultValue='1' ></input>
                    </div>
                    <button type='submit'>Add</button>
                </form>
                
            </li>
            
       
       
        
    )
}

export default MealsItem