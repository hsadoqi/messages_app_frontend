import { Drawer, List, Toolbar, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import {Star} from '@material-ui/icons'
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

const drawerWidth = "40%"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex", 
        zIndex: 3
        
    }, 
    drawer: {
        width: drawerWidth, 
        flexShrink: 0
    }, 
    drawerPaper: {
        width: drawerWidth, 
        background: colors.lightPrimary
    },
    drawerContainer: {
        overflow: "auto"
    },
    listItem: {
        color: colors.primaryText
    },
    starIcon: {
        color: colors.secondary
    }
}))

function LeftSideBar( { channels, currentChatroom, handleClick, display }) {
    const classes = useStyles()
    return (
        <div className={classes.root} style={{display}}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <Toolbar/>
                <div className={classes.drawerContainer}>
                    <List>
                        {channels.map(chatroom => {
                            return (
                                <ListItem 
                                    button 
                                    key={chatroom.name}
                                    className={classes.listItem}
                                    selected={chatroom.name === currentChatroom.name}
                                    onClick={() => handleClick(chatroom)}
                                >
                                    <ListItemIcon>
                                        <Star className={classes.starIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary={chatroom.name}/>
                                </ListItem>)
                        })}
                    </List>
                </div>
            </Drawer>
        </div>
    )
}

export default LeftSideBar

// to do:
// add button to view all channels 
// option to remove channel from list 
// separate styling
// use divider to separate 