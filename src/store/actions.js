export const ACTION = {
    INCREMENT_COUNT: 'INCREMENT_COUNT',
    SET_NAME: 'SET_NAME'
}

export const incrementCount = () => {
    return dispatch => {
        dispatch({
            type: ACTION.INCREMENT_COUNT
        })
    }
}

export const setName = name => {
    return (dispatch, getState) => {
        console.log('getState()', getState())
        dispatch({
            type: ACTION.SET_NAME,
            name
        })
    }
}
