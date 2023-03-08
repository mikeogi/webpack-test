import logo from './logo.svg';
import { Global, css } from '@emotion/react'
import './App.css';
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  p {
    color: orange;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Global
        styles={css`
          .some-class {
            color: hotpink !important;
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
