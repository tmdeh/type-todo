import React, { useState } from 'react';
import styled from 'styled-components';
import { Todo } from '../context';
import Item from './Item';

const ListElement = styled.div`
  
`



const List: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  return <ListElement>
    <Item todo={todos[0]} />
  </ListElement>
}

export default List;