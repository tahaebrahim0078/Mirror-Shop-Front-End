import React from 'react';
import './offiers.css'
import exclusive_image from '../assets/exclusive_image.png'
const Offiers = () => {
    return (
        <div className='offers'>
            
            <div className="offers-left">
                <h1>ExClusive</h1>
                <h1>Offiers for you</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
<div className="offers-right">
    <img src={exclusive_image} alt="" />
</div>
        </div>
    );
}

export default Offiers;
