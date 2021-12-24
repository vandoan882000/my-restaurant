import React, { Component } from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'
export default class Register extends Component {
    render() {
        return (
            <div className="logincontainer">
                <h2>Đăng kí</h2>
                <input  type="email"  placeholder='Tài khoản' title="Username" ></input>
                <input  type="password" placeholder="Mật khẩu" title="Password"></input>
                <input  type="password" placeholder="Mật khẩu nhập lại" title="Password"></input>
                <Link to='/login'>
                    <button type="submit">Đăng kí</button>
                </Link>
                
                
            </div>
        )
    }
}
