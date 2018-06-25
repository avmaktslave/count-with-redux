import React, { Component } from 'react';
import './App.css';
import { increment, decrement, reset } from './redux/actions';
import store from './redux/reducer';

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  inc = () => {
    let amount = parseInt(this.refs.amount.value || 1);
    store.dispatch(increment(amount));
  };

  dec = () => {
    let amount = parseInt(this.refs.amount.value || 1);
    store.dispatch(decrement(amount));
  };

  reset = () => store.dispatch(reset());

  render() {
    const count = store.getState().count;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{count}</h1>
          <div className="buttonWrap">
            <button onClick={this.dec}>-</button>
            <button onClick={this.reset}>RESET</button>
            <button onClick={this.inc}>+</button>
          </div>
          <input type="text" ref="amount" defaultValue="1" />
        </header>
      </div>
    );
  }
}

export default App;
