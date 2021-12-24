import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          scrollt: 0,
          mobileScreen: false,
        }
        this.setMobileScreen = this.setMobileScreen.bind(this);
    }
    showButton = () => {
        if (window.innerWidth <= 1300) {
            this.setState({mobileScreen:false});
        } else {
            this.setState({mobileScreen:true});
        }
    };
    componentDidMount() {
        window.addEventListener('resize',this.showButton);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.showButton);
    }
    
    scrollToReservation = () => {
        this.setState({mobileScreen:!this.state.mobileScreen});
        window.scrollTo({
            top: 2165,
            behavior: 'smooth'
        });
    }
    scrollToAbout = () => {
        this.setState({mobileScreen:!this.state.mobileScreen});
        window.scrollTo({
            top: 1305,
            behavior: 'smooth'
          });
    }
    scrollToContact = () => {
        this.setState({mobileScreen:!this.state.mobileScreen});
        window.scrollTo({
            top: 2766,
            behavior: 'smooth'
        });
    }
    setMobileScreen(){
        this.setState({mobileScreen:!this.state.mobileScreen});
    }
    render() {
        
        return (
            <>
                <nav className="navbar">
                    
                    <div className="container">
                        <Link className="navbar-logo" to="/my-restaurant/">
                             <img src='./assets/logoPage.png' alt="logo" />MY <br/>RESTAURANT
                        </Link>
                        <div className={this.state.mobileScreen?"container-nav":"container-nav-hidden"}>
                            <div className="nav-div">
                                <ul className="nav-menu">
                                    <li className="nav-item" onClick={this.scrollToAbout}>
                                        <Link className="nav-link" to="/my-restaurant/" onClick={this.scrollToAbout}>About</Link>
                                    </li>
                                    <li className="nav-item" onClick={this.setMobileScreen} >
                                        <Link className="nav-link" to="/my-restaurant/menu">Menu</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/my-restaurant/" onClick={this.scrollToContact}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="nav-button">
                                <Link className="nav-link" to="/my-restaurant/" onClick={this.scrollToReservation}>
                                    <button className="btn-reservations" onClick={this.scrollToReservation}>Reservations </button>
                                </Link>
                                
                                <Link className="nav-link" to="/my-restaurant/order" onClick={this.setMobileScreen}>
                                    <button className="btn-order">Order Online</button>
                                </Link>
                                
                            </div>
                           
                        </div>
                        <i className={this.state.mobileScreen?"fas fa-times":"fas fa-bars"} onClick={this.setMobileScreen}></i>
                        
                       
                    </div>
                </nav>
            </>
        )
    }
}


export default Navbar
