import React, { Component } from 'react'
import Message from './Message'

class MessagesContainer extends Component {
    render(){
        return (
            <div style={{
                flexGrow: 1
            }}>
                <h4>Messages Container</h4>
                <Message/>
            </div>
        )
    }
}

export default MessagesContainer