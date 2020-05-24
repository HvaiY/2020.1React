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
    window.localStorage.removeItem('authToken')
    window.sessionStorage.removeItem('authToken')
    window.localStorage.removeItem('userInfo')
    window.sessionStorage.removeItem('userInfo')
    return {
        type: actionTypes.LOGIN_FAILED
    }
}

export const logout = () => {
    return dispatch => {
        //实际项目中可能需要告知后端，根据具体需求来
        dispatch(loginFailed())
    }
}
export const login = (userInfo) => {
    return dispatch => {
        dispatch(startLogin())
        console.log(userInfo)
        loginRequest(userInfo)
            .then(resp => {
                if (resp.data.code === 200) {
                    const {
                        authToken,
                        ...userInfo
                    } = resp.data.data

                    if (userInfo.remember) {
                        window.localStorage.setItem('authToken', authToken)
                        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
                    } else {
                        window.sessionStorage.setItem('authToken', authToken)
                        window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
                    }
                    dispatch(loginSuccess(resp.data.data))
                } else {
                    dispatch(loginFailed())
                }
            })
    }
}

export const changeAvatar = (avatar) => {

    return {
        type: actionTypes.CHANGE_AVATAR,
        payload: {
            avatar
        }
    }
}