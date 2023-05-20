import React, { useReducer} from "react";
import CartContext from "./CartContext";


const initialState={
    items:[],
    totalAmount:0
}
const reducer=(state,action)=>{
    let updateItems;
    if (action.type==='ADD'){
         console.log(action)
        state.totalAmount=state.totalAmount + action.value.price*action.value.amount;

        const itemExistidx=state.items.findIndex((val)=>val.id===action.value.id)
        

        const itemExist = state.items[itemExistidx];
         
         
        if (itemExist){
            let updateItem={
                ...itemExist, amount:parseInt(itemExist.amount)+parseInt(action.value.amount)
            }
            updateItems=[...state.items]
            updateItems[itemExistidx]=updateItem;
        }
        else {
            updateItems=[...state.items,action.value]
        }
    }

    if (action.type==='remove'){
        state.totalAmount=state.totalAmount - action.value.price*action.value.amount;
        updateItems=state.items.filter((val)=>val.id!==action.id)
            
        

    }

    return {
        items:updateItems,
        totalAmount:state.totalAmount

    }

}

const CartProvider=(props)=>{
    const [cartState, dispatchItems]=useReducer(reducer,initialState)

    const addItemsHandler = (item)=>{
        dispatchItems({type:'ADD',value:item})
    }
    const removeItemsHandler = (id)=>{
        dispatchItems({type:'REMOVE',value:id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemsHandler,
        removeItem: removeItemsHandler,
      };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider;