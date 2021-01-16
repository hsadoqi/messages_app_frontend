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
    title: {
      flexGrow: 1,
      color: colors.primary
    }, 
    toolBar: {
        background: colors.secondary
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: colors.textStyle
    }, 
    accountIcon: {
        color: colors.primary
    }
  }));

export { useStyles }