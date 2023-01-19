import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p> Clothing store, located in San Cristobal tachira state, the best prices for retail and wholesale.</p>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <div className="github">
            <GitHubIcon />
            <a href="https://github.com/CarlosD95"
            target='blank'
            rel='noreferrer'>GitHub/CarlosD95</a>
          </div>
          <div className="phone">
            <WhatsAppIcon />
            <p>+58 416-1823461</p>
          </div>
          <div className="email">
            <EmailIcon />
            <p>carlosdaserrano4@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="bottom">
          <div className="left">
            <span className="logo">GlobalStore</span>
            <span className="copyright">
              <CopyrightIcon /> Copyright All Rights Reserved 2023-2024
            </span>
          </div>
          <div className="right">
            <img src='/img/payment.png' alt='Image Pays' />
          </div>
      </div>
    </div>
  )
}

export default Footer