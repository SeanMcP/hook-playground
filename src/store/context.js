import React from 'react'

import { initState, reducer } from './reducer'

const Store = React.createContext()

export const Provider = ({ children }) => {
    const value = React.useReducer(reducer, initState)
    return <Store.Provider value={value}>{children}</Store.Provider>
}

export const useStore = (actions = {}) => {
    const context = React.useContext(Store)
    if (!context) {
        throw new Error('Called `useStore()` outside of `Provider`')
    }
    const [state, dispatch] = context
    const wrappedActions = {}
    const getState = () => ({ ...state })
    for (const action in actions) {
        wrappedActions[action] = (...args) => {
            actions[action](...args)(dispatch, getState)
        }
    }
    return [state, wrappedActions]
}
