import React from 'react'

/**
 * Taken from https://github.com/mjackson/react-loop-2019/blob/master/hooks.js
 * Modified to add previous state
 */

export function useLogger([state, dispatch]) {
    const actionRef = React.useRef()
    const prevStateRef = React.useRef(state)

    const newDispatchRef = React.useRef(action => {
        actionRef.current = action
        dispatch(action)
    })

    React.useEffect(() => {
        const action = actionRef.current

        if (action) {
            console.group('Dispatch')
            console.log('Previous State:', prevStateRef.current)
            console.log('Action:', action)
            console.log('Next State:', state)
            console.groupEnd()

            prevStateRef.current = state
        }
    }, [state])

    return [state, newDispatchRef.current]
}
