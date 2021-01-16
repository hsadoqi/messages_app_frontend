import { Drawer, List, Toolbar, makeStyles, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import {Star} from '@material-ui/icons'

const drawerWidth = 240 

const colors = {
    primary: "#05386B",
    primaryText: "#ffffff",
    lightSecondary: "#92ffc6",
    secondary: "#5CDB95",
    secondaryText: "#000000",
    textStyle: "EDF5E1"
}


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    }, 
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    }, 
    drawerPaper: {
        width: drawerWidth,
        background: colors.lightSecondary
    },
    starIcon: {
        color: colors.primary
    }, 
    listItem: {
        color: colors.primary
    }
}))

function LeftSideBar() {
    const classes = useStyles()
    return (
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
                        {["French", "English", "Spanish"].map(chatroom => {
                            return (
                                <ListItem button className={classes.listItem}>
                                    <ListItemIcon>
                                        <Star className={classes.starIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary={chatroom}/>
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