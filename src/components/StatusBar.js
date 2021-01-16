import React, { Component } from 'react'
import User from './User'

class StatusBar extends Component {
    render(){
        return (
            <div>
                <h4>Status Bar</h4>
                <User currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

export default StatusBar