import {
  SET_ANSWERS_STATISTIC,
  SET_CURRENT_ANSWER_VIEW
} from "./actions";

const initialState = {
  answersStatistic: [],
  attendanceStatistic: [],
  currentAnswersView: {}
}

export const statisticReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWERS_STATISTIC: {
      return {
        ...state,
        answersStatistic: action.payload
      }
    }
    case SET_CURRENT_ANSWER_VIEW: {
      return {
        ...state,
        currentAnswersView: action.payload
      }
    }
  }
  return state
}
