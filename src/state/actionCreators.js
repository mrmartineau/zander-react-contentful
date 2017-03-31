import { FETCH_ARTICLES, FETCH_WORK } from './actions'

export const fetchArticles = (articles) => {
  return {
    type: FETCH_ARTICLES,
    articles
  }
}

export const fetchWork = (work) => {
  return {
    type: FETCH_WORK,
    work
  }
}
