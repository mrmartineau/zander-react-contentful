import React, { Component } from 'react';
import ArticleListContainer from './containers/ArticleListContainer'
import './App.css';

export default class App extends Component {
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
      <div className="App">
        <div className="App-header">
          <h2>Zander Martineau</h2>
        </div>

        <ArticleListContainer handleSetPosts={this.handleSetPosts} posts={this.state.posts} />
      </div>
    )
  }
}
