import React, { Component } from 'react';
import './App.css';

// import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      {username: 'Ines'},
      {username: 'Kathryn'},
      {username: 'Gus'}
    ]
  }

  switchUsernameHandler = (newUsername) => {
    this.setState({
      usernames: [
        {username: newUsername},
        {username: 'Kathryn'},
        {username: 'Gustavo'}
      ] 
    })
  }

  usernameChangedHandler = (event) => {
    this.setState({
      usernames: [
        {username: 'Ines'},
        {username: event.target.value},
        {username: 'Gustavo'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button 
        onClick={this.switchUsernameHandler.bind(this, 'INES!')}  >Switch Usernames!</button>
        <UserOutput 
        username = {this.state.usernames[0].username}
        
        />
    
        <UserOutput 
        username = {this.state.usernames[1].username} 
        click={this.switchUsernameHandler.bind(this, 'Ines Daniel')}
        changed={this.usernameChangedHandler} />

        <UserOutput username = {this.state.usernames[2].username} />
      </div>
    );
  }
}

export default App;

//button switches state. yay!
//input field is read only. why???? 


/* <UserInput 
        click={this.switchUsernameHandler.bind(this, 'Ines Daniel')} 
        username = {this.state.usernames[0].username} changed={this.usernameChangedHandler} /> */