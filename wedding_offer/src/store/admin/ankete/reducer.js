import {
  ADD_ANKETE_TO_LIST,
  APPLY_TO_STORE,
  FILL_ANKETE_LIST,
  SET_CURRENT_ANKETE,
  CLEAR_CURRENT_ANKETE,
  UPDATE_ANKETE_IN_LIST
} from "./actions";

const initialState = {
  anketeList: [],
  currentAnkete: {
    id: 0,
    identifier: '',
    active: false,
    name: '',
    list_questions: [],
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
    case CLEAR_CURRENT_ANKETE: {
      return {
        ...state,
        currentAnkete: action.payload
      }
    }
  }
  return state
}