import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchPublications } from '../../store/actions/Publication'
import axios from 'axios'

import { makeStyles, Paper, Button, Tooltip } from '@material-ui/core'
import { Snackbar } from '..'
import styles from './jss/details'

import { FaTrash } from 'react-icons/fa'
import { AttachDialog } from './AttachDialog'

const { REACT_APP_API: path } = process.env

const useStyles = makeStyles(styles)

export const Details = ({ match, history }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { params: { id } } = match

    const auth = useSelector(s => s.auth)
    const { token, id: userId, admin } = auth

    const [data, setData] = useState(null)
    const [comment, setComment] = useState('')
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        variant: 'success'
    })
    const [attachOpen, setAttach] = useState(false)

    const toggleAttach = () => setAttach(b => !b)

    const onCloseSnack = () => setSnackbar(p => ({ ...p, open: false }))

    useEffect(() => {
        const endpoint = `${path}/publications/${id}`
        const headers = { headers: { Authorization: `bearer ${token}` } }
        axios.get(endpoint, headers)
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [id, token])

    if (!data) return null

    const { publication, comments } = data
    const { avatar, name, description: category, user: author, content, attach: _attach } = publication
    const attach = JSON.parse(_attach)
    const onSubmit = () => {
        const endpoint = `${path}/publications/comments`
        const payload = {
            publication: publication.id,
            author: userId,
            content: comment
        }
        const headers = { headers: { Authorization: `bearer ${token}` } }
        axios.post(endpoint, payload, headers)
            .then(() => {
                setSnackbar({
                    open: true,
                    message: 'Comentário publicado',
                    variant: 'success'
                })
                setComment('')
                const endpoint = `${path}/publications/${id}`
                const headers = { headers: { Authorization: `bearer ${token}` } }
                axios.get(endpoint, headers)
                    .then(res => setData(res.data))
                    .catch(err => console.error(err))

            })
            .catch(() => {
                setSnackbar({
                    open: true,
                    message: 'Erro ao publicar comentário',
                    variant: 'error'
                })
            })
    }

    const onDeletePublication = () => {
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
                history.push('/')
            })
            .catch(() => {
                setSnackbar({
                    open: true,
                    message: 'Erro ao excluir publicação',
                    variant: 'error'
                })
            })
    }

    const onDelete = id => {
        const endpoint = `${path}/publications/comments/${id}`
        const headers = { headers: { Authorization: `bearer ${token}` } }
        axios.delete(endpoint, headers)
            .then(() => {
                setSnackbar({
                    open: true,
                    message: 'Comentário excluido',
                    variant: 'info'
                })
                const endpoint = `${path}/publications/${publication.id}`
                const headers = { headers: { Authorization: `bearer ${token}` } }
                axios.get(endpoint, headers)
                    .then(res => setData(res.data))
                    .catch(err => console.error(err))
            })
            .catch(() => {
                setSnackbar({
                    open: true,
                    message: 'Erro ao excluir comentário',
                    variant: 'error'
                })
            })
    }

    return (
        <>
            <div className={classes.root}>
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
                            <div className={classes.iconDetailsContainer} onClick={() => { }}>
                                <FaTrash className={classes.iconDetails} onClick={onDeletePublication} />
                            </div>
                        }
                    </div>
                    <div className={classes.content}>
                        <p>
                            {content}
                        </p>
                    </div>
                    {Boolean(attach) && <Button className={classes.attachButton} color='primary' onClick={toggleAttach}>Anexos</Button>}
                </Paper>
                <div className={classes.newComment}>
                    <Paper>
                        <textarea
                            placeholder='Faça um comentário...'
                            className={classes.textarea}
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        />
                    </Paper>
                    <Tooltip title={getTitle(comment)} placement='top'>
                        <span className={classes.button}>
                            <Button disabled={comment.length < 5} onClick={onSubmit}>
                                Publicar
                        </Button>
                        </span>
                    </Tooltip>
                </div>
                <div className={classes.commentArea}>
                    <div className={classes.commentTitle}>Comentarios</div>
                    {comments.map(comment => (
                        <Paper classes={{ root: classes.comment }} key={comment.id}>
                            <div className={classes.commentHeader}>
                                <img src={comment.avatar} className={classes.avatar} alt='foo' />
                                <div className={classes.commentName}>
                                    {comment.name}
                                </div>
                                <div className={classes.grow} />
                                {
                                    (parseInt(comment.author) === parseInt(userId) || admin) &&
                                    <div className={classes.commentIconDetailsContainer} onClick={() => { }}>
                                        <FaTrash className={classes.commentIconDetails} onClick={() => onDelete(comment.id)} />
                                    </div>
                                }
                            </div>
                            <div className={classes.commentContent}>
                                {comment.content}
                            </div>
                        </Paper>
                    ))}
                </div>
            </div>
            <Snackbar {...snackbar} onClose={onCloseSnack} />
            <AttachDialog open={attachOpen} onClose={() => setAttach(false)} attach={attach} />
        </>
    )
}

const getTitle = comment => {
    if (comment.length < 5 && comment.length > 0) return `Faltam ${5 - comment.length} caracteres`
    return ''
}
