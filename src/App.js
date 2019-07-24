import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserOutput username = "ines" />
        <UserOutput username = "kathryn" />
        <UserOutput username = "gus" />
      </div>
    );
  }
}

export default App;
