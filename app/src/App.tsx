import React from 'react';
import { createGlobalStyle } from 'styled-components';
import List from './components/List';

export const GlobalStyle = createGlobalStyle`

`;




const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <List />
      </div>
    </>
  );
}

export default App;
