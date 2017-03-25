import React, { Component } from 'react'
import { getEntries } from '../utils/contentful'
import ArticlesItemView from './ArticlesItemView'

class ArticlesContainer extends Component {
  componentDidMount () {
    if (window.localStorage.getItem('posts')) {
      this.props.handleSetPosts(JSON.parse(window.localStorage.getItem('posts')))
      return;
    }
    console.log('Fetching entries...')

    getEntries({
      content_type: 'article',
      order: 'sys.createdAt',
    })
      .then((response) => {
        this.props.handleSetPosts(response.items)
        window.localStorage.setItem('posts', JSON.stringify(response.items))
      })
      .catch((error) => {
        console.log('\x1b[error occured')
        console.log(error)
      })
  }

  render () {
    const {posts} = this.props;
    console.log('posts', posts);
    const postsList = posts.map((item) => {
      const {title, subtitle, date} = item.fields;
      const id = item.sys.id;
      return (
        <ArticlesItemView
          title={title}
          subtitle={subtitle}
          date={date}
          id={id}
          key={id}
        />
      )
    })

    return (
      <div className="contentList">
        <div className="contentList-group">
          <ul className="contentList-group-items">
            {
              posts.length > 0 ?
                postsList
              : <div>Loading</div>
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default ArticlesContainer
