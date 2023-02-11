export const SET_ANSWERS_STATISTIC = 'SET_ANSWERS_STATISTIC'
export const SET_CURRENT_ANSWER_VIEW = 'SET_CURRENT_ANSWER_VIEW'

export const setAnswersStatisticActions = (list) => ({
  type: SET_ANSWERS_STATISTIC,
  payload: list
})

export const setCurrentUserWithAnswersAction = (item) => ({
  type: SET_CURRENT_ANSWER_VIEW,
  payload: item
})