import { FETCH_ARTICLES, ADD_ARTICLE, FETCH_CASE_STUDIES } from './actions';
import { getEntries, getEntry } from '../utils/contentful';

/**
 * Single articles
 */
// Add a single article
export const addArticle = (fields, id) => {
  return {
    type: ADD_ARTICLE,
    fields,
    id,
  };
};

// Fetch a single article
export const fetchArticle = id => {
  return function(dispatch, getState) {
    console.log('Fetching entry...');
    getEntry(id)
      .then(response => {
        console.log(response);
        dispatch(addArticle(response.fields, id));
      })
      .catch(error => {
        console.log('error occured');
        console.log(error);
      });
  };
};

/**
 * Article listing
 */
// Add all articles for the listing view
export const setArticles = articles => {
  return {
    type: FETCH_ARTICLES,
    articles,
  };
};

// Fetch all articles
export const fetchArticles = () => {
  return function(dispatch, getState) {
    console.log('Fetching entries...');
    getEntries({
      content_type: 'article',
      order: '-fields.date',
      select: 'sys,fields.title,fields.subtitle,fields.date',
    })
      .then(response => {
        dispatch(setArticles(response.items));
      })
      .catch(error => {
        console.log('error occured');
        console.log(error);
      });
  };
};

/**
 * Case Study listing
 */
// Add all case studies for the listing view
export const setCaseStudies = caseStudies => {
  return {
    type: FETCH_CASE_STUDIES,
    caseStudies,
  };
};

// Fetch all case studies
export const fetchCaseStudies = () => {
  return function(dispatch, getState) {
    console.log('Fetching work entries...');
    getEntries({
      content_type: 'work',
      order: '-fields.date',
    })
      .then(response => {
        console.log(response);
        dispatch(setCaseStudies(response.items));
      })
      .catch(error => {
        console.log('error occured');
        console.log(error);
      });
  };
};
