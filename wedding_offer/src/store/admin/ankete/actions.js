export const FILL_ANKETE_LIST = 'FILL_ANKETE_LIST'
export const SET_CURRENT_ANKETE = 'SET_CURRENT_ANKETE'
export const CLEAR_CURRENT_ANKETE = 'CLEAR_CURRENT_ANKETE'
export const UPDATE_ANKETE_IN_LIST = 'UPDATE_ANKETE_IN_LIST'
export const ADD_ANKETE_TO_LIST = 'ADD_ANKETE_TO_LIST'
export const APPLY_TO_STORE = 'APPLY_TO_STORE'

export const fillAnketeListAction = (list) => ({
  type: FILL_ANKETE_LIST,
  payload: list
})

export const clearCurrentAnketeAction = () => ({
  type: CLEAR_CURRENT_ANKETE,
  payload: {
    id: 0,
    identifier: '',
    active: false,
    name: '',
    list_questions: [],
  }
})
