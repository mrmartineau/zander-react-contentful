import React from 'react'
import parseDomain from 'parse-domain'
import months from '../utils/months'

const Header = (props) => {
  let formattedDate = ''
  if (props.date) {
    formattedDate = new Date(props.date)
  }

  let formattedUrl = ''
  if (props.originalUrl) {
    formattedUrl = `${parseDomain(props.originalUrl).domain}.${parseDomain(props.originalUrl).tld}`
  }

  return (
    <header className="header l-container header--article">
      <div className="header-inner">
        <h1 className="header-title p-name" itemProp="headline">{props.title}</h1>

        {
          props.subtitle &&
          <h2 className="header-subtitle p-summary">{props.subtitle}</h2>
        }

        {
          props.date &&
          <div className="header-meta">
            <time dateTime={props.date} className="dt-published">{formattedDate.getDay()} {months[formattedDate.getMonth()]} {formattedDate.getUTCFullYear()} </time>
            {
              props.originalUrl &&
              <span>
                &bull; Originally posted at <a href={props.originalUrl}>{formattedUrl}</a>
              </span>
            }
            <meta itemProp="datePublished" content={props.date} />
          </div>
        }

      </div>
      <hr className="hr--short" />
    </header>
  )
}

export default Header
