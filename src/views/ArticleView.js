import React from 'react'
import ReactMarkdown from 'react-markdown'

const ArticleView = (props) => {
  return (
    <article>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <div className="content">
        <ReactMarkdown source={props.body}/>
      </div>
    </article>
  )
}

export default ArticleView
