import React, { Component } from 'react'

export default class ReactReduxTestApp extends Component {
    render() {
        return (
            <div>
                <p>{this.props.myNum}</p>
                <button onClick={this.props.handleClick.bind(this)}>Add</button>
            </div>
        )
    }
}
// 2. 定义state数据转props数据的函数
const myProps = (state) => {
    return {
        // 接收仓库的state值   并且可以 用 props 来接收 值
        myNum : state.num
    }
}

// 1. 使用connect完成连接组件， 并把state数据转props数据
// export default connect(渲染的函数,修改数据的函数名)(组件名)
export default connect(myProps,upData)(ReactReduxTestApp)


// 修改仓库中的 num 值
const upData = (dispatch) => {
    return {
        handelClick(e) {
            // 调用dispatch(action)  传给 仓库 进行 修改
            const action = {
                type: 'add',
                value: this.props.num++
            }
            dispatch(action)
        }
    }
}