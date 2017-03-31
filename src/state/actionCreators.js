import {
  FETCH_ARTICLES,
  ADD_ARTICLE,
  FETCH_WORK
} from './actions'
import { getEntries, getEntry } from '../utils/contentful'

// Add a single article
export const addArticle = (fields, id) => {
  return {
    type: ADD_ARTICLE,
    fields,
    id
  }
}

// Fetch a single article
export const fetchArticle = (id) => {
  return function (dispatch, getState) {
    console.log('Fetching entry...')
    getEntry(id)
      .then((response) => {
        console.log(response);
        dispatch(addArticle(response.fields, id))
      })
      .catch((error) => {
        console.log('error occured')
        console.log(error)
      })
  }
}


// Add all articles for the listing view
export const setArticles = (articles) => {
  return {
    type: FETCH_ARTICLES,
    articles
  }
}

// Fetch all articles
export const fetchArticles = () => {
  return function (dispatch, getState) {
    console.log('Fetching entries...')
    getEntries({
      content_type: 'article',
      order: 'sys.createdAt',
      select: 'sys,fields.title,fields.subtitle,fields.date',
    })
    .then((response) => {
      dispatch(setArticles(response.items))
    })
    .catch((error) => {
      console.log('error occured')
      console.log(error)
    })
  }
}


// Fetch all work items
export const fetchWork = (work) => {
  return {
    type: FETCH_WORK,
    work
  }
}
