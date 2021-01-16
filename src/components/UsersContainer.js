import React, { Component } from 'react'
import User from './User'

class UsersContainer extends Component {
    render(){
        return (
            <div>
                <h4>Users Container</h4>
                <User/>
            </div>
        )
    }
}

export default UsersContainer