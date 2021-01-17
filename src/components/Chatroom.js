import MessagesContainer from './MessagesContainer'
import MessageForm from './MessageForm'
import {Toolbar, Drawer} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const colors = {
    primary: "#05386B",
    primaryText: "#ffffff",
    lightSecondary: "#92ffc6",
    secondary: "#5CDB95",
    secondaryText: "#000000",
    textStyle: "EDF5E1",
    lightPrimary: "#42609a"
}

const drawerWidth = "75%"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        zIndex: -1, 
        flexDirection: "column"
    },
    messageDrawer: {
        flexShrink: 0, 
        width: drawerWidth
    } 
}))

function Chatroom ({submitMessage}) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Drawer
                variant="permanent"
                className={classes.messageDrawer}
            >
                <Toolbar/>
                <MessagesContainer/>
                <MessageForm submitMessage={submitMessage}/>
            </Drawer>
        </div>
    )
    
}

export default Chatroom