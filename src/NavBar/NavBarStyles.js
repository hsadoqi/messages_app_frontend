import { makeStyles } from '@material-ui/core'

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
  }));

export { useStyles }