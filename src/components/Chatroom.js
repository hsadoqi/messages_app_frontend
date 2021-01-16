import React, { Component } from 'react'
import MessagesContainer from './MessagesContainer'
import MessageForm from './MessageForm'

class Chatroom extends Component {
    render(){
        return (
            <div>
                <h2>Chatroom</h2>
                <MessagesContainer/>
                <MessageForm/>
            </div>
        )
    }
}

export default Chatroom