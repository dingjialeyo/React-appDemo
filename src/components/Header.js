import React, { Component } from 'react'
import { NavBar, SearchBar } from 'antd-mobile';
import Img from '../components/Img'
import '../assets/css/header.css'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavBar
                    leftContent={[
                        <Img src="logo192.png" height="30" />
                    ]}
                    // mode="dark"  背景颜色
                    // icon={<Icon type="left" />}
                    // onLeftClick={() => console.log('onLeftClick')}  左边区域
                    // rightContent={[
                    // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    // <Icon key="1" type="ellipsis" />,
                    // ]}     右边区域
                    ><SearchBar key="1" placeholder="Search" maxLength={8}></SearchBar></NavBar>
            </div>
        )
    }
}
