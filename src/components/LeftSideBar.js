import { Drawer, List, Toolbar, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import {Star} from '@material-ui/icons'
import { useStyles } from '../styling/Styles'

function LeftSideBar( { channels, currentChatroom }) {
    const classes = useStyles()
    return (
            <Drawer
                className={classes.leftDrawer}
                variant="permanent"
                classes={{
                    paper: classes.leftDrawerPaper
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
    )
}


export default LeftSideBar

// to do:
// add button to view all channels 
// option to remove channel from list 
// separate styling
// use divider to separate 