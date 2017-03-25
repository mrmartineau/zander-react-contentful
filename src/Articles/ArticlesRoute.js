import React, { Component } from 'react'
import ArticlesContainer from './ArticlesContainer'

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.handleSetPosts = this.handleSetPosts.bind(this);
  }

  state = {
    posts: []
  }

  handleSetPosts(response) {
    this.setState({posts: response})
  }

  render() {
    return (
      <div className="l-container content">
        <div className="contentList">
          <ArticlesContainer handleSetPosts={this.handleSetPosts} posts={this.state.posts} />
        </div>
      </div>
    )
  }
}
