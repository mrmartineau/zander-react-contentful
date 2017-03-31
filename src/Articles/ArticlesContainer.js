import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEntries } from '../utils/contentful'
import ArticlesItemView from './ArticlesItemView'
import { fetchArticles } from '../state/actionCreators'

class ArticlesContainer extends Component {
  constructor(props) {
    super(props);
    this.handleFetchArticles = this.handleFetchArticles.bind(this);
  }

  componentDidMount () {
    if (window.localStorage.getItem('articles')) {
      this.handleFetchArticles(JSON.parse(window.localStorage.getItem('articles')))
      return;
    }
    console.log('Fetching entries...')

    getEntries({
      content_type: 'article',
      order: 'sys.createdAt',
      select: 'sys,fields.title,fields.subtitle,fields.date',
    })
    .then((response) => {
      console.log('response', response);
      this.handleFetchArticles(response.items)
      window.localStorage.setItem('articles', JSON.stringify(response.items))
    })
    .catch((error) => {
      console.log('error occured')
      console.log(error)
    })
  }

  handleFetchArticles(response) {
    this.props.dispatch(fetchArticles(response))
  }

  render () {
    const { articles } = this.props;
    // console.log('articles', articles);
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
