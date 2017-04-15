import React, { Component } from 'react';
import { connect } from 'react-redux';
import CaseStudiesItemView from './CaseStudiesItemView';
import { fetchCaseStudies } from '../state/actionCreators';

class CaseStudiesContainer extends Component {
  componentDidMount() {
    if (this.props.caseStudies.length < 1) {
      this.props.dispatch(fetchCaseStudies());
    }
  }

  render() {
    const { caseStudies } = this.props;
    const caseStudiesList = caseStudies.map(item => {
      return <CaseStudiesItemView {...item.fields} key={item.sys.id} />;
    });

    return (
      <div>
        {caseStudies.length > 0 ? caseStudiesList : <div>Loading</div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    caseStudies: state.caseStudies,
  };
};

export default connect(mapStateToProps)(CaseStudiesContainer);
