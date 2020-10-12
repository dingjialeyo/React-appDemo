import React, { Component } from 'react'
import Header from '../../components/Header'
import Listview from '../../components/ListViews'

export default class ListView extends Component {
    render() {
        return (
            <div className="listview">
                {/* 头部导航 */}
                <Header />
                {/* 列表区域 */}
                <Listview />
            </div>
        )
    }
}
