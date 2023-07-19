import PropTypes from 'prop-types'

export function TodoItem({id, completed, title, toggleTodo, deleteToDo}) {
    return (
        <li>
            <label>
            <input type='checkbox' checked={completed}
            onChange={() => toggleTodo(id)}/>
            {title}
            </label>
            <button onClick={() => deleteToDo(id)} className='btn bth-danger'>Delete</button>
        </li>
    )
}

TodoItem.propTypes = {
    id: PropTypes.string,
    completed: PropTypes.bool,
    title: PropTypes.string,
    toggleTodo: PropTypes.func,
    deleteToDo: PropTypes.func
}