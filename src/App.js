import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './routes/Home'
import Articles from './routes/Articles'
import Work from './routes/Work'
import Styleguide from './routes/Styleguide'
import Masthead from './partials/Masthead'
import Footer from './partials/Footer'

const App = () => (
  <Router>
    <div>
      <Masthead />
      <Route exact path="/" component={Home}/>
      <Route path="/articles" component={Articles}/>
      <Route path="/work" component={Work}/>
      <Route path="/styleguide" component={Styleguide}/>
      <Footer />
    </div>
  </Router>
)

export default App;
