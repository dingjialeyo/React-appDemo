import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 引入组件
import Login from './Login'
import Home from './Home'
import ListView from './ListView'
import { List } from 'antd-mobile'
import { Router, Route, hashHistory } from 'react-router'

// export default class App extends Component {
//     render() {
//         return (
//             // <Login />
//             // <ListView />
//         )
//     }
// }
const appRouter = <Router history={hashHistory}>
    <Route path="/" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/Listview" component={ListView} />
</Router>
// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(appRouter, document.getElementById('root'))
