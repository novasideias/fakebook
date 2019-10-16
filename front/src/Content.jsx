import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import App from './App'
import { Login } from './components'

export const Content = () => {
    const token = useSelector(s => s.auth.token)
    const dispatch = useDispatch()

    useEffect(() => {
        const storageToken = localStorage.getItem('token')
        const storageId = localStorage.getItem('id')
        const storageAdmin = localStorage.getItem('batata')
        if (storageToken && storageId && storageAdmin)
            dispatch({ type: 'STORE_TOKEN', data: storageToken, id: storageId, admin: storageAdmin })

    }, [dispatch])


    return !token ? <Login /> : <App />

}