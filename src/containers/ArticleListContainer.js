import React, { Component } from 'react'
import { createClient } from 'contentful'
import ArticleListItemView from '../views/ArticleListItemView'

const SPACE_ID = 'stjy307y3wj0'
const ACCESS_TOKEN = '6762def0bcd0ce026042e11460ffbb611396a4709c76a6ac0a9a86b4a8db2969'
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

class ArticleListContainer extends Component {
  componentDidMount () {
    console.log('\x1b[ Fetching entries ... \x1b[')
    client.getEntries({
      content_type: 'article',
      order: 'sys.createdAt',
    })
      .then((response) => {
        this.props.handleSetPosts(response.items)
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
        <ArticleListItemView
          title={title}
          subtitle={subtitle}
          date={date}
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

export default ArticleListContainer
