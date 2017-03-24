import React from 'react'
import ArticleContainer from '../containers/ArticleContainer'

const Article = ({match}) => {

  return (
    <article>
      <h1>Article</h1>
      <ArticleContainer id={match.params.id} />
    </article>
  )
}

export default Article
