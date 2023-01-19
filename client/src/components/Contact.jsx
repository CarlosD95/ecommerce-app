import React from 'react';
import './Contact.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  return (
    <div className="contact">
        <h5>BE IN TOUCH WITH US:</h5>
        <div className="email">
            <input type='text' placeholder='Enter your email' />
            <button>Join us</button>  
        </div>
        <div className="icons">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
        </div>
    </div>
  )
}

export default Contact