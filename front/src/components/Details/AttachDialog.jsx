import React from 'react'

import { makeStyles, Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import styles from './jss/attachDialog'

const useStyles = makeStyles(styles)

export const AttachDialog = ({ open, onClose, attach }) => {
    const classes = useStyles()
    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>Anexos</DialogTitle>
            <DialogContent>
                <div className={classes.content}>
                    {
                        Boolean(attach.links.length) &&
                        <div className={classes.item}>
                            <div className={classes.title}>
                                Links
                            </div>
                            <div className={classes.links}>
                                {attach.links.map(link => (
                                    <a key={link.link} href={link.link} rel="noopener noreferrer" target='_blank' className={classes.anchor}>
                                        {link.id}
                                    </a>
                                ))}
                            </div>
                        </div>
                    }
                    {
                        Boolean(attach.references.length) &&
                        <div className={classes.item}>
                            <div className={classes.title}>
                                Referências
                            </div>
                            <div className={classes.links}>
                                {attach.references.map(link => (
                                    <a key={link.link} href={link.link} rel="noopener noreferrer" target='_blank' className={classes.anchor}>
                                        {link.id}
                                    </a>
                                ))}
                            </div>
                        </div>
                    }
                    {
                        Boolean(attach.abstracts.length) &&
                        <div className={classes.item}>
                            <div className={classes.title}>
                                Resumos
                            </div>
                            <div className={classes.links}>
                                {attach.abstracts.map(link => (
                                    <a key={link.link} href={link.link} rel="noopener noreferrer" target='_blank' className={classes.anchor}>
                                        {link.id}
                                    </a>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </DialogContent>
        </Dialog>
    )
}