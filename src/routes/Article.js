import React from 'react'
import ArticleContainer from '../containers/ArticleContainer'

const Article = ({match}) => {

  return (
    <div>
      <ArticleContainer id={match.params.id} />
    </div>
  )
}

export default Article
