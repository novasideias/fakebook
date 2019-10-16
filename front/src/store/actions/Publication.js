import { PublicationTypes as types } from '../types'
import axios from 'axios'

const { REACT_APP_API: path } = process.env

export const fetchPublications = () => {
    return (dispatch, getState) => {
        const { auth: { token } } = getState()
        const endpoint = `${path}/publications`
        const headers = { headers: { Authorization: `bearer ${token}` } }
        axios.get(endpoint, headers)
            .then(res => dispatch({ type: types.STORE_PUBLICATIONS, data: res.data }))
            .catch(err => console.error(err))
    }
}

export const setQuery = e => {
    return dispatch => {
        dispatch({ type: types.SET_QUERY, data: e.target.value })
    }
}