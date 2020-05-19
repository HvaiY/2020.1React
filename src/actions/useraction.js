import actionTypes from './actionTypes'
import {
    loginRequest
} from '../requests'


const startLogin = () => {
    return {
        type: actionTypes.START_LOGIN,
        payload: {
            isLoading: true
        }
    }
}

const loginSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
            ...data
        }
    }
}

const loginFailed = () => {
    return {
        type: actionTypes.LOGIN_FAILED
    }
}

export const login = (userInfo) => {
    return dispatch => {
        dispatch(startLogin())
        console.log(userInfo)
        loginRequest(userInfo)
            .then(resp => {
                if (resp.status === 200) {
                    dispatch(loginSuccess(resp.data.data))
                } else {
                    dispatch(loginFailed())
                }
            })
    }
}