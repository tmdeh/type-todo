import React, { ChangeEventHandler, useContext, useState } from 'react';
import styled from 'styled-components';
import { Todo, TodoContextType } from '../@types/todo';
import { TodoContext } from '../context';

const ItemElement = styled.div`
  display: flex;
`

const Text = styled.div<{ isDid: Boolean }>`
  ${props => props.isDid ? "text-decoration: line-through" : null};
`

const Item: React.FC<{ todo: Todo }> = ({ todo }) => {

  const { toggleTodo, updateTodo, deleteTodo } = useContext(TodoContext) as TodoContextType

  const [changeValue, setChangeValue] = useState<string>(todo.value);
  const [change, setChange] = useState<boolean>(false);

  const handleCheck: ChangeEventHandler<HTMLInputElement> = () => {
    toggleTodo(todo.id)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setChangeValue(e.currentTarget.value)
  }

  const handleClickChangeComplete = () => {
    updateTodo({ id: todo.id, todo: changeValue });
    setChange(false);
  }

  //TODO 체크시 줄긋기
  //TOdo 수정 기능
  //TODO 삭제 기능

  return <ItemElement>
    <div><input type="checkbox" onChange={handleCheck} /></div>
    <div>{change ?
      <div>
        <input type="text" value={changeValue} onChange={handleChange} />
        <button onClick={handleClickChangeComplete}>완료</button>
      </div> : <div><button onClick={() => setChange(true)}>수정</button><button onClick={() => deleteTodo(todo.id)}>삭제</button><Text isDid={todo.isDid}>{todo.value}</Text></div>}</div>
  </ItemElement>
}

export default Item;