import React, { Component } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Subject from '../../components/Subject'
import List from '../../components/List'
import Tab from '../../components/Tab'



export default class Home extends Component {
    
    render() {
        return (
            <div className="home">
                {/* 头部导航 */}
                <Header />
                {/* 轮播 */}
                <Banner />
                {/* 图标导航 */}
                <Subject />
                {/* 列表 */}
                <List />
                {/* Tab栏 */}
                <Tab />
            </div>
        )
    }
}
