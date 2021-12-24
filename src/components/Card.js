import React, { Component } from 'react'
import '../App.css';
export default class Card extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        const {onCloseCard,stateCard,productCurrent,quantity,onInc,onDec,addToCart} = this.props;
        return (
            <div className={stateCard?"product-card":"card-hidden"}>
                <span className="close" onClick={onCloseCard}>X</span>
                <img src={productCurrent.image} alt="Product 1" ></img>
                <h3>{productCurrent.name}</h3>
                <span>${productCurrent.cost}</span>
                <div>
                    <span>Quantity </span>
                    <span className="quantity-cart" onClick={onDec}>-</span>
                    <span>{quantity}</span>
                    <span className="quantity-cart" onClick={onInc}>+</span>
                </div>
                
                <button onClick={addToCart}>ADD TO MY ORDER</button>

            </div>
        )
    }
}
