import React, { Component } from 'react'
import { render } from 'react-dom'
import FoodList from './FoodList';

export default class App extends Component {
  render() {
      return (
        <div id="App">
            <FoodList />
        </div>
        );
  }
}

