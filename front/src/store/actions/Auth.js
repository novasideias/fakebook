import { AuthTypes as types } from '../types'
import axios from 'axios'

const { REACT_APP_API: path } = process.env

export const login = payload => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const endpoint = `${path}/auth`
            axios.post(endpoint, payload)
                .then(res => {
                    const { id, token, admin } = res.data
                    dispatch({ type: types.STORE_TOKEN, data: token, id, admin })
                    localStorage.setItem('token', token)
                    localStorage.setItem('id', id)
                    localStorage.setItem('batata', admin)
                    resolve()
                })
                .catch(err => reject(err))
        })
    }
}

export const signIn = payload => {
    console.log(payload)
    return dispatch => {
        const endpoint = `${path}/users`
        axios.post(endpoint, payload)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.error(err))
    }
}