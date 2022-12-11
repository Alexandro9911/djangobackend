
export const SET_AUTH_SUCCESS = 'SET_AUTH_SUCCESS'
export const CLEAR_AUTH = 'CLEAR_AUTH'
export const SET_PERMISSION = 'SET_PERMISSION'

export const setAuthSuccessAction = () => ({
  type: SET_AUTH_SUCCESS,
  payload: true
})

export const clearAuthAction = () => ({
  type: CLEAR_AUTH,
  payload: false
})

export const setPermissionAction = (permission) => ({
  type: SET_PERMISSION,
  payload: permission
})
