import { ACTION } from './actions'

export const initState = {
    count: 0,
    name: 'Sean'
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.INCREMENT_COUNT: {
            return {
                ...state,
                count: state.count + 1
            }
        }
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
