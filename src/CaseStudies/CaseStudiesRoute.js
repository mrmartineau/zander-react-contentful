import React from 'react';
import CaseStudiesContainer from './CaseStudiesContainer';
import Header from '../partials/Header';
import Main from '../partials/Main';

const CaseStudiesRoute = () => (
  <Main>
    <Header title="Work" />
    <CaseStudiesContainer />
  </Main>
);

export default CaseStudiesRoute;
