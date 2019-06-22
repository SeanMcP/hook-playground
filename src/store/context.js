import React from 'react'

import { initState, reducer } from './reducer'

const Store = React.createContext()

export const Provider = ({ children }) => {
    const value = React.useReducer(reducer, initState)
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
                store[action] = (...args) => {
                    mapDispatch[action](...args)(dispatch, getState)
                }
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
