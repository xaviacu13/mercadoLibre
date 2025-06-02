import { colors } from '@mui/material'
import { lightGreen } from '@mui/material/colors'

const white = '#FFF'
const black = '#000'

export default {
  white,
  black,
  primary: {
    main: '#faf01a',
  },
  secondary: {
    contrastText: white,
    main: '#17706e',
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: "rgba(0, 0, 0, 0.9)",
    secondary: "rgba(0, 0, 0, 0.55)",
    link: colors.blue[600],
    green: " #007337",
    lightGreen: "#00A650",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#ffe600',
    paper: "#ebebeb",
  },
  divider: colors.grey[200],
}
