import React from "react";
import logo from '../logo.svg';

const Main = () => {
    return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p> Edit
        <code>src/App.js</code>
        and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      <a className="App-link" href="/sample" rel="noopener noreferrer">Sample Page</a>
      <a className="App-link" href="/test" rel="noopener noreferrer">Test Page</a>
    </header>
  </div>
}

export default Main