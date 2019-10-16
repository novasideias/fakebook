import { AuthTypes as types } from '../types'

const initialState = {
    token: null,
    id: null,
    admin: false
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.STORE_TOKEN: return storeToken(state, action)
        default: return state
    }
}

const storeToken = (state, action) => {
    return {
        ...state,
        token: action.data,
        id: action.id,
        admin: Boolean(parseInt(action.admin))
    }
}