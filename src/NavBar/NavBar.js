import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { AccountCircle, Menu } from '@material-ui/icons'
import { useStyles } from './NavBarStyles'

function NavBar({currentUser}){
    const classes = useStyles()

    return (
        <div className={classes.root}>
        <AppBar position="fixed" className={classes.toolBar}>
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Welcome back, {currentUser.name}
                </Typography>
                <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() => console.log("clicked")}
                    className={classes.accountIcon}
                >
                    <AccountCircle/>
                </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar