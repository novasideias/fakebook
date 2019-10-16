import React from 'react'

import { makeStyles, Snackbar as SnackComp, SnackbarContent, IconButton } from '@material-ui/core'
import styles from './styles'
import { FaCheck, FaTimes, FaExclamation } from 'react-icons/fa'
import clsx from 'clsx'
const useStyles = makeStyles(styles)

export const Snackbar = ({ open, onClose, message, variant }) => {
    return (
        <SnackComp
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            autoHideDuration={5000}
            onClose={onClose}
        >
            <MySnackbarContentWrapper
                onClose={onClose}
                variant={variant}
                message={message}
            />
        </SnackComp>
    )
}

const Icons = {
    success: FaCheck,
    error: FaExclamation,
    warning: FaExclamation,
    info: FaExclamation
}

function MySnackbarContentWrapper(props) {
    const classes = useStyles()
    const { className, message, onClose, variant, ...other } = props
    const Icon = Icons[variant]

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <FaTimes className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}