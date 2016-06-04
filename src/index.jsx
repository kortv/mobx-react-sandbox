import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observable, transaction} from 'mobx';
import Timer from './Timer';
import TimeReset from './TimeReset';
import App from './App';
import axios from 'axios';

const appState =  new class AppState {
  @observable nameWay = true
  @observable usersData = []
  @observable foundUsersData = []
  @observable curUser = {}
  @observable curUserId = 0
  @observable timer = 0;

  constructor() {
    this.resetTimer = TimeReset.bind(this);
  }
  loadUsersData = () => {
    axios.get('/data.json')
         .then(data => {
           transaction(() => {
             this.usersData = data.data;
             this.foundUsersData = data.data;
             this.curUser = data.data[0];
           })
         })
       .catch((response) => {
         console.log('get data error');
         console.log(response);
       });
  }

  handleClick = (e) => {
    const id = +e.currentTarget.getAttribute('data-id');
    const current = this.usersData.filter((obj) => obj.id === id);


      this.curUser = current;
      this.curUserId = id;
  }
  sortNames = (e) => {
    const kind = e.target.getAttribute('data-kind');
    const way = this.nameWay ? 1 : -1;
    const compareFunByName = (a, b) => {
      if (a.name > b.name) {
        return way;
      }
      if (a.name < b.name) {
        return -way;
      }
      return 0;
    };
    const compareFunByAge = (a, b) => (this.nameWay ? a.age - b.age : b.age - a.age);

    const sortedData = kind ?
      this.usersData.sort(compareFunByName) :
      this.usersData.sort(compareFunByAge);


      this.foundUsersData = sortedData;
      this.nameWay = !this.nameWay;

  }
  handleChange = (e) => {
    const regex = new RegExp(e.target.value, 'i');
    const found = this.usersData.filter(obj => regex.test(obj.name));
    this.foundUsersData = found;
  }

}();


ReactDOM.render(<App appState={appState} />, document.getElementById('root'));
