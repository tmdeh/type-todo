import React, { ChangeEventHandler, useContext, useState } from 'react';
import styled from 'styled-components';
import { Todo, TodoContextType } from '../@types/todo';
import { TodoContext } from '../context';

const ItemElement = styled.div`
  display: flex;
`


const Item: React.FC<{todo: Todo}> = ({todo}) => {

  const{ toggleTodo } = useContext(TodoContext) as TodoContextType

  const handleCheck: ChangeEventHandler<HTMLInputElement>  = () => {
    toggleTodo(todo.id)
  }

  return <ItemElement>
    <div><input type="checkbox" onChange={handleCheck}/></div>
    <div>{todo.value}</div>
  </ItemElement>
}

export default Item;