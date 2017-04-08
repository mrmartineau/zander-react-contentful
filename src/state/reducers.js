import { FETCH_ARTICLES, ADD_ARTICLE } from './actions';

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
  return Object.assign({}, state, {
    articles: action.articles,
  });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return addArticle(state, action);
    case FETCH_ARTICLES:
      return fetchArticles(state, action);
    default:
      return state;
  }
};

export default rootReducer;
