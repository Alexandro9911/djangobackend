export const SET_SELECTED_QUESTION = 'SET_SELECTED_QUESTION'
export const CLEAR_SELECTED_QUESTION = 'CLEAR_SELECTED_QUESTION'
export const ADD_NEW_ANSWER_TO_QUESTION = 'ADD_NEW_ANSWER_TO_QUESTION'
export const DELETE_ANSWER_FROM_QUESTION = 'DELETE_ANSWER_FROM_QUESTION'
export const MODIFY_ANSWER = 'MODIFY_ANSWER'
export const CHANGE_NAME_OF_QUESTION = 'CHANGE_NAME_OF_QUESTION'
export const CHANGE_ACTIVE_OF_QUESTION = 'CHANGE_ACTIVE_OF_QUESTION'
export const CHANGE_MULTIPLE_OF_QUESTION = 'CHANGE_MULTIPLE_OF_QUESTION'
export const CHANGE_TITLE_OF_QUESTION = 'CHANGE_TITLE_OF_QUESTION'
export const SAVE_ALL_QUESTION = 'SAVE_ALL_QUESTION'
export const UPDATE_QUESTION_IN_LIST = 'UPDATE_QUESTION_IN_LIST'

export const FILL_LIST_QUESTIONS = 'FILL_LIST_QUESTIONS'

export const fillListQuestionsAction = (list) => ({
  type: FILL_LIST_QUESTIONS,
  payload: list
})

export const updateQuestionInListAction = (identifier) => ({
  type: UPDATE_QUESTION_IN_LIST,
  payload: identifier
})

export const saveAllQuestionAction = () => ({
  type: SAVE_ALL_QUESTION,
  payload: true
})

export const changeNameOfQuestionAction = (value) => ({
  type: CHANGE_NAME_OF_QUESTION,
  payload: value
})

export const changeActiveOfQuestionAction = (value) => ({
  type: CHANGE_ACTIVE_OF_QUESTION,
  payload: value
})

export const changeMultipleOfQuestionAction = (value) => ({
  type: CHANGE_MULTIPLE_OF_QUESTION,
  payload: value
})

export const changeTitleOfQuestionAction = (value) => ({
  type: CHANGE_TITLE_OF_QUESTION,
  payload: value
})

export const clearSelectedQuestionAction = (question) => ({
  type: CLEAR_SELECTED_QUESTION,
  payload: question
})

export const setSelectedQuestionAction = (question) => ({
  type: SET_SELECTED_QUESTION,
  payload: question
})

export const addNewAnswerToQuestionAction = (answer) => ({
  type: ADD_NEW_ANSWER_TO_QUESTION,
  payload: answer
})

export const deleteAnswerFromQuestionAction = (answer) => ({
  type: DELETE_ANSWER_FROM_QUESTION,
  payload: answer
})

export const modifyAnswerAction = (identifier, value, text) => ({
  type: MODIFY_ANSWER,
  payload: {
    identifier: identifier,
    value: value,
    text: text
  }
})

