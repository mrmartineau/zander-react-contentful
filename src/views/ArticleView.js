import React from 'react'
import ReactMarkdown from 'react-markdown'
import months from '../utils/months'
import parseDomain from 'parse-domain'

const ArticleView = (props) => {
  const formattedDate = new Date(props.date)
  let formattedUrl = ''
  if (props.originalUrl) {
    formattedUrl = `${parseDomain(props.originalUrl).domain}.${parseDomain(props.originalUrl).tld}`
  }
  return (
    <article className="article h-entry" role="article" itemScope itemType="http://schema.org/Article">
      <meta itemProp="author" content="{{ site.myname }}" />

      <header className="header l-container header--article">
        <div className="header-inner">
          <h1 className="header-title p-name" itemProp="headline">{props.title}</h1>
          <h2 className="header-subtitle p-summary">{props.subtitle}</h2>
          <div className="header-meta">
            <time dateTime={props.date} className="dt-published">{formattedDate.getDay()} {months[formattedDate.getMonth()]}</time>
            {
              props.originalUrl &&
              <span>
                &bull; Originally posted at <a href={props.originalUrl}>{formattedUrl}</a>
              </span>
            }
            <meta itemProp="datePublished" content={props.date} />
          </div>
        </div>
        <hr className="hr--short" />
      </header>

      <div className="l-container content content--article e-content" itemProp="articleBody">
        <ReactMarkdown source={props.body}/>
      </div>
    </article>
  )
}

export default ArticleView
