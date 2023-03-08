import logo from './logo.svg';
import { Global, css } from '@emotion/react'
import './App.css';

function App() {
  return (
    <div className="App">
      <Global
        styles={css`
          .some-class {
            color: hotpink !important;
            background: linear-gradient(to bottom, white, black);
          }
        `}
      />
      <Global
        styles={css`
          .some-class {
            color: red !important;
          }
        `}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
