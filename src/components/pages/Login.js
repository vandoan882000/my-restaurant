import React, { Component } from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'
export default class Login extends Component {
    render() {
        return (
            <div className="logincontainer">
                <h2>Đăng nhập</h2>
                <input  type="email"  placeholder='Tài khoản' title="Username" ></input>
                <input  type="password" placeholder="Mật khẩu" title="Password"></input>
                <button type="submit">Đăng nhập</button>
                Bạn chưa có tài khoản ?
                <Link to='/register'>
                  đăng kí
                </Link>
            </div>
        )
    }
}
