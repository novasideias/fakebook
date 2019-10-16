import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchPublications } from '../../store/actions/Publication'
import axios from 'axios'

import { Link } from 'react-router-dom'

import { makeStyles, Paper, Grid, Menu, MenuItem } from '@material-ui/core'
import styles from './jss/feed'

import { Snackbar } from '..'

import { FaComment, FaEllipsisV, FaSadCry } from 'react-icons/fa'


const { REACT_APP_API: path } = process.env

const useStyles = makeStyles(styles)

export const Feed = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const token = useSelector(s => s.auth.token)
    const query = useSelector(s => s.publication.query)
    const publications = useSelector(s => s.publication.publications)

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        variant: 'success'
    })


    useEffect(() => {
        dispatch(fetchPublications())
    }, [dispatch])

    const remove = id => {
        const endpoint = `${path}/publications/${id}`
        const headers = { headers: { Authorization: `bearer ${token}` } }
        axios.delete(endpoint, headers)
            .then(() => {
                dispatch(fetchPublications())
                setSnackbar({
                    open: true,
                    message: 'Publicação excluida com sucesso',
                    variant: 'success'
                })
            })
            .catch(() => {
                setSnackbar({
                    open: true,
                    message: 'Publicação contem comentarios',
                    variant: 'error'
                })
            })
    }

    const filterFunction = publication => {
        if (publication.name.toLowerCase().includes(query.toLowerCase())) return true
        if (publication.description.toLowerCase().includes(query.toLowerCase())) return true
        if (publication.content.toLowerCase().includes(query.toLowerCase())) return true
        return false
    }

    const onClose = () => setSnackbar(p => ({ ...p, open: false }))
    const filtered = publications.filter(filterFunction)
    return (
        <>
            <Grid container className={classes.root}>
                {
                    Boolean(filtered.length) ?
                        publications.filter(filterFunction).map(item => (
                            <Grid xs={12} sm={12} md={8} lg={8} item key={item.id}>
                                <Item
                                    name={item.name}
                                    avatar={item.avatar}
                                    content={item.content}
                                    author={item.user}
                                    remove={remove}
                                    id={item.id}
                                    category={item.description}
                                />
                            </Grid>
                        )) :

                        <div className={classes.empty}>Nenhuma publicação <FaSadCry className={classes.emote} /></div>
                }
            </Grid>
            <Snackbar {...snackbar} onClose={onClose} />
        </>

    )
}

const Item = ({ name, avatar, content, author, remove, id, category }) => {
    const classes = useStyles()
    const userId = useSelector(s => s.auth.id)
    const admin = useSelector(s => s.auth.admin)

    const [anchor, setAnchor] = useState(null)

    const onAnchor = e => setAnchor(e.currentTarget)
    const onClose = () => setAnchor(null)

    const onClick = () => {
        setAnchor(null)
        remove(id)
    }

    return (
        <>
            <Paper classes={{ root: classes.publication }}>
                <div className={classes.header}>
                    <div className={classes.avatar}>
                        <img src={avatar} alt='avatar' className={classes.image} />
                    </div>
                    <div className={classes.title}>
                        {name} <span className={classes.categoryTitle}>[{category}]</span>
                    </div>
                    <div className={classes.grow} />
                    {
                        (parseInt(author) === parseInt(userId) || admin) &&
                        <div className={classes.iconDetailsContainer} onClick={onAnchor}>
                            <FaEllipsisV className={classes.iconDetails} />
                        </div>
                    }
                </div>
                <div className={classes.content}>
                    <p>
                        {content}
                    </p>
                </div>
                <div className={classes.actions}>
                    <Link to={`/details/${id}`} className={classes.action}>
                        <FaComment className={classes.icon} />
                        <div className={classes.text}>Comentar</div>
                    </Link>
                </div>
            </Paper>
            <Menu
                anchorEl={anchor}
                keepMounted
                open={Boolean(anchor)}
                onClose={onClose}
            >
                <MenuItem onClick={onClick}>Excluir</MenuItem>
            </Menu>
        </>
    )
}
