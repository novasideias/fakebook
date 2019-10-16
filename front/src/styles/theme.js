import { createMuiTheme } from '@material-ui/core' 

const defaultTheme = createMuiTheme()

export const theme = {
    ...defaultTheme,
    palette:{
        ...defaultTheme.palette,
        primary:{
            ...defaultTheme.palette.primary,
            main : '#3F51B5',
            dark : '#303F9F'
        },
        secondary:{
            ...defaultTheme.palette.secondary,
            main : '#FF5722'
        },
        
    }
}