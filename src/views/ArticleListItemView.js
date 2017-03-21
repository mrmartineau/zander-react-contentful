import React from 'react'
import dashify from 'dashify'
import months from '../utils/months'

const ArticleListItemView = (props) => {
  const formattedDate = new Date(props.date)
  const url = `/articles/${dashify(props.title)}`
  return (
    <li key={props.key}>
      <a className='infoLink' href={url} title={'Read ' + props.title}>
        <div className='infoLink-content'>
          <div className='infoLink-content-title'>{props.title}</div>
          {
            props.excerpt ?
              <div className='infoLink-content-excerpt'>{props.excerpt}</div>
            : null
          }
        </div>
        <time className='infoLink-date'>{formattedDate.getDay()} {months[formattedDate.getMonth()]}</time>
      </a>
    </li>
  )
}

export default ArticleListItemView
