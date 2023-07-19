import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"
import { useEffect, useState } from 'react'
import "./styles.css"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM")
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
    setTodos(currentTodos => {
      return [...currentTodos, {id: crypto.randomUUID(), title, completed:false}]
    })
  }

  function toggleTodo(id){
    setTodos(currentTodos => {
      return currentTodos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    })
  }

  function deleteToDo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return(
  <> 
    <TodoForm onSubmit={addTodo} />
    <h1 className='header'>Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteToDo={deleteToDo} />
  </>
)}