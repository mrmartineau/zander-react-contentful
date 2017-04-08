import React from 'react';
import ReactMarkdown from 'react-markdown';
import Header from '../partials/Header';

const ArticleView = props => (
  <article
    className="article h-entry"
    role="article"
    itemScope
    itemType="http://schema.org/Article"
  >
    <meta itemProp="author" content="Zander Martineau" />

    <Header
      title={props.title}
      subtitle={props.subtitle}
      date={props.date}
      originalUrl={props.originalUrl}
    />

    <div
      className="l-container content content--article e-content"
      itemProp="articleBody"
    >
      <ReactMarkdown source={props.body} />
    </div>
  </article>
);

export default ArticleView;
