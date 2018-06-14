import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "./redux";

const initialState = { count: 0 };

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
    case "DECREMENT":
      return { count: state.count - action.amount };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

function increment(amount) {
  return { type: "INCREMENT", amount };
}
function decrement(amount) {
  return { type: "DECREMENT", amount };
}

function reset() {
  return { type: "RESET" };
}

const store = createStore(reducer, initialState);

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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{count}</h1>
          <button onClick={this.dec}>-</button>
          <button onClick={this.reset}>RESET</button>
          <button onClick={this.inc}>+</button>
          <input type="text" ref="amount" defaultValue="1" />
        </header>
      </div>
    );
  }
}

export default App;
