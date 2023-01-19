import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Navbar.scss';
import Cart from '../components/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src='/img/en.png' alt='english' />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className='link' to='/products/1'>Women</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/2'>Men</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/3'>Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to='/'>GLOBALSTORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to='/'>Homepage</Link>
          </div>
          <div className="item">
            <Link className='link' to='/'>About</Link>
          </div>
          <div className="item">
            <Link className='link' to='/'>Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to='/'>Stores</Link>
          </div>
          <div className="icons">
            <TravelExploreIcon />
            <AccountBoxIcon />
            <LoyaltyIcon />
            <div className="cartNav" onClick={() => setOpen(!open)}>
               <AddShoppingCartIcon />
               <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar