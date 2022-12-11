export const QUESTION_EDIT_MODAL = 'QUESTION_EDIT_MODAL'
export const QUESTION_VIEW_MODAL = 'QUESTION_VIEW_MODAL'
export const CREATE_QUESTION_MODAL = 'CREATE_QUESTION_MODAL'

export const CREATE_ANKETE_MODAL = 'CREATE_ANKETE_MODAL'
export const EDIT_ANKETE_MODAL = 'EDIT_ANKETE_MODAL'
export const VIEW_ANKETE_MODAL = 'VIEW_ANKETE_MODAL'

export const VIEW_USER_MODAL = 'VIEW_USER_MODAL'
export const EDIT_USER_MODAL = 'EDIT_USER_MODAL'
export const CREATE_USER_MODAL = 'CREATE_USER_MODAL'

export const viewUserModalAction = (action) => ({
  type: VIEW_USER_MODAL,
  payload: action
})

export const editUserModalAction = (action) => ({
  type: EDIT_USER_MODAL,
  payload: action
})

export const createUserModalAction = (action) => ({
  type: CREATE_USER_MODAL,
  payload: action
})

export const questionModalEditAction = (action) => ({
  type: QUESTION_EDIT_MODAL,
  payload: action
})

export const questionModalViewAction = (action) => ({
  type: QUESTION_VIEW_MODAL,
  payload: action
})

export const createQuestionModalAction = (action) => ({
  type: CREATE_QUESTION_MODAL,
  payload: action
})

export const createAnketeModalAction = (action) => ({
  type: CREATE_ANKETE_MODAL,
  payload: action
})

export const editAnketeModalAction = (action) => ({
  type: EDIT_ANKETE_MODAL,
  payload: action
})


export const viewAnketeModalAction = (action) => ({
  type: VIEW_ANKETE_MODAL,
  payload: action
})
