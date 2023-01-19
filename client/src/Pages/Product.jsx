import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartReducer'; 
import { useDispatch } from 'react-redux';

const Product = () => {

  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const {data, loading, error} = useFetch(
    `/products/${id}?populate=*`
  );
  
  return (
    <div className='product'>
      {
        loading ? ("Loading...") :(
      <>
      <div className="left">
        <div className="images">
          <img src={import.meta.env.VITE_UPLOAD_URL +data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e)=> setSelectedImg("img")}/>
          <img src={import.meta.env.VITE_UPLOAD_URL +data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e)=> setSelectedImg("img2")}/>
        </div>
        <div className="mainImg">
          <img src={import.meta.env.VITE_UPLOAD_URL +data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>${data?.attributes?.price}</span>
        <p>{data?.attributes?.description}</p>
        <div className="quantity">
          <button onClick={() => setQuantity((e) => (e === 1 ? 1 : e - 1))}>-</button>
          {quantity}
          <button onClick={()=> setQuantity((e) => e + 1)}>+</button>
        </div>
        <button className="add" onClick={() => dispatch(addToCart({
          id: data.id,
          title: data.attributes.title,
          description: data.attributes.description,
          price: data.attributes.price,
          img: data.attributes.img.data.attributes.url, 
          quantity,
        })
        )
        }
        >
          <AddShoppingCartIcon /> Add to Cart
        </button>
        <div className="link">
          <div className="item">
            <FavoriteIcon /> Add to wish list
          </div>
          <div className="item">
            <BalanceIcon /> Add to compare
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
      </>
        )
      }
    </div>
  )
}

export default Product