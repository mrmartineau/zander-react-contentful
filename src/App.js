import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './routes/Home'
import Articles from './routes/Articles'
import Article from './routes/Article'
import Work from './routes/Work'
import Styleguide from './routes/Styleguide'
import Masthead from './partials/Masthead'
import Footer from './partials/Footer'

const App = () => (
  <Router>
    <div>
      <Masthead/>
      <Route exact path="/" component={Home}/>
      <Route exact name="articles" path="/articles" component={Articles}/>
      <Route path="/articles/:id" component={Article}/>
      <Route exact path="/work" component={Work}/>
      <Route exact path="/styleguide" component={Styleguide}/>
      <Footer/>
    </div>
  </Router>
)

export default App;
