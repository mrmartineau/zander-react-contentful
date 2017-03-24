import React from 'react'
// import dashify from 'dashify'
import months from '../utils/months'

const ArticleListItemView = (props) => {
  const {title, subtitle, date, id} = props;
  const formattedDate = new Date(date)
  // const url = `/articles/${dashify(title)}`
  const url = `/articles/${id}`
  return (
    <li>
      <a className='infoLink' href={url} title={'Read ' + title}>
        <div className='infoLink-content'>
          <div className='infoLink-content-title'>{title}</div>
          {
            subtitle ?
              <div className='infoLink-content-excerpt'>{subtitle}</div>
            : null
          }
        </div>
        <time className='infoLink-date'>{formattedDate.getDay()} {months[formattedDate.getMonth()]}</time>
      </a>
    </li>
  )
}

export default ArticleListItemView
