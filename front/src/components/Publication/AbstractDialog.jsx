import React, { useState } from 'react'

import { makeStyles, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, IconButton } from '@material-ui/core'
import styles from './jss/dialog'
import { FaLink, FaPlus } from 'react-icons/fa'

const useStyles = makeStyles(styles)

export const AbstractDialog = ({ open, onClose, attach, setAttach }) => {
    const classes = useStyles()

    const [item, setItem] = useState({
        id: '',
        link: ''
    })

    const { id, link } = item

    const handleChange = (e, name) => {
        const { target: { value } } = e
        setItem(p => ({ ...p, [name]: value }))
    }

    const isDisabled = () => {
        if (id === '' || link === '') return true
        return false
    }

    const onAdd = () => {
        setAttach(prev => ({
            ...prev,
            abstracts: prev.abstracts.concat(item)
        }))
        setItem({ id: '', link: '' })
    }

    const onClear = () => {
        setAttach(prev => ({
            ...prev,
            abstracts: []
        }))
        setItem({ id: '', link: '' })
        onClose()
    }

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle id="simple-dialog-title">Resumos</DialogTitle>
            <DialogContent>
                <div className={classes.content}>
                    <TextField
                        label='Identificador'
                        value={id}
                        onChange={e => handleChange(e, 'id')}
                        className={classes.input}
                    />
                    <TextField
                        label='URL'
                        InputProps={{
                            endAdornment: <FaLink />
                        }}
                        value={link}
                        onChange={e => handleChange(e, 'link')}
                        className={classes.input}
                    />
                    <div className={classes.contentButtonContainer}>
                        <IconButton disabled={isDisabled()} onClick={onAdd}>
                            <FaPlus className={classes.contentButton} />
                        </IconButton>
                    </div>
                    {attach.abstracts.map((link, i) => <a  rel="noopener noreferrer" key={i} href={link.link} className={classes.anchor} target='_blank'>{link.id}</a>)}
                </div>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={onClear}>
                    Limpar
                </Button>
                <Button onClick={onClose} color="primary">
                    Finalizar
                </Button>
            </DialogActions>
        </Dialog>
    )
}