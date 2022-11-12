import React from 'react';
import { Todo, TodoContextType, updateDTO } from './@types/todo';



export const TodoContext = React.createContext<TodoContextType | null>(null);


const TodoProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [todos, setTodos] = React.useState<Todo[]>([])
  
  const addTodo = (value: string) => {
    let todo = {id: 0, value: value, isDid: false}
    todo.id = todos.length !== 0 ? todos[todos.length - 1].id + 1 : 0
    setTodos([...todos, todo]);
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
    setTodos(todos.filter((v, i) => id !== v.id))
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