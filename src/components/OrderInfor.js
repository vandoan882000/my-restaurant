import React from 'react';
import './OrderInfor.css';
import {Link} from 'react-router-dom'
import 'animate.css';
class OrderInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          scrollOrderInfor:false,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrolltoOrderInfor);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrolltoOrderInfor);
    }
    scrolltoOrderInfor=()=> {
        if (window.scrollY > 300 ) {
            this.setState({
                scrollOrderInfor: true
            });
        }
        //console.log(window.scrollY);
    }
    render() {
        
        return (
            <div id="order-container" >
                <div className="order-item">
                    <img className={this.state.scrollOrderInfor?"animate__animated animate__fadeIn":""} src="./soup.png" alt="anh"></img>
                    <h1 className={this.state.scrollOrderInfor?"animate__animated animate__fadeIn":""}>Soups</h1>
                    <p className={this.state.scrollOrderInfor?"animate__animated animate__fadeIn":""}>Our bowls of endless<br/> flavors from the east</p>
                    <Link to="/my-restaurant/order">
                        <button className={this.state.scrollOrderInfor?"btn-reservations animate__animated animate__fadeIn":""} >Order Now</button>
                    </Link>
                </div>
                <div className="order-item">
                    <img className={this.state.scrollOrderInfor?"animate__animated animate__fadeIn":""} src="./noodle.png" alt="anh"></img>
                    <h1 className={this.state.scrollOrderInfor?"animate__animated animate__fadeIn":""}>Noodles</h1>
                    <p className={this.state.scrollOrderInfor?"animate__animated animate__fadeIn":""}>The way noodles were<br/> meant to be</p>
                    <Link to="/my-restaurant/order">
                        <button className={this.state.scrollOrderInfor?"btn-reservations animate__animated animate__fadeIn":""}>Order Now</button>
                    </Link>
                </div>
                <div className="order-item">
                    <img className={this.state.scrollOrderInfor?"animate__animated animate__fadeIn":""} src="./dumpling.png" alt="anh"></img>
                    <h1 className={this.state.scrollOrderInfor?"animate__animated animate__fadeIn":""}>Dumplings</h1>
                    <p className={this.state.scrollOrderInfor?"animate__animated animate__fadeIn":""}>It’s all about the filling.<br/> And the dough</p>
                    <Link to="/my-restaurant/order">
                        <button className={this.state.scrollOrderInfor?"btn-reservations animate__animated animate__fadeIn":""}>Order Now</button>
                    </Link>
                </div>
            </div>
            
        )
    }
}

export default OrderInfor;
