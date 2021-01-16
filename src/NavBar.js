import { AppBar, Toolbar, Typography, makeStyles, IconButton } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    }
  }));
  
// to add menu button later, check appbar api in material-ui
// - app bar with menu
// - update useStyles 
// - import menu button from api

function NavBar({currentUser}){
    const classes = useStyles()

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Hello {currentUser.name}
                </Typography>
                <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() => console.log("clicked")}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar