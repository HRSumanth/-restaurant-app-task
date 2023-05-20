import './cartEach.css'

const CartEach =({item})=>{

    return(
        <li className='cart-item'>
            <div>
            <h2>{item.name}</h2>
             <div className='cart-summary'>
                <span className='cart-price'>{item.price}</span>
                <span className='cart-amount'>x {item.amount}</span>
            </div>
            </div>
            <div className='cart-actions'>
                <button>-</button>
                <button>+</button>
            </div>
            <br></br>
        </li>
    )

}

export default CartEach