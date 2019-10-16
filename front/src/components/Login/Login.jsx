import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { makeStyles, TextField, Button } from '@material-ui/core'
import styles from './jss/login'

import { FaRegLightbulb as Idea } from 'react-icons/fa'

import { Register, Snackbar } from '..'
import { login } from '../../store/actions/Auth'

const useStyles = makeStyles(styles)

export const Login = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const [error,setError] = useState(false)

    const [open, setOpen] = useState(false)

    const handleChange = (value, key) => setState(prevState => ({
        ...prevState,
        [key]: value
    }))

    const { email, password } = state

    const onSubmit = () => {
        dispatch(login(state))
            .catch(() => setError(true))
    }

    const onCloseSnack = () => setError(false)

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                NOVAS IDEIAS
                <Idea className={classes.icon} />
            </div>
            <div className={classes.paper}>
                <TextField
                    color='primary'
                    onChange={e => handleChange(e.target.value, 'email')}
                    value={email}
                    label='Email'
                    className={classes.input}
                    error={error}
                />
                <TextField
                    color='primary'
                    onChange={e => handleChange(e.target.value, 'password')}
                    value={password}
                    type='password'
                    label='Senha'
                    className={classes.input}
                    error={error}
                />
                <div className={classes.register} onClick={() => setOpen(!open)}>Novo por aqui? Cadastre-se</div>
                <div className={classes.grow} />
                <Button color='primary' className={classes.button} onClick={onSubmit}>
                    Entrar
                </Button>
                {open && <Register onClose={() => setOpen(false)} />}
            </div>
            <Snackbar
                open={error}
                onClose={onCloseSnack}
                message='Email e/ou senha inválidos'
                variant='error'
            />
        </div>
    )
}

export default Login