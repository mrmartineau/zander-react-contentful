import React, { Component } from 'react';
import { createClient } from 'contentful';
import months from './utils/months';
import './App.css';

const SPACE_ID = 'stjy307y3wj0';
const ACCESS_TOKEN = '6762def0bcd0ce026042e11460ffbb611396a4709c76a6ac0a9a86b4a8db2969'
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }
  componentDidMount() {
    console.log('\x1b[ Fetching entries ... \x1b[')
    client.getEntries({
      content_type: "article"
    })
      .then((response) => {
        this.setState({posts: response.items });
      })
      .catch((error) => {
        console.log('\x1b[error occured')
        console.log(error)
      })
  }

  render() {


    return (
      <div className="App">
        <div className="App-header">
          <h2>Zander Martineau</h2>
        </div>

        <ul>
          {
            this.state.posts.map(item => {
              const formattedDate = new Date(item.fields.date);
              return <li key={item.sys.id}>
                  <h2>{item.fields.title}</h2>
                  <h3>{item.fields.subtitle}</h3>
                  <time>{formattedDate.getDay()} {months[formattedDate.getMonth()]}</time>
                </li>
            })
          }
        </ul>
      </div>
    );
  }
}
