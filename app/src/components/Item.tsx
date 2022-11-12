import React, { ChangeEventHandler, useContext, useState } from 'react';
import styled from 'styled-components';
import { Button, FormCheck, FormControl } from "react-bootstrap"
import { Todo, TodoContextType } from '../@types/todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoContext } from '../context';

const ItemElement = styled.div`
  display: flex;
  justify-content: center;
`

const Text = styled.div<{ isDid: Boolean }>`
  ${props => props.isDid ? "text-decoration: line-through" : null};
`
const Wrapper = styled.div`
  display: flex;
  width: 100%;
`

const ButtonGroup = styled.div`
  
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
    <div><FormCheck onChange={handleCheck} /></div>
    <div>{change ?
      <div>
        <FormControl value={changeValue} onChange={handleChange} />
        <Button onClick={handleClickChangeComplete} variant="success">완료</Button>
      </div> : <Wrapper><Text isDid={todo.isDid}>{todo.value}</Text><ButtonGroup><Button onClick={() => setChange(true)} variant="primary">수정</Button><Button onClick={() => deleteTodo(todo.id)} variant="danger">삭제</Button></ButtonGroup></Wrapper>}
      </div>
  </ItemElement>
}

export default Item;