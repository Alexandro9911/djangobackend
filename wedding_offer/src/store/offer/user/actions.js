export const INIT_USER_STORE = 'INIT_USER_STORE'
export const SELECT_ERROR = 'SELECT_ERROR'

export const setSelectErrorAction = (value) => ({
  type: SELECT_ERROR,
  payload: value
})

export const initUserStoreAction = (user) => ({
  type: INIT_USER_STORE,
  payload: user
})
