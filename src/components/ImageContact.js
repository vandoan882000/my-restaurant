import React, { Component } from 'react'

export default class ImageContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1,
            likeImg: false,
        }
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onclickLike = this.onclickLike.bind(this);
    }
    onMouseEnter() {
        this.setState({opacity: 0.5});
    }
    onMouseLeave() {
        this.setState({opacity: 1});
    }
    onclickLike(){
        this.setState({likeImg: !this.state.likeImg});
    }
    render() {
        const {src} = this.props;
        return (
            <div onClick={this.onclickLike}>
                <i className={this.state.likeImg?"fas fa-heart":"far fa-heart" } style={{opacity:1}} ></i>
                <img src={src} alt='image1' onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} style={{opacity: this.state.opacity}} />
            </div>
        )
    }
}
