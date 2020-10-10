import React, { Component } from 'react'

import '../css/login.css'

// 导入img 组件
import Img from '../../components/Img'
import FormInput from '../../components/FormInput'
import FormBtn from '../../components/FormBtn'

import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'


export default class Login extends Component {
    render() {
        return (
            <div className="login-page">
                {/* logo */}
                <Img src="logo192.png" />
                {/* 表单 */}
                <form action="" className="login-form">
                    {/* userInput */}
                    <FormInput type="text" icon="icon-shouji" value="用户名" />
                    {/* pwdInput */}
                    <FormInput type="password" icon="icon-mima" value="密码" />
                    {/* 登录按钮 */}
                    <FormBtn>登录</FormBtn>
                </form>
            </div>
        )
    }
}
