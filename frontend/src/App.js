import React, { Component } from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Courses from './components/Courses';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Courses {...this.props}></Courses>
    )
    
  }
}

/* export default graphql(
  gql`
  {
    caourses {
        id
        title
        author
        description
        topic
        url
    }
}
  `,
)(App) */