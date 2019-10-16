import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { makeStyles, Paper, Grid, FormControl, Select, MenuItem, Button, Tooltip } from '@material-ui/core'
import styles from './jss/publication'

import { Snackbar } from '..'

import { FaLink, FaQuoteLeft, FaFileAlt } from 'react-icons/fa'
import { fetchPublications } from '../../store/actions/Publication'
import { LinkDialog } from './LinkDialog'
import { ReferenceDialog } from './ReferenceDialog'
import { AbstractDialog } from './AbstractDialog'

const useStyles = makeStyles(styles)

const { REACT_APP_API: path } = process.env

export const Publication = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const token = useSelector(s => s.auth.token)
    const [category, setCategory] = useState('Biológicas')
    const [content, setContent] = useState('')

    const [link, setLink] = useState(false)
    const [reference, setReference] = useState(false)
    const [abstract, setAbstract] = useState(false)

    const [attach, setAttach] = useState({
        links: [],
        references: [],
        abstracts: []
    })

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        variant: 'success'
    })

    const onClose = () => setSnackbar(p => ({ ...p, open: false }))

    const onChange = e => setContent(e.target.value)

    const onSubmit = () => {
        const endpoint = `${path}/publications`
        const payload = {
            content,
            category: getCategory(category),
            attach: JSON.stringify(attach)
        }
        const headers = { headers: { Authorization: `bearer ${token}` } }
        axios.post(endpoint, payload, headers)
            .then(() => {
                setSnackbar({
                    open: true,
                    message: 'Publicação adicionada com sucesso!',
                    variant: 'success'
                })
                setContent('')
                dispatch(fetchPublications())

            })
            .catch(err => setSnackbar({
                open: true,
                message: 'Erro ao publicar!',
                variant: 'error'
            }))

    }

    return (
        <>
            <div className={classes.root}>
                <Grid container className={classes.container}>
                    <Grid item xs={12} sm={12} md={8} lg={8} className={classes.item}>
                        <Paper classes={{ root: classes.paper }}>
                            <div className={classes.header}>
                                Nova publicação
                            <div className={classes.grow} />
                                <div className={classes.category}>
                                    <FormControl>
                                        <Select
                                            value={category}
                                            onChange={e => setCategory(e.target.value)}
                                        >
                                            <MenuItem value={'Exatas'}>Exatas</MenuItem>
                                            <MenuItem value={'Humanas'}>Humanas</MenuItem>
                                            <MenuItem value={'Biológicas'}>Biológicas</MenuItem>
                                            <MenuItem value={'Dúvidas'}>Dúvidas</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <Paper classes={{ root: classes.content }}>
                                <textarea
                                    className={classes.textarea}
                                    value={content}
                                    onChange={onChange}
                                />
                            </Paper>
                        </Paper>
                        <Paper classes={{ root: classes.footer }} elevation={2}>
                            <div className={classes.footerItem} onClick={() => setLink(true)}>
                                <FaLink className={classes.icon} />
                                <div className={classes.text}>Links</div>
                            </div>
                            <div className={classes.footerItem} onClick={() => setReference(true)}>
                                <FaQuoteLeft className={classes.icon} />
                                <div className={classes.text}> Referências</div>
                            </div>
                            <div className={classes.footerItem} onClick={() => setAbstract(true)}>
                                <FaFileAlt className={classes.icon} />
                                <div className={classes.text}> Resumos</div>
                            </div>
                            <div className={classes.grow} />

                            <div className={classes.footerItem}>
                                <Tooltip placement='top' title={getTitle(content)}>
                                    <span>
                                        <Button disabled={content.length < 10} onClick={onSubmit}>
                                            Publicar
                                    </Button>
                                    </span>
                                </Tooltip>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <Snackbar {...snackbar} onClose={onClose} />
            <LinkDialog open={link} onClose={() => setLink(false)} attach={attach} setAttach={setAttach} />
            <ReferenceDialog open={reference} onClose={() => setReference(false)} attach={attach} setAttach={setAttach} />
            <AbstractDialog open={abstract} onClose={() => setAbstract(false)} attach={attach} setAttach={setAttach} />
        </>
    )
}

const getCategory = category => {
    switch (category) {
        case 'Exatas': return 1
        case 'Humanas': return 2
        case 'Biológicas': return 3
        case 'Dúvidas': return 4
        default: return null
    }
}

const getTitle = title => {
    if (title.length < 10 && title.length > 0) return `Faltam ${10 - title.length} caracteres`
    return ''
}