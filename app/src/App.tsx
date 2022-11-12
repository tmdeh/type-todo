import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AddTodo from './components/AddTodo';
import List from './components/List';
import TodoProvider from './context';

export const GlobalStyle = createGlobalStyle`

`;

const AppElement = styled.div`
  text-align: center;
`


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <TodoProvider>
          <AppElement>
            <AddTodo />
            <List />
          </AppElement>
      </TodoProvider>
    </>
  );
}

export default App;
