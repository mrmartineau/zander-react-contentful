import React, { Component } from 'react'
import { getEntry } from '../utils/contentful'
import ReactMarkdown from 'react-markdown'

class Home extends Component {
  state = {
    bio: ''
  }

  componentDidMount () {
    console.log('Fetching bio entry...')
    if (window.localStorage.getItem('bio')) {
      this.setState({bio: JSON.parse(window.localStorage.getItem('bio'))})
      return;
    }
    getEntry('3AgxXXOhNCkqQEYkESSwCU')
      .then((response) => {
        this.setState({bio: response.fields.bio})
        window.localStorage.setItem('bio', JSON.stringify(response.fields.bio))
        console.log(response.fields);
      })
      .catch((error) => {
        console.log('error occured')
        console.log(error)
      })
  }

  render () {
    return(
      <div>
        <ReactMarkdown source={this.state.bio}/>
      </div>
    )
  }
}

export default Home
