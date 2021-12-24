import React from 'react';
import './AboutInfor.css'
import 'animate.css';
import {Link} from 'react-router-dom'
import ImageContact from './ImageContact'
class AboutInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          scrollA: false,
          scrollOrder:false,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrolltoAbout);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrolltoAbout);
    }
    scrolltoAbout=()=> {
        if (window.scrollY > 900 ) {
            this.setState({scrollA: true,
                ...this.state.scrollOrder
            });
        }
        if (window.scrollY > 1700 ) {
            this.setState({...this.state.scrollA,scrollOrder:true});
        }
        //console.log(window.scrollY);
    }
    render() {
        
        return (
            <div>
                <div className="about-container">
                    <div className={this.state.scrollA?"animate__animated animate__fadeInUp":""}>
                        <h1>Fresh.<br/>Authentic.<br/>Simple.</h1>
                        <h2>We’re bringing flavors from the east - to your plate.<br /></h2>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me.<br />
                            It’s easy. Just click “Edit Text” or double click me to add your <br />
                            own content and make changes to the font. Feel free to drag and <br />
                            drop me anywhere you like on your page. I’m a great place for you <br />
                            to tell a story and let your users know a little more about you.<br />
                            This is a great space to write long text about your company and <br />
                            your services. You can use this space to go into a little more <br />
                            detail about your company. 
                        </p>
                    </div> 
                </div>
                <div className="book">
                    <div className={this.state.scrollOrder?"animate__animated animate__fadeIn order-online-container":"order-online-container"}>
                        <img src="img-restaurant1.png" alt="book online"></img>
                        <p>Order Online</p>
                        <h1>Our Noodles Are <br/>Coming Your Way</h1>
                        <Link to="/order">
                            <button className="btn-reservations">Order Now</button>
                        </Link>
                    </div>
                    <div className="reservation-online-container">
                       <p>Reservation</p>
                       <h1>You Can Sit With Us!</h1>
                       <input type="date" ></input>
                       <input type="time" ></input>
                       <select>
                           <option value="2 người">2 người</option>
                           <option value="3 người">3 người</option>
                           <option value="4 người">4 người</option>
                       </select>
                       <button className="btn-booknow"onClick={()=>{console.log("book");}}>Book Now</button>
                    </div>
                </div>
                <div className="contact-container">
                    <h2>Follow<br/>@thenoodleway</h2>
                    <div>
                        <ImageContact src='mon1.jpg'/>
                        <ImageContact src='mon2.jpg'/>
                        <ImageContact src='mon3.jpg'/>
                        <ImageContact src='mon4.jpg'/>
                        <ImageContact src='mon5.jpg'/>
                    </div>
                    
                </div>
            </div>
            
        );
    }
}



export default AboutInfor;
