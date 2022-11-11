import React, { useReducer, useContext, createContext, Dispatch } from 'react';


export type Todo = {
  id: number,
  value: string,
  isDid: boolean
}

export type TodoContextType = {
  todos: Todo[],
  addTodo: (value: string) => void,
  updateTodo: (value: updateDTO) => void,
  deleteTodo: (id: number) => void,
  toggleTodo: (id: number) => void
}

type updateDTO = { id: number, todo: string }

const TodoContext = React.createContext<TodoContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const TodoProvider : React.FC<Props> = ({children}) => {
  const [todos, setTodos] = React.useState<Todo[]>([])
  
  const addTodo = (value: string) => {
    let todo = {id: 0, value: value, isDid: false}
    todo.id = !!todos.pop() ? todos[todos.length].id + 1 : 0
    setTodos(todos.concat(todo));
  }

  const updateTodo = (value: updateDTO) => {
    setTodos(todos.map((v, i) => {
      if(v.id === value.id) {
        v.value = value.todo;
      }
      return v;
    }))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((v, i) => i !== v.id))
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map((v, i) => {
      if(v.id === id) {
        v.isDid = !v.isDid
      }
      return v;
    }))
  }
  return <TodoContext.Provider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
    {children}
  </TodoContext.Provider>
}

export default TodoProvider