"use client"
import styles from '@styles/todo.module.scss'
import { useSelector,useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '@/store/todoSlice';

const TodoList = () => {
    const todos = useSelector((state)=>state.todos.todos)
    const dispatch = useDispatch()

    const handleUpdate = () => {
        // this function will call the updateTodo from todoSlice
    }

    const handleDelete = () => {
        // this function will call the deleteTodo from todoSlice
    }
    
    return(
        <div className={styles.todo_list}>
                {
                    todos.map((todo,index)=>(
                        <div className={styles.todo} key={index}>
                            <p>{todo.task}</p>
                            <button>Done</button>
                        </div>
                    ))
                }
        </div>
    )
}

export default TodoList