import React from 'react';
import ArticlesContainer from './ArticlesContainer';
import Header from '../partials/Header';
import Main from '../partials/Main';

const ArticlesRoute = () => (
  <Main>
    <Header title="Articles" />
    <div className="l-container content">
      <ArticlesContainer />
    </div>
  </Main>
);

export default ArticlesRoute;
