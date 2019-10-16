import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { makeStyles, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { format } from 'date-fns'
import ptBRLocale from 'date-fns/locale/pt-BR'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers"
import styles from './jss/register'
import { signIn } from '../../store/actions/Auth'

const useStyles = makeStyles(styles)

export const Register = ({ onClose }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
        birth: null,
        course: null,
        avatar: ''
    })

    const handleChange = (value, key) => setState({
        ...state,
        [key]: value
    })

    const onChange = e => {
        setState(state => ({ ...state, course: e.target.value }))
    }

    const handleDate = e => {
        setState(state => ({
            ...state,
            birth: e
        }))
    }

    const isDisabled = () => {
        const { username, email, password, birth, course } = state
        if (username === '') return true
        if (email === '') return true
        if (password === '') return true
        if (!birth) return true
        if (!course) return true
        return false
    }

    const onSubmit = () => {
        dispatch(signIn({
            ...state,
            birth: format(new Date(state.birth), 'yyyy-MM-dd'),
            course: getCourse(),
            name: state.username
        }))
        onClose()
    }

    const getCourse = () => {
        switch (state.course) {
            case 'Análise de Sistemas': return 1
            case 'Jogos Digitais': return 2
            case 'Segurança da Informação': return 3
            default: return 1
        }
    }

    return (
        <>
            <div className={classes.overlay} onClick={onClose} />
            <div className={classes.root}>
                <div className={classes.title}>Cadastro de Usuário</div>
                <TextField
                    color='primary'
                    onChange={e => handleChange(e.target.value, 'username')}
                    value={state.username}
                    label='Nome de Usuário'
                    className={classes.input}
                />
                <TextField
                    color='primary'
                    onChange={e => handleChange(e.target.value, 'email')}
                    value={state.email}
                    label='Email'
                    className={classes.input}
                />
                <TextField
                    color='primary'
                    onChange={e => handleChange(e.target.value, 'password')}
                    value={state.password}
                    label='Senha'
                    type='password'
                    className={classes.input}
                />
                <TextField
                    color='primary'
                    onChange={e => handleChange(e.target.value, 'avatar')}
                    value={state.avatar}
                    label='URL Imagem'
                    className={classes.input}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBRLocale}>
                    <KeyboardDatePicker
                        value={state.birth}
                        onChange={handleDate}
                        className={classes.input}
                        label='Data de Nascimento'
                        format='dd/MM/yyyy'
                        maxDate={new Date(Date.now())}
                    />
                </MuiPickersUtilsProvider>
                <FormControl className={classes.input}>
                    <InputLabel shrink htmlFor="input-select">
                        Curso
                    </InputLabel>
                    <Select
                        value={state.course}
                        onChange={onChange}
                        inputProps={{
                            id: 'input-select'
                        }}
                    >
                        <MenuItem value={'Análise de Sistemas'}>Análise de Sistemas</MenuItem>
                        <MenuItem value={'Jogos Digitais'}>Jogos Digitais</MenuItem>
                        <MenuItem value={'Segurança da Informação'}>Segurança da Informação</MenuItem>
                    </Select>
                </FormControl>

                <div className={classes.buttonContainer}>
                    <Button variant='contained' color='primary' className={classes.button} onClick={onSubmit} disabled={isDisabled()}>
                        Cadastrar
                    </Button>
                </div>
            </div>
        </>
    )
}