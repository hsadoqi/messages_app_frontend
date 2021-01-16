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

const leftDrawerWidth = 240 
const rightDrawerWidth = 320

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
    },
    rightDrawer: {
        width: rightDrawerWidth,
        flexShrink: 0,
    },
    rightDrawerPaper: {
        width: rightDrawerWidth,
        background: colors.lightSecondary,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    leftDrawer: {
        width: leftDrawerWidth,
        flexShrink: 0
    }, 
    leftDrawerPaper: {
        width: leftDrawerWidth,
        background: colors.lightSecondary
    },
    starIcon: {
        color: colors.primary
    }, 
    listItem: {
        color: colors.primary
    }


  }));

export { useStyles }