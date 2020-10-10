import React, { Component } from 'react'
import "../assets/css/formInput.css"
import "../assets/fonts/iconfont.css"
export default class FormInput extends Component {
    render() {
        return (
            <div className="input-group">
                {/* 字体图标 */}
                <i className={"iconfont "+ this.props.icon}></i>
                <input type={this.props.type} placeholder={this.props.value} />
            </div>
        )
    }
}
