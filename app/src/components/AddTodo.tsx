import React, { useContext, useState } from "react";
import { Todo, TodoContextType } from "../@types/todo";
import { TodoContext } from "../context";

const AddTodo: React.FC = () => {
  const { addTodo } = useContext(TodoContext) as TodoContextType;
  const [data, setData] = useState<string>("");

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setData(e.currentTarget.value);
  }

  const handleSaveTodo = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(data);
  };


  return(
    <form className="Form" onSubmit={(e) => handleSaveTodo(e)}>
    <div>
      <div>
        <label htmlFor="name">TODO</label>
        <input onChange={handleForm} type="text" id="title" />
      </div>
    </div>
    <button disabled={data === undefined ? true : false}>Add Todo</button>
  </form>)
}


export default AddTodo;