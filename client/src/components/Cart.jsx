import React from 'react';
import './Cart.scss';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/cartReducer';
import { resetCart } from '../redux/cartReducer';

const Cart = () => {

  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });

    return total.toFixed(2);
  }

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {products?.map((item) =>  (
            <div className='item' key={item.id}>
                <img src={import.meta.env.VITE_UPLOAD_URL + item.img} alt='' />
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.description?.substring(0,50)}</p>
                    <div className='price'>
                        {item.quantity} x ${item.price}
                    </div>
                </div>
            <RemoveCircleOutlineIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>Subtotal</span>
            <span>${totalPrice()}</span>
        </div>
        <button>Proceed to checkout</button>
        <span className="reset" onClick={() => dispatch(resetCart())} >Reset cart</span>
    </div>
  )
}

export default Cart