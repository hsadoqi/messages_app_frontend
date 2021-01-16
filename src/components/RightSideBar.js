import UsersContainer from './UsersContainer'
import StatusBar from './StatusBar'
import { Drawer, Divider, Toolbar, List } from '@material-ui/core'
import { useStyles } from '../styling/Styles'

function RightSideBar({ currentUser }){
    const classes = useStyles()

    return (
        <Drawer
            className={classes.rightDrawer}
            variant="permanent"
            classes={{
                paper: classes.rightDrawerPaper
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

    )
}

export default RightSideBar