import './Meals.css'

import { Fragment } from 'react'

import Summary from './Summary'
import MealsList from './MealsList'

const Meals = ()=>{
  return (
    <Fragment>
        <Summary></Summary>
        <MealsList></MealsList>
    </Fragment>
    
  
  )
}

export default Meals