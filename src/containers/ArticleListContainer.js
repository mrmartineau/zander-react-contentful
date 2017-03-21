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
      content_type: 'article'
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
    const {posts} = this.props
    return (
      <ul>
        {
          posts.map((item) => (
            <ArticleListItemView
              title={item.fields.title}
              subtitle={item.fields.subtitle}
              date={item.fields.date}
              key={item.sys.id}
            />
          ))
        }
      </ul>
    )
  }
}

export default ArticleListContainer
