import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AddTodo from './components/AddTodo';
import List from './components/List';
import TodoProvider from './context';

export const GlobalStyle = createGlobalStyle`

`;




const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <TodoProvider>
          <div className="App">
            <AddTodo />
            <List />
          </div>
      </TodoProvider>
    </>
  );
}

export default App;
