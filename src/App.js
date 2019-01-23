import React, { Component } from 'react';
import './App.css';

import War from './war';
import BasicShapes from './basicShapes';
import BasicShapesTwo from './basicShapesTwo';

class App extends Component {

  render() {
    return (
      <div className="App">
          <BasicShapes /><BasicShapesTwo /><br />
          <War />
      </div>
    );
  }
}

export default App;
