import React, { Component } from 'react'
import ChatroomContainer from './components/ChatroomContainer'
import NavBar from './NavBar/NavBar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: {
        name: "Hanaa"
      }
    }
  }

  render(){
    return (
      <div>
        <NavBar currentUser={this.state.currentUser}/>
        <ChatroomContainer currentUser={this.state.currentUser}/>

      </div>
    )
  }
}

export default App;
