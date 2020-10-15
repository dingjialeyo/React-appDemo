// reacr-redux 基本使用
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
// 根组件
import App from '../pages/ReactReduxTestApp'

// 默认值
const defaultState = {
    num : 20
}

// 设置仓库管理员 
const reducer = (state = defaultState, action) => {
    // 接收 传过来的action 进行修改操作
    if (action.type === "add") {
        let newState = JSON.parse(JSON.stringify(state))
        newNum.num = action.value
        // 返回值
        return newState
    }
    // 返回给组件的值 state.值
    return state
}

// 创建一个仓库, 需要 仓库管理员来 管理
const store = createStore(reducer)

const App1 = (
    // Provider将根组件 包裹  来共享数据
    <Provider>
        <App handleClick />
    </Provider>
)

ReactDOM.render(App,document.getElementById("root"))
