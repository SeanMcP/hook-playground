export const ACTION = {
    SET_NAME: 'SET_NAME'
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
