import React, { Component } from 'react'
import Chatroom from './Chatroom'
import RightSideBar from './RightSideBar'
import LeftSideBar from './LeftSideBar'

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
                <LeftSideBar/>
                <Chatroom />
                <RightSideBar/>
            </div>
        )
    }
}

export default ChatroomContainer