import React, { Component } from 'react'

import '../css/login.css'

// 导入img 组件
import Img from '../../components/Img'
import FormInput from '../../components/FormInput'
import FormBtn from '../../components/FormBtn'

import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import {Link} from 'react-router'
import { Toast } from 'antd-mobile';
// 引入axios 
import axios from 'axios'
// 导入跳转模块
import { createBrowserHistory } from "history";
const history = createBrowserHistory();


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            BtnFlag: false,
            username : "",
            password : ""
        }
        this.handleChangeUname = this.handleChangeUname.bind(this)
        this.handleChangePwd = this.handleChangePwd.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChangeUname(e) {
        console.log(e.target.value) // 获取值
        // 修改值
        this.setState({
            username: e.target.value
        })
    }
    handleChangePwd(e) {
        console.log(e.target.value) // 获取值
        // 修改值
        this.setState({
            password: e.target.value
        })
    }
    async handleClick() {
        if (this.state.username = "djl" && this.state.password === "123456") {
            console.log('ok')
            
            const res = await axios.get('/loginData.json')
            console.log(res.data.data)
            if (res.data.data.status !== 200 ) {
                Toast.fail('账号密码错误！',2)
            }
            // 实习跳转
            history.push("/#/home")
            history.go()
            // 2. 实现跳转
            // this.props.router.push("/#/login")
        }
        else {
            Toast.fail('账号密码错误！',2)
        }
    }
    render() {
        return (
            <div className="login-page">
                {/* logo */}
                <Img src="logo192.png" />
                {/* 表单 */}
                <form action="" className="login-form">
                    {/* userInput */}
                    <FormInput type="text" icon="icon-shouji" placeholder="用户名" value={this.state.username} onChange={this.handleChangeUname} />
                    {/* pwdInput */}
                    <FormInput type="password" icon="icon-mima" placeholder="密码" value={this.state.password} onChange={this.handleChangePwd} />
                    {/* 登录按钮 */}
                    <FormBtn submit={this.handleClick}>登录</FormBtn>
                </form>
            </div>
        )
    }
}
