import React from 'react';
import ArticlesContainer from './ArticlesContainer';
import Header from '../partials/Header';

const ArticlesRoute = () => (
  <main>
    <Header title="Articles" />
    <div className="l-container content">
      <ArticlesContainer />
    </div>
  </main>
);

export default ArticlesRoute;
