export const INIT_USER_STORE = 'INIT_USER_STORE'
export const SELECT_ERROR = 'SELECT_ERROR'
export const SHOW_POPUP_ACTION = 'SHOW_POPUP_ACTION'

export const setSelectErrorAction = (value) => ({
  type: SELECT_ERROR,
  payload: value
})

export const initUserStoreAction = (user) => ({
  type: INIT_USER_STORE,
  payload: user
})

export const showPopUpAction = (value) => ({
  type: SHOW_POPUP_ACTION,
  payload: value
})
