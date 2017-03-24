import React, { Component } from 'react'
import { createClient } from 'contentful'
import ArticleView from '../views/ArticleView'

const SPACE_ID = 'stjy307y3wj0'
const ACCESS_TOKEN = '6762def0bcd0ce026042e11460ffbb611396a4709c76a6ac0a9a86b4a8db2969'
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

class ArticleContainer extends Component {
  state = {
    content: {}
  }

  componentDidMount () {
    console.log('Fetching entry...')
    if (window.localStorage.getItem(this.props.id)) {
      this.setState({content: JSON.parse(window.localStorage.getItem(this.props.id))})
      return;
    }
    client.getEntry(this.props.id)
      .then((response) => {
        this.setState({content: response.fields})
        window.localStorage.setItem(this.props.id, JSON.stringify(response.fields))
        console.log(response.fields);
      })
      .catch((error) => {
        console.log('error occured')
        console.log(error)
      })
  }

  render () {
    // const {posts} = this.state;
    // console.log('posts', posts);
    const {title, subtitle, date, body} = this.state.content;

    return (
      <div>
        { title &&
        <ArticleView
          title={title}
          subtitle={subtitle}
          date={date}
          body={body}
        /> }
      </div>
    )
  }
}

export default ArticleContainer
