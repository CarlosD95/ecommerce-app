import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
            <span>{item?.attributes.isNew && <span>New Season</span> }</span>
            <img 
            src=
            {
              import.meta.env.VITE_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url
            } 
            alt="" className="mainImg" />
            <img 
            src=
            {
              import.meta.env.VITE_UPLOAD_URL + item?.attributes?.img2?.data?.attributes?.url
            } 
            alt="" className="secondImg" />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
            <h3>${item?.attributes.oldPrice || item?.attributes.price + 20}</h3>
            <h3 className='newPrice'>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  
  )
}

export default Card