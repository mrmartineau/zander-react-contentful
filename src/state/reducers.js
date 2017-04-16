import { FETCH_ARTICLES, ADD_ARTICLE, FETCH_CASE_STUDIES } from './actions';

const DEFAULT_STATE = {
  articles: [],
  article: {},
  caseStudies: [],
};

// Single articles are added to the `article` object
const addArticle = (state, action) => {
  const newArticleData = {};
  Object.assign(newArticleData, state.article, { [action.id]: action.fields });
  return Object.assign({}, state, { article: newArticleData });
};

// The list of articles are added to the `articles` array
const fetchArticles = (state, action) => {
  const newArticles = action.articles.map(item => {
    item.year = new Date(item.fields.date).getFullYear();
    return item;
  });
  return Object.assign({}, state, {
    articles: newArticles,
  });
};

// The list of case studies are added to the `caseStudies` array
const fetchCaseStudies = (state, action) => {
  return Object.assign({}, state, {
    caseStudies: action.caseStudies,
  });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return addArticle(state, action);
    case FETCH_ARTICLES:
      return fetchArticles(state, action);
    case FETCH_CASE_STUDIES:
      return fetchCaseStudies(state, action);
    default:
      return state;
  }
};

export default rootReducer;
