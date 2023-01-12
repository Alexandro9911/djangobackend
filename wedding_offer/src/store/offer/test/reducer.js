import {INIT_STORE, SET_ANSWER} from "./actions";

const initialState = {
  userAnswers: [
  
  ]
}

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_STORE : {
      return {
        ...state,
        userAnswers: action.payload
      }
    }
  }
  return state
}