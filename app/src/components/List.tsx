import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { TodoContextType } from '../@types/todo';
import { TodoContext } from '../context';
import Item from './Item';

const ListElement = styled.div`
  overflow: scroll;
`

const List: React.FC = () => {
  const { todos } = useContext(TodoContext) as TodoContextType;
  return <ListElement>
    <div></div>
    {todos.map(v => {
      return <Item todo={v} key={v.id}/>
    })}
  </ListElement>
}

export default List;