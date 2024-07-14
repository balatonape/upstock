import store from "../store"

export const sendActionAndDispatch = (type: string, data?: any) => {
    const dispatch = store.dispatch

    return dispatch({
        type, data
    })
}