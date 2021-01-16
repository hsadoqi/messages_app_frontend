import React, { Component } from 'react'
import MessagesContainer from './MessagesContainer'
import MessageForm from './MessageForm'
import ChatroomHeader from './ChatroomHeader'

class Chatroom extends Component {
    render(){
        return (
            <div>
                <h2>Chatroom</h2>
                <ChatroomHeader />
                <MessagesContainer/>
                <MessageForm/>
            </div>
        )
    }
}

export default Chatroom