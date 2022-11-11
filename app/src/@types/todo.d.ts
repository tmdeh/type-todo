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


export type updateDTO = { id: number, todo: string }