import React from 'react';
import './Banner.css';
import {Link} from 'react-router-dom'
class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <h1>The Real Deal </h1>
                <h1>On Asian Food</h1>
                <p>The noodle way serves authentic asian food</p>
                <Link to="/my-restaurant/order">
                    <button>Order Now</button>
                </Link>
                
            </div>
        );
    }
}

export default Banner;
