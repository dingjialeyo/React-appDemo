import React, { Component } from 'react'

export default class Img extends Component {
    render() {
        return (
            <div className="img">
                <img src={require("../assets/images/" + this.props.src)} alt="" height={this.props.height} />
            </div>
        )
    }
}
