import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';
import Timer from './Timer';
import TimeReset from './TimeReset';
// import App from './App';

const appState =  new class AppState {
    @observable timer = 0;

    constructor() {
      this.resetTimer = TimeReset.bind(this);
    }

}();


ReactDOM.render(<Timer appState={appState} />, document.getElementById('root'));
