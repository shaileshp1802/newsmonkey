import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  // 0f40b84c556c491c9b12e1c4584cebd9
  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    )
  }
}
