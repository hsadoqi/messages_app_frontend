import React, { Component } from 'react'
import UsersContainer from './UsersContainer'
import StatusBar from './StatusBar'

class RightSideBar extends Component {
    render(){
        return (
            <div>
                <h3>SideBar</h3>
                <UsersContainer/>
                <StatusBar/>
            </div>
        )
    }
}

export default RightSideBar