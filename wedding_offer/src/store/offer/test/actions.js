export const INIT_STORE = 'INIT_STORE'
export const SET_ANSWER = 'SET_ANSWER'


export const initTestStoreAction = (list) => ({
  type: INIT_STORE,
  payload: list
})

export const setAnswerAction = (question, answerVariant, newState) => ({
  type: SET_ANSWER,
  payload: {
    question: question,
    answerVariant: answerVariant,
    newState: newState
  }
})
