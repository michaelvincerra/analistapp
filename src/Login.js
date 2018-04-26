/* global fetch */
import React, { Component } from 'react'
import './App.css'
import Picker from 'react-picker'

const USER_PATH = 'https://prova1234-35cf3.firebaseio.com/'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      usernames: []
    }
  }

  componentWillMount () {
  /* eslint-disable no-console */ // Only called once; do async tasks.
    fetch(USER_PATH)
      .then((response) => response.json())
      .then((users) => {
        this.setState({usernames: Object.keys(users)})

        /*
        Example users:
        {
          "-KxGQAx94JTlD8LiE_MI": {
              "password": "xyz",
              "username": "foobar"
          },
          "-KxGR1OGePprxIAOJMYO": {
              "password": "xyz",
              "username": "xyz"
          }
        }
        /* (var usernames = ['foobar', 'xyz'] */
        /* Restart: https://reactjs.org/docs/lists-and-keys.html */
        // for (let i = 0; i < Object.keys(users).length; i++) {
        //   this.state.usernames.push(Object.keys(users))
        // }
      })
      .catch(error => console.log(error))
  }

  render () {
    return (
      <ul>
        <li>
          <label>Choose User</label>
          <div className='edit'>
            <Picker
              ref='Something'
              value={this.state.usernames}
            />
          </div>
        </li>
      </ul>
    )
  }
}
