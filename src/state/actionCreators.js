import { SET_ARTICLES, FETCH_WORK } from './actions'
import { getEntries } from '../utils/contentful'

export const setArticles = (articles) => {
  return {
    type: SET_ARTICLES,
    articles
  }
}

export function fetchArticles () {
  return function (dispatch, getState) {
    // if (window.localStorage.getItem('articles')) {
    //   dispatch(fetchArticles(JSON.parse(window.localStorage.getItem('articles')))
    //   return;
    // }

    console.log('Fetching entries...')
    getEntries({
      content_type: 'article',
      order: 'sys.createdAt',
      select: 'sys,fields.title,fields.subtitle,fields.date',
    })
    .then((response) => {
      // console.log('response', response);
      dispatch(setArticles(response.items))
      window.localStorage.setItem('articles', JSON.stringify(response.items))
    })
    .catch((error) => {
      console.log('error occured')
      console.log(error)
    })
  }
}

export const fetchWork = (work) => {
  return {
    type: FETCH_WORK,
    work
  }
}
