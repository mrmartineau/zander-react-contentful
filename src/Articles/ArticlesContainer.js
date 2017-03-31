import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticlesItemView from './ArticlesItemView'
import { fetchArticles } from '../state/actionCreators'

class ArticlesContainer extends Component {
  componentDidMount () {
    if (this.props.articles.length < 1) {
      this.props.dispatch(fetchArticles())
    }
  }

  render () {
    const { articles } = this.props;
    const articlesList = articles.map((item) => {
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
              articles.length > 0 ?
                articlesList
              : <div>Loading</div>
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(ArticlesContainer)
