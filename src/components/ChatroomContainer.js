import React, { Component } from 'react'
import Chatroom from './Chatroom'
import RightSideBar from './RightSideBar'
import LeftSideBar from './LeftSideBar'

class ChatroomContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentChatroom: {
                name: "Spanish"
            }
        }
    }


    render(){
        return (
            <div>
                <h1>Chatroom Container</h1>
                <LeftSideBar channels={this.props.channels} currentChatroom={this.state.currentChatroom}/>
                <Chatroom currentUser={this.props.currentUser}/>
                <RightSideBar currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

export default ChatroomContainer