import React, { Component } from 'react';
import { connect } from 'react-redux';
import Year from './Year';
import { fetchArticles } from '../state/actionCreators';

class ArticlesContainer extends Component {
  componentDidMount() {
    if (this.props.articles.length < 1) {
      this.props.dispatch(fetchArticles());
    }
  }

  render() {
    const { articles } = this.props;
    const years = [];
    let lastYear = null;

    articles.forEach(item => {
      if (item.year !== lastYear) {
        years.push(
          <Year year={item.year} articles={articles} key={item.year} />,
        );
      }
      lastYear = item.year;
    });

    return (
      <div className="contentList">
        {years}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps)(ArticlesContainer);
