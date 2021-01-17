import UsersContainer from './UsersContainer'
import StatusBar from './StatusBar'
import { Drawer, Divider, Toolbar, List } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const colors = {
    primary: "#05386B",
    primaryText: "#ffffff",
    lightSecondary: "#92ffc6",
    secondary: "#5CDB95",
    secondaryText: "#000000",
    textStyle: "EDF5E1",
    lightPrimary: "#42609a"
}

const drawerWidth = "25%"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    }, 
    drawer: {
        width: drawerWidth, 
        flexShrink: 0
    }, 
    drawerPaper: {
        width: drawerWidth, 
        background: colors.lightSecondary
    },
    drawerContainer: {
        overflow: 'auto',
    },
}))

function RightSideBar({ currentUser }){
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="right"
            >
                <Toolbar/>
                <div className={classes.drawerContainer}>
                    <List>
                        <UsersContainer/>
                    </List>
                    <Divider/>
                    <StatusBar currentUser={currentUser}/>
                </div>
                
            </Drawer>
        </div>

    )
}

export default RightSideBar