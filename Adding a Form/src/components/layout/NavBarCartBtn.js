import './NavBarCartBtn.css'
import CartIcon from '../Cart/CartIcon'

const NavBarCartBtn=()=>{
    return (
        <button className='button'>
            <span className='icon'>
            <CartIcon></CartIcon>
            </span>
            <span>
             Cart
            </span>
            <span className='badge'>
               3
            </span>
        </button>
    )
}

export default NavBarCartBtn