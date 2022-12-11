import {
  QUESTION_VIEW_MODAL,
  QUESTION_EDIT_MODAL,
  CREATE_QUESTION_MODAL,
  
  VIEW_ANKETE_MODAL,
  EDIT_ANKETE_MODAL,
  CREATE_ANKETE_MODAL,
  
  CREATE_USER_MODAL,
  EDIT_USER_MODAL,
  VIEW_USER_MODAL
} from "./actions";

const initialState = {
  questionModalEditState: false,
  questionModalViewState: false,
  questionCreate: false,
  
  anketeModalViewState: false,
  anketeModalEditState: false,
  anketeModalCreateState: false,
  
  userModalViewState: false,
  userModalEditState: false,
  userModalCreateState: false
}

export const modalsAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case EDIT_USER_MODAL : {
      return {
        ...state,
        userModalEditState: action.payload
      }
    }
    
    case CREATE_USER_MODAL: {
      return {
        ...state,
        userModalCreateState: action.payload
      }
    }
    
    case VIEW_USER_MODAL: {
      return {
        ...state,
        userModalViewState: action.payload
      }
    }
    
    case QUESTION_EDIT_MODAL : {
      return {
        ...state,
        questionModalEditState: action.payload
      }
    }
    case QUESTION_VIEW_MODAL : {
      return {
        ...state,
        questionModalViewState: action.payload
      }
    }
    case CREATE_QUESTION_MODAL: {
      return {
        ...state,
        questionCreate: action.payload
      }
    }
    
    case EDIT_ANKETE_MODAL : {
      return {
        ...state,
        anketeModalEditState: action.payload
      }
    }
    
    case VIEW_ANKETE_MODAL: {
      return {
        ...state,
        anketeModalViewState: action.payload
      }
    }
    
    case CREATE_ANKETE_MODAL: {
      return {
        ...state,
        anketeModalCreateState: action.payload
      }
    }
  }
  return state
}