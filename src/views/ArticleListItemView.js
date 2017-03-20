import React from 'react'
import months from '../utils/months'

const ArticleListItemView = (props) => {
  const formattedDate = new Date(props.date)
  return (
    <div>
    <li key='{props.key}'>
      <a className='infoLink' href='{props.url}' title='Read "{props.title}"'>
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
    </div>
  )
}

export default ArticleListItemView
