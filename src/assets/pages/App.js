import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 引入组件
import Login from './Login'
import Home from './Home'

export default class App extends Component {
    render() {
        return (
            // <Login />
            <Home />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
