import React, { useState } from 'react'

import { withRouter } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { makeStyles, AppBar as AppBarComp, Toolbar, IconButton, Typography, InputBase, Menu, MenuItem } from '@material-ui/core'
import { FaSearch } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import styles from './styles'
import { setQuery } from '../../store/actions/Publication'

const useStyles = makeStyles(styles)

export const Appbar = withRouter(({ history }) => {
    const classes = useStyles(styles)
    const dispatch = useDispatch()
    const [anchor, setAnchor] = useState(null)

    const query = useSelector(s => s.publication.query)
    const onChange = e => dispatch(setQuery(e))

    const onAnchor = e => setAnchor(e.currentTarget)
    const onClose = () => setAnchor(null)

    const logout = () => dispatch({ type: 'LOGOUT' })

    const onRedirect = () => history.push('/')

    return (
        <>
            <AppBarComp position="fixed">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap onClick={onRedirect}>
                        Novas Idéias
                        </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <FaSearch />
                        </div>
                        <InputBase
                            placeholder="Pesquisar publicação…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={query}
                            onChange={onChange}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={onAnchor}
                        >
                            <MdAccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBarComp>
            <Menu
                anchorEl={anchor}
                keepMounted
                open={Boolean(anchor)}
                onClose={onClose}
            >
                <MenuItem onClick={logout}>Sair</MenuItem>
            </Menu>
        </>
    )
})