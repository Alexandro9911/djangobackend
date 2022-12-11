export const SET_USERS_LIST =  'SET_USERS_LIST'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER'
export const MODIFY_USER_IN_LIST = 'MODIFY_USER_IN_LIST'
export const ADD_USER_TO_LIST = 'ADD_USER_TO_LIST'
export const APPLY_TO_STORE_USER = 'APPLY_TO_STORE_USER'

export const applyChangesToUserInListAction = () => ({
  type: MODIFY_USER_IN_LIST,
  payload: true
})

export const addUserToListAction = () => ({
  type: ADD_USER_TO_LIST,
  payload: true
})

export const setUsersListAction = (list) => ({
  type: SET_USERS_LIST,
  payload: list
})

export const setCurrentUserAction = (userObj) => ({
  type: SET_CURRENT_USER,
  payload: userObj
})

export const applyToStoreCurrentUserAction = (user) => ({
  type: APPLY_TO_STORE_USER,
  payload: user
})

export const clearCurrentUserAction = (userToken) => ({
  type: CLEAR_CURRENT_USER,
  payload: {
    identifier: '',
    id: 0,
    name: '',
    active: '',
    token: '',
    text_offer: '',
    is_admin: false
  }
})