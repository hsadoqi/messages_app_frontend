import React, { Component } from 'react'
import Chatroom from './Chatroom'
import RightSideBar from './RightSideBar'
import LeftSideBar from './LeftSideBar'

class ChatroomContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentChatroom: {
                messages: []
            }
        }
        this.handleClick = this.handleClick.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
    }

    componentDidMount(){
        this.setState((state, props) => {
            // debugger
            return {...state, 
                currentChatroom: props.channels[0]
            }
        })
    }

    handleClick(channel){
        this.setState((state) => {
            return {...state, currentChatroom: channel}
        })
    }

    submitMessage(msg){
        // debugger
        this.setState((state) => {
            return {...state, currentChatroom: {
                ...state.currentChatroom, 
                messages: [...state.currentChatroom.messages, msg]
            }}
        })
    }

    render(){



        return (
            <div style={{
                columnCount: 3, 
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                alignItems: "stretch"
            }}>
                <LeftSideBar channels={this.props.channels} currentChatroom={this.state.currentChatroom} handleClick={this.handleClick} display={this.props.display}/>
                <Chatroom currentUser={this.props.currentUser} submitMessage={this.submitMessage}/>
                <RightSideBar currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

export default ChatroomContainer

// style={{
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: "no-wrap", 
//     justifyContent: "space-between",
//     // alignItems: "stretch"
// }}