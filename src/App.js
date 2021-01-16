import React, { Component } from 'react'
import ChatroomContainer from './components/ChatroomContainer'
import NavBar from './NavBar/NavBar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: {
        name: "Hanaa"
      },
      channels: [
        {
          name: "French"
        },
        {
          name: "Spanish"
        }, 
        {
          name: "English"
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <NavBar currentUser={this.state.currentUser}/>
        <ChatroomContainer currentUser={this.state.currentUser} channels={this.state.channels}/>
      </div>
    )
  }
}

export default App;
