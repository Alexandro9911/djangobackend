export const FILL_ANKETE_LIST = 'FILL_ANKETE_LIST'
export const SET_CURRENT_ANKETE = 'SET_CURRENT_ANKETE'
export const CLEAR_CURRENT_ANKETE = 'CLEAR_CURRENT_ANKETE'
export const UPDATE_ANKETE_IN_LIST = 'UPDATE_ANKETE_IN_LIST'
export const ADD_ANKETE_TO_LIST = 'ADD_ANKETE_TO_LIST'
export const APPLY_TO_STORE = 'APPLY_TO_STORE'
export const SAVE_QUESTIONS_CHANGE = 'SAVE_QUESTIONS_CHANGE'
export const ADD_NEW_QUESTION_TO_ANKETE = 'ADD_NEW_QUESTION_TO_ANKETE'
export const REMOVE_QUESTION_FROM_ANKETE = 'REMOVE_QUESTION_FROM_ANKETE'
export const ACTIVATE_QUESTION_IN_ANKETE = 'ACTIVATE_QUESTION_IN_ANKETE'

export const fillAnketeListAction = (list) => ({
  type: FILL_ANKETE_LIST,
  payload: list
})

export const addAnketeToListAction = () => ({
  type: ADD_ANKETE_TO_LIST,
  payload: true
})

export const updateAnketeInListAction = () => ({
  type: UPDATE_ANKETE_IN_LIST,
  action: true
})

export const addNewQuestionToAnketeAction = (question) => ({
  type: ADD_NEW_QUESTION_TO_ANKETE,
  payload: question
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

export const setCurrentAnketeAction = (ankete) => ({
  type: SET_CURRENT_ANKETE,
  payload: ankete
})

export const applyAnketeToStoreAction = (ankete) => ({
  type: APPLY_TO_STORE,
  payload: ankete
})

export const saveQuestionsChangeAction = (value, newValue) => ({
  type: SAVE_QUESTIONS_CHANGE,
  payload: {
    value: value,
    newValue: newValue
  }
})

export const removeQuestionFromAnketeAction = (question) => ({
  type: REMOVE_QUESTION_FROM_ANKETE,
  payload: question
})

export const activateQuestionInAnketeAction = (question) => ({
  type: ACTIVATE_QUESTION_IN_ANKETE,
  payload: question
})
