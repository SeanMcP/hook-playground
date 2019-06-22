import { ACTION } from './actions'

export const initState = {
    name: 'Sean'
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.SET_NAME: {
            return {
                ...state,
                name: action.name
            }
        }
        default: {
            return state
        }
    }
}
