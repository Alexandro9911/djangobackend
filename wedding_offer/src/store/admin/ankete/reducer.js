import {
  ADD_ANKETE_TO_LIST,
  APPLY_TO_STORE,
  FILL_ANKETE_LIST,
  SET_CURRENT_ANKETE,
  CLEAR_CURRENT_ANKETE,
  UPDATE_ANKETE_IN_LIST,
  SAVE_QUESTIONS_CHANGE,
  ADD_NEW_QUESTION_TO_ANKETE,
  REMOVE_QUESTION_FROM_ANKETE,
  ACTIVATE_QUESTION_IN_ANKETE
} from "./actions";

const initialState = {
  anketeList: [],
  currentAnkete: {
    id: 0,
    identifier: '',
    active: false,
    name: '',
    ankete_questions: [],
  }
}

export const anketeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_ANKETE_LIST: {
      return {
        ...state,
        anketeList: action.payload
      }
    }
    case APPLY_TO_STORE : {
      return {
        ...state,
        currentAnkete: action.payload
      }
    }
    case CLEAR_CURRENT_ANKETE: {
      return {
        ...state,
        currentAnkete: action.payload
      }
    }
    case SET_CURRENT_ANKETE : {
      return {
        ...state,
        currentAnkete: action.payload
      }
    }
    
    case ADD_ANKETE_TO_LIST : {
      return {
        ...state,
        anketeList: [...state.anketeList, state.currentAnkete]
      }
    }
    
    case UPDATE_ANKETE_IN_LIST : {
      let newList = state.anketeList.map((item) => {
        if(item.identifier === state.currentAnkete.identifier){
          return state.currentAnkete
        } else {
          return item
        }
      })
      
      return {
        ...state,
        anketeList: newList
      }
    }
    
    case REMOVE_QUESTION_FROM_ANKETE: {
      let newList = state.currentAnkete.ankete_questions.map(
        (item) => {
          if(item.wrapperIdentifier !== action.payload.wrapperIdentifier){
            return {
              ...item,
              wrapperActive: false
            }
          } else {
            return item
          }
        }
      )
      let newAnkete = state.currentAnkete
      newAnkete.ankete_questions = newList
      return {
        ...state,
        currentAnkete: newAnkete
      }
    }
  
    case ACTIVATE_QUESTION_IN_ANKETE: {
      let newList = state.currentAnkete.ankete_questions.map(
        (item) => {
          if(item.wrapperIdentifier !== action.payload.wrapperIdentifier){
            return {
              ...item,
              wrapperActive: true
            }
          } else {
            return item
          }
        }
      )
      let newAnkete = state.currentAnkete
      newAnkete.ankete_questions = newList
      return {
        ...state,
        currentAnkete: newAnkete
      }
    }
    
    case ADD_NEW_QUESTION_TO_ANKETE: {
      let oldQuestions = state.currentAnkete.ankete_questions
      let newQuestions = []
      
      oldQuestions.push(action.payload)
      newQuestions = oldQuestions
      
      let oldAnkete = state.currentAnkete
      let newAnkete = {}
      
      oldAnkete.ankete_questions = newQuestions
      newAnkete = oldAnkete
      return {
        ...state,
        currentAnkete: newAnkete
      }
    }
    
    case SAVE_QUESTIONS_CHANGE : {
      let oldQuestions = state.currentAnkete.ankete_questions
      let newQuestions = []
      newQuestions = oldQuestions.map((item) => {
        if(item.wrapperIdentifier === action.payload.value.wrapperIdentifier){
          return action.payload.newValue
        } else {
          return item
        }
      })
      let curAnkete = {}
      let newAnkete = state.currentAnkete
      newAnkete.ankete_questions = newQuestions
      curAnkete = newAnkete
      console.log(curAnkete)
      return {
        ...state,
        currentAnkete:  curAnkete
      }
    }
  }
  return state
}