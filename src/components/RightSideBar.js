import UsersContainer from './UsersContainer'
import StatusBar from './StatusBar'
import { makeStyles, Drawer, Divider, Toolbar, List } from '@material-ui/core'


const colors = {
    primary: "#05386B",
    primaryText: "#ffffff",
    lightSecondary: "#92ffc6",
    secondary: "#5CDB95",
    secondaryText: "#000000",
    textStyle: "EDF5E1",
    lightPrimary: "#42609a"
}

const drawerWidth = 320

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
        background: colors.lightSecondary,
      },
      drawerContainer: {
        overflow: 'auto',
      }
}));


function RightSideBar(){
    const classes = useStyles()

    return (
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
                <StatusBar/>
            </div>
            
        </Drawer>

    )
}

export default RightSideBar