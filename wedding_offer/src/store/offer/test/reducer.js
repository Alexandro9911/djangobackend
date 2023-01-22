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
    
    case SET_ANSWER : {
      
      let oldQuestionsList = state.userAnswers
      
      let newList = []
      
      const oldAnswersToQuestion = action.payload.question.answer_variants
      
      const newAnswersToQuestion = oldAnswersToQuestion.map((variant) => {
        if(variant.identifier === action.payload.answerVariant.identifier){
          return {
            ...variant,
            checked: action.payload.newState
          }
        } else {
          if(!action.payload.question.question_multiple){
            return {
              ...variant,
              checked: false
            }
          } else {
            return variant
          }
        }
      })
      
      let newQuestion = {}
      
      newQuestion = action.payload.question
      
      newQuestion.answer_variants = newAnswersToQuestion
      
      newList = oldQuestionsList.map((q) => {
        if(q.question_id === action.payload.question_id && q.question_identifier === action.payload.question_identifier){
          return newQuestion
        } else {
          return q
        }
      })
      
      return {
        ...state,
        userAnswers: newList
      }
    }
  }
  return state
}