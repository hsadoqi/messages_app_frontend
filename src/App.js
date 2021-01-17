import React, { Component } from 'react'
import ChatroomContainer from './components/ChatroomContainer'
import NavBar from './NavBar/NavBar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      display: "none",
      currentUser: {
        name: "Hanaa"
      },
      channels: [
        {
          name: "French",
          messages: [
            { 
              content: "French chatroom"
            }
          ]
        },
        {
          name: "Spanish",
          messages: [
            {
                content: "hello"
            },
            {
                content: "bye"
            },
            {
                content: "see ya"
            }
        ]
        }, 
        {
          name: "English",
          messages: [
            {
              content: "English chatroom"
            }
          ]
        }
      ]
    }

    this.displayChannels = this.displayChannels.bind(this)
  }

  displayChannels(e){
    // debugger
    e.preventDefault()
    this.setState((state) => {
      if(state.display === "none"){
        return {...state, display: "block"}
      } else {
        return {...state, display: "none"}
      }
    })
  }

  render(){
    return (
      <div >
        <NavBar currentUser={this.state.currentUser} display={this.displayChannels}/>
        <ChatroomContainer currentUser={this.state.currentUser} channels={this.state.channels} display={this.state.display}/>
      </div>
    )
  }
}

export default App;
