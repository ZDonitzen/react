import { TodoItem } from "./TodoItem"
import PropTypes from 'prop-types'

export function TodoList({todos, toggleTodo, deleteToDo}) {
    return ( 
        <ul className='list'>
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                    <TodoItem 
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteToDo={deleteToDo}
                    />
                )
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    toggleTodo: PropTypes.func,
    deleteToDo: PropTypes.func
}