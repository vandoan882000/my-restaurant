import React from 'react';
import '../../App.css';
import Product from '../Product'
import Card from '../Card'
import {Link} from 'react-router-dom'
class Order extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        nameType: 'Soups',
        isDropType: true,
        productsSoup: [
            {name: 'Pork belly yakisoba' , image:'product9.jpg',cost:12},
            {name: 'Veggie soup' , image:'product10.jpg',cost:16},
            {name: 'Beef noodle soup' , image:'product11.jpg',cost:14},
            {name: 'Chicken soup' , image:'product12.jpg',cost:17},
        ],
        productsDumpling: [
            {name: 'Fried pork dumplings' , image:'product5.jpg',cost:11},
            {name: 'Hot & spicy wonton' , image:'product6.jpg',cost:13},
            {name: 'Chicken dumplings' , image:'product7.jpg',cost:12},
            {name: 'Veggie dumplings' , image:'product8.jpg',cost:13},
            ],
        productsNoodle: [
            {name: 'Bangkok noodles, extra spicy' , image:'product1.jpg',cost:17},
            {name: 'Sumo noodles' , image:'product2.jpg',cost:15},
            {name: 'Ginger scallion noodles' , image:'product3.jpg',cost:16},
            {name: 'Veggie noodles' , image:'product4.jpg',cost:16},
        ],
        products: [
            {name: 'Pork belly yakisoba' , image:'product9.jpg',cost:12},
            {name: 'Veggie soup' , image:'product10.jpg',cost:16},
            {name: 'Beef noodle soup' , image:'product11.jpg',cost:14},
            {name: 'Chicken soup' , image:'product12.jpg',cost:17},
        ],
        productCard:false,
        currentProduct:{name: 'Order' , image:'product1.jpg',cost:17},
        quantity:1,
        carts:[],
        subtotal:0,

    }
    this.getProductSoup = this.getProductSoup.bind(this);
    this.getProductDumpling = this.getProductDumpling.bind(this);
    this.getProductNoodle = this.getProductNoodle.bind(this);
    this.onCloseCard = this.onCloseCard.bind(this);
    this.onIncQuantity = this.onIncQuantity.bind(this);
    this.onDecQuantity = this.onDecQuantity.bind(this);
    this.clickDropDownType = this.clickDropDownType.bind(this);


}
clickDropDownType(){
    this.setState({isDropType:!this.state.isDropType});
}
onCloseCard(){
    this.setState({productCard:!this.state.productCard,quantity:1});
}
onIncQuantity(){
    this.setState({quantity:this.state.quantity+1});
}
onDecQuantity(){
    if(this.state.quantity>0)
    {
        this.setState({quantity:this.state.quantity-1});
    }
    
}
getCurrentProduct(product){
    this.setState({productCard:!this.state.productCard,currentProduct:product,quantity:1});
}
getProductSoup(){
    this.setState({nameType:'Soups',products:[...this.state.productsSoup]})
}
getProductDumpling(){
    this.setState({nameType:'Dumplings',products:[...this.state.productsDumpling]})
}
 getProductNoodle(){
    this.setState({nameType:'Noodles',products:[...this.state.productsNoodle]})
}
addToCart(product){
    this.setState({carts:this.state.carts.concat({...product,quantity:this.state.quantity}),subtotal:this.state.subtotal+product.cost*this.state.quantity});
}
  
  render() {
      
      return (
          <div className="orderdiv">
              <div className="orderdiv1">
                  <div><Link to="/login"><span className="order-menu-type" onClick={this.onCloseCard}><i className="fas fa-user-circle"></i>&nbsp;&nbsp;Hi,Guest</span></Link><br /></div>
                  <hr/>
                  <div onClick={this.clickDropDownType} >
                    <span className="order-menu-type" onClick={this.clickDropDownType}>Our Way, Our Menu </span>{this.state.isDropType?<i className="fas fa-chevron-down"></i>:<i className="fas fa-chevron-up"></i>}<hr/>
                  </div>
                  {this.state.isDropType?
                  <ul>
                      <li className="order-menu-type" onClick={this.getProductSoup}>Soups</li>
                      <li className="order-menu-type" onClick={this.getProductDumpling}>Dumplings</li>
                      <li className="order-menu-type" onClick={this.getProductNoodle}>Noodles</li>
                  </ul>
                  :<></>}
              </div>
              <div className="orderdiv2">
                    <span className="orderdiv2-head"> Our Way, Our Menu </span>
                    <p className="orderdiv2-head1">Small menu, endless flavours</p>
                    
                    <hr/>
                    <span className="orderdiv2-head">{this.state.nameType}</span>
                    {this.state.products.map((product,id) =><Product key={id} product={product} onClick={e => this.getCurrentProduct(product)} />)}
                    <Card stateCard={this.state.productCard} onCloseCard={this.onCloseCard} productCurrent={this.state.currentProduct} onInc={this.onIncQuantity} onDec={this.onDecQuantity} quantity={this.state.quantity} addToCart={e => this.addToCart(this.state.currentProduct)}></Card>
              </div>
              <div className="orderdiv3">
                  <p>My order ({this.state.carts.length} item)</p><hr/>
                  <div className="cart-div">
                    {this.state.carts.length>0?this.state.carts.map((c, i) =><p key={i} >{c.quantity} x {c.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${c.quantity*c.cost} </p>):<i className="fas fa-shopping-cart"></i>}
                    
                    {this.state.carts.length===0?<p>Your cart is empty<br/>Browse our menu and start adding items to your order</p>:""}
                    
                  </div>
                  <hr/>
                  
                  <p>Subtotal&nbsp;&nbsp;&nbsp;&nbsp; ${this.state.subtotal}</p><hr/>
                  <Link to="/login">
                    <button className="btn-order">ORDER NOW</button>
                  </Link>
                  
              </div>
          </div>
          
      );
  }
}



export default Order;
