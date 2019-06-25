import React from 'react'

import { initState, reducer } from './reducer'
import { combineMiddleware } from './combineMiddleware'

const Store = React.createContext()

export const Provider = ({ children, middleware }) => {
    const combined = combineMiddleware(middleware)
    const value = combined(React.useReducer(reducer, initState))
    return <Store.Provider value={value}>{children}</Store.Provider>
}

export const useStore = (mapState, mapDispatch) => {
    const context = React.useContext(Store)
    if (!context) {
        throw new Error('Called `useStore()` outside of `Provider`')
    }

    const [state, dispatch] = context
    const getState = () => ({ ...state })

    const store = mapState ? { ...mapState(state) } : {}

    switch (typeof mapDispatch) {
        case 'object': {
            for (const action in mapDispatch) {
                store[action] =
                    typeof mapDispatch[action]() === 'function'
                        ? (...args) =>
                              mapDispatch[action](...args)(dispatch, getState)
                        : (...args) => dispatch(mapDispatch[action](...args))
            }
            break
        }
        case 'function': {
            const mapped = mapDispatch(dispatch, getState)
            for (const action in mapped) {
                store[action] = mapped[action]
            }
            break
        }
        default: {
            break
        }
    }

    return [store, dispatch]
}
