import { SET_ARTICLES } from './actions'

const DEFAULT_STATE = {
  articles: [],
  caseStudies: [],
}

const setArticles = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    articles: action.articles
  })
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return setArticles(state, action)
    default:
      return state
  }
}

export default rootReducer
