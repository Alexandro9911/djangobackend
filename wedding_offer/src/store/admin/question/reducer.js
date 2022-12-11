import {
  SET_SELECTED_QUESTION,
  CLEAR_SELECTED_QUESTION,
  ADD_NEW_ANSWER_TO_QUESTION,
  DELETE_ANSWER_FROM_QUESTION,
  MODIFY_ANSWER,
  CHANGE_NAME_OF_QUESTION,
  CHANGE_TITLE_OF_QUESTION,
  CHANGE_MULTIPLE_OF_QUESTION,
  CHANGE_ACTIVE_OF_QUESTION,
  SAVE_ALL_QUESTION,
  UPDATE_QUESTION_IN_LIST,
  FILL_LIST_QUESTIONS
} from "./actions";

const initialState = {
  questions: [], // список вопросов
  currentQuestion: {  // рабочий вопрос. По-сути буфер. Туда загружается вопрос, над которым будут изменения или просмотр.
    id: 0,
    name: '',
    identifier: '',
    active: true,
    multiple: false,
    answerIdentificator: '',
    title: '',
    answers: [],
    textUnderUsed: false,
    textUnder: ''
  },
  
}

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FILL_LIST_QUESTIONS: {
      return {
        ...state,
        questions: action.payload
      }
    }
    
    case UPDATE_QUESTION_IN_LIST : {
      let newList = []
      let oldList = state.questions.map((item) => {
        let currQuestion = item
        if(currQuestion.identifier === action.payload){
          currQuestion = state.currentQuestion
        }
        return currQuestion
        
      })
      newList = oldList
      return {
        ...state,
        questions: newList
      }
    }
    
    case SAVE_ALL_QUESTION : {
      let newQuestions = []
      let modifyedQuestions = state.questions.map((item) => {return item})
      modifyedQuestions.push(state.currentQuestion)
      newQuestions = modifyedQuestions
      return {
        ...state,
        questions: newQuestions
      }
    }
  
    case CHANGE_TITLE_OF_QUESTION: {
      let newQuestion = {}
    
      let oldQuestion = state.currentQuestion
    
      oldQuestion.title = action.payload
      newQuestion = oldQuestion
      return  {
        ...state,
        currentQuestion: newQuestion
      }
    }
  
    case CHANGE_MULTIPLE_OF_QUESTION: {
      let newQuestion = {}
    
      let oldQuestion = state.currentQuestion
    
      oldQuestion.multiple = action.payload
      newQuestion = oldQuestion
      return  {
        ...state,
        currentQuestion: newQuestion
      }
    }
  
    case CHANGE_ACTIVE_OF_QUESTION: {
      let newQuestion = {}
    
      let oldQuestion = state.currentQuestion
    
      oldQuestion.active = action.payload
      newQuestion = oldQuestion
      return  {
        ...state,
        currentQuestion: newQuestion
      }
    }
    
    case CHANGE_NAME_OF_QUESTION: {
      let newQuestion = {}
      
      let oldQuestion = state.currentQuestion
      
      oldQuestion.name = action.payload
      newQuestion = oldQuestion
      return  {
        ...state,
        currentQuestion: newQuestion
      }
    }
    /** Сохраняет один вариант ответа из вопроса. **/
    case MODIFY_ANSWER: {
      let question = state.currentQuestion
      let newAnswers = []
      newAnswers = state.currentQuestion.answers.map((item) => {
        let currAnswer = item
        if(currAnswer.identifier === action.payload.identifier){
          currAnswer.text = action.payload.text
          currAnswer.value = action.payload.value
        }
        return currAnswer
      })
      
      question.answers = newAnswers
      return {
        ...state,
        currentQuestion: question
      }
    }
    
    /** Удаление варианта ответа из вопроса **/
    case DELETE_ANSWER_FROM_QUESTION : {
      let question = state.currentQuestion
      let newAnswers = state.currentQuestion.answers.filter((item) => item.identifier !== action.payload.identifier)
      question.answers = newAnswers
      
      return {
        ...state,
        currentQuestion: question
      }
    }
  
    /** Добавление варианта ответа в вопрос **/
    case ADD_NEW_ANSWER_TO_QUESTION : {
      let question = state.currentQuestion
      let newAnswers = []
      if(question?.answers?.length > 0) {
        newAnswers = [...state.currentQuestion.answers, action.payload]
      } else {
        newAnswers.push(action.payload)
      }
      question.answers = newAnswers
      
      return {
        ...state,
        currentQuestion: question
      }
    }
    /** Выбор вопроса над которым работа идет **/
    case SET_SELECTED_QUESTION: {
      return {
        ...state,
        currentQuestion: action.payload
      }
    }
  
    /** Очистка рабочего вопроса **/
    case CLEAR_SELECTED_QUESTION: {
      return {
        ...state,
        currentQuestion: action.payload
      }
    }
  }
  return state
}