import React from 'react';
import '../App.css';


class Product extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      }
  }
  
  render() {
      const { product,onClick} = this.props;
      return (
          <div className="product-div" onClick={onClick}>
              <img src={product.image} alt="Product1"></img>
              <span className="product-name">{product.name}</span><br/>
              <span className="product-cost">${product.cost}</span>
          </div>
          
      );
  }
}



export default Product;
