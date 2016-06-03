import React, { Component } from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export default class TimerView extends Component {
     render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.appState.timer}
                </button>
                <DevTools />
                {/*<App />*/}
            </div>
        );
     }

     onReset = () => {
     	this.props.appState.resetTimer();
     }
};
