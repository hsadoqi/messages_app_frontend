import React, { Component } from 'react'
import { TextField } from '@material-ui/core'

class MessageForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState((state) => {
            return {
                message: e.target.value
            }
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.submitMessage(this.state)
    }

    render(){
        return (
            <div style={{
                alignSelf: "flex-end"
            }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField id="filled-basic" label="Filled" variant="filled"  onChange={this.handleChange} value={this.state.message}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default MessageForm