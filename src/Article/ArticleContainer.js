import React, { Component } from 'react'
import { getEntry } from '../utils/contentful'
import ArticleView from './ArticleView'

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
    getEntry(this.props.id)
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
    const {title, subtitle, date, body, originalUrl} = this.state.content;

    return (
      <div>
        { title ?
          <ArticleView
            title={title}
            subtitle={subtitle}
            date={date}
            body={body}
            originalUrl={originalUrl}
          />
          : <div>Loading</div>
        }
      </div>
    )
  }
}

export default ArticleContainer
