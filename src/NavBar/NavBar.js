import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { AccountCircle, Menu } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'

const colors = {
    primary: "#05386B",
    primaryText: "#ffffff",
    lightSecondary: "#92ffc6",
    secondary: "#5CDB95",
    secondaryText: "#000000",
    textStyle: "EDF5E1",
    lightPrimary: "#42609a"
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    title: {
      flexGrow: 1,
      color: colors.textStyle,
    }, 
    toolBar: {
        background: colors.secondary,
        zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: colors.textStyle,
        background: colors.primary
    }, 
    accountIcon: {
        color: colors.primary
    }
})
)

function NavBar({currentUser, display}){
    const classes = useStyles()

    return (
        <div className={classes.root}>
        <AppBar position="fixed" className={classes.toolBar}>
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={display}>
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