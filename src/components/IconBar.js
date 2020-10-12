import React, { Component } from 'react'
import '../assets/css/iconbar.css'

export default class IconBar extends Component {
    render() {
        return (
            <div className="iconbar">
                <a href={this.props.href}>
                    <img src={require('../assets/images/' + this.props.url +'.png')} alt=""/>
                    <p>{this.props.title}</p>
                </a>
            </div>
        )
    }
}
