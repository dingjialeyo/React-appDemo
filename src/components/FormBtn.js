import React, { Component } from 'react'
import "../assets/css/formBtn.css"
export default class FormBtn extends Component {
    render() {
        return (
        <button>{this.props.children}</button>
        )
    }
}
