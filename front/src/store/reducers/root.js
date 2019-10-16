import { combineReducers } from 'redux'

import { AuthReducer } from './Auth'
import { PublicationReducer } from './Publication'

const reducer = combineReducers({
    auth: AuthReducer,
    publication: PublicationReducer
})

export const root = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined
        localStorage.removeItem('token')
        localStorage.removeItem('id')
    }


    return reducer(state, action)
}

export default root