import { Fragment } from 'react'
import './MealsItem.css'

const MealsItem = ({meals})=>{
    console.log("jbskjbkj")
    return(
        
            <li className='meal'>
                <div>
                <h3>{meals.name}</h3>
                <div className='description'>{meals.description}</div>
                <div className='price'>{meals.price}</div>
                </div>
                <form className='form'>
                    <div className='input'>
                        <label>Amount</label>
                        <input type="number" min='1' max='5' defaultValue='1'></input>
                    </div>
                    <button>Add</button>
                </form>
                
            </li>
            
       
       
        
    )
}

export default MealsItem