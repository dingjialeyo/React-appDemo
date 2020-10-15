import React, { Component } from 'react'
import "../assets/css/formBtn.css"
export default class FormBtn extends Component {
    render() {
        return (
        <button onClick={this.props.submit}>{this.props.children}</button>
        )
    }
}
