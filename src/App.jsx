import React, { Component } from 'react';
// import Button from './components/Button';
import './../sass/main.scss';
import UserList from './components/UserList';
import Toolbar from './components/Toolbar';
import SearchBar from './components/SearchBar';
import ActiveUser from './components/ActiveUser';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export default class App extends Component {
  constructor({appState}) {
    super();
    this.state = appState;
    this.state.loadUsersData();
  }


  render() {
    return (
      <div className='container app'>
        {/*<DevTools />*/}
        <SearchBar handleChange={this.state.handleChange} />
        <Toolbar sortNames={this.state.sortNames} />
        <div className='row'>
          <ActiveUser user={ this.state.curUser } />
          <UserList handleClick={ this.state.handleClick } users={ this.state.foundUsersData } />
        </div>
      </div>
    );
  }
}
