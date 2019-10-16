import { PublicationTypes as types } from '../types'

const initialState = {
    publications: [],
    query: ''
}

export const PublicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.STORE_PUBLICATIONS: return storePublications(state, action)
        case types.SET_QUERY: return setQuery(state, action)
        default: return state
    }
}

const storePublications = (state, action) => {
    return {
        ...state,
        publications: action.data
    }
}

const setQuery = (state, action) => ({
    ...state,
    query: action.data
}) 