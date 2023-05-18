import { Fragment } from 'react'
import './MealsItem.css'

const MealsItem = ({meals})=>{
    console.log("jbskjbkj")
    return(
       <li className='meal'>
            <h3>{meals.name}</h3>
            <p className='description'>{meals.description}</p>
            <p className='price'>{meals.price}</p>
       </li>
        
    )
}

export default MealsItem