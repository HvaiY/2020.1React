import actionTypes from './actionTypes'
import {
    getNotifications
} from '../requests'




export const fetchNotificationByPost = () => {
    return dispatch => {
        dispatch(startNotificationRead())
        getNotifications().then((resp) => {
            console.log(resp);
            dispatch({
                type: actionTypes.START_NOTIFICATION_FETCH,
                payload: {
                    list: resp.data.list
                }
            })
            dispatch(finishNotificationRead())
        })
    }
}

export const markNotificationAsReadById = (id) => {
    return dispatch => {
        dispatch(startNotificationRead())
        //模拟后端请求获取数据 
        setTimeout(() => {
            dispatch({
                type: actionTypes.MARK_NOTIFICATION_AS_READ_BY_ID,
                payload: {
                    id
                }
            })
            dispatch(finishNotificationRead())
        }, 2000)
    }
}

export const markNotificationAsUnReadById = (id) => {
    return dispatch => {
        dispatch(startNotificationRead())
        //模拟后端请求获取数据 
        setTimeout(() => {
            dispatch({
                type: actionTypes.MARK_NOTIFICATION_AS_UNREAD_BY_ID,
                payload: {
                    id
                }
            })
            dispatch(finishNotificationRead())
        }, 2000)
    }
}

export const markNotificationAsRead = () => {
    return dispatch => {
        dispatch(startNotificationRead())
        //模拟后端请求获取数据 
        setTimeout(() => {
            dispatch({
                type: actionTypes.MARK_NOTIFICATION_AS_READ
            })
            dispatch(finishNotificationRead())
        }, 2000)
    }
}

export const startNotificationRead = () => {
    return {
        type: actionTypes.START_NOTIFICATION_READ
    }
}
export const finishNotificationRead = () => {
    return {
        type: actionTypes.FINISH_NOTIFICATION_READ
    }
}