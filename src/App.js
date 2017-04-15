import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './state/store';

import Articles from './Articles/ArticlesRoute';
import CaseStudies from './CaseStudies/CaseStudiesRoute';
import Article from './Article/ArticleRoute';
import Styleguide from './routes/Styleguide';
import Masthead from './partials/Masthead';
import Footer from './partials/Footer';
import Icons from './partials/Icons';

const App = () => (
  <Router>
    <Provider store={store}>
      <div>
        <Icons />
        <Masthead />
        <Route exact name="articles" path="/articles" component={Articles} />
        <Route path="/articles/:id" component={Article} />
        <Route exact path="/work" component={CaseStudies} />
        <Route exact path="/styleguide" component={Styleguide} />
        <Footer />
      </div>
    </Provider>
  </Router>
);

export default App;
