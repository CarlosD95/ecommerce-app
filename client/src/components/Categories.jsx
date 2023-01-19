import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src='https://images.pexels.com/photos/5264900/pexels-photo-5264900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                <button> 
                    <Link className='link' to='/products/1'>Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src='https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                <button> 
                    <Link className='link' to='/products/2'>Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src='https://images.pexels.com/photos/14541208/pexels-photo-14541208.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                <button> 
                    <Link className='link' to='/products/3'>New Season</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    <button> 
                        <Link className='link' to='/products/4'>Men</Link>
                    </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src='https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                        <button> 
                            <Link className='link' to='/products/5'>Accesories</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                <button> 
                    <Link className='link' to='/products/6'>Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories