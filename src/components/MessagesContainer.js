import React, { Component } from 'react'
import Message from './Message'

class MessagesContainer extends Component {
    render(){
        return (
            <div>
                <h4>Messages Container</h4>
                <Message/>
            </div>
        )
    }
}

export default MessagesContainer