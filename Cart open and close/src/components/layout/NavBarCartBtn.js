import './NavBarCartBtn.css'
import CartIcon from '../Cart/CartIcon'

const NavBarCartBtn=({onClickBtn})=>{
    return (
        <button className='button' onClick={onClickBtn}>
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