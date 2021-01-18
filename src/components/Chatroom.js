import MessagesContainer from './MessagesContainer'
import MessageForm from './MessageForm'

function Chatroom ({submitMessage}) {
    return (
        <div className="root">
            <MessagesContainer/>
            <MessageForm submitMessage={submitMessage}/>
        </div>
    )
    
}

export default Chatroom