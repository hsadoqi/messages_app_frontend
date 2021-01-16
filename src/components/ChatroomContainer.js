import React, { Component } from 'react'
import Chatroom from './Chatroom'
import SideBar from './SideBar'

class ChatroomContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return (
            <div>
                <h1>Chatroom Container</h1>
                <Chatroom />
                <SideBar/>
            </div>
        )
    }
}

export default ChatroomContainer