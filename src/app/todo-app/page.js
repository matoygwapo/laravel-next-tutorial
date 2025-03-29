"use client"
import { useEffect, useState } from "react"
import styles from '@styles/todo.module.scss'
import TodoList from '@components/TodoList.js'

import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '@/store/todoSlice';

const TodoApp = () =>{
    const dispatch = useDispatch(); //dispatch actions from your slice
    const todos = useSelector((state)=>state.todos.todos) //select states from your slice

    const [todo,setTodo] = useState('')
    // const [todo,setTodo] = useState({task:'',status:'pending'})
    // const [todos,setTodos] = useState([])

    const handleAddTodo = () => {
        if(todo == ''){
            alert('Task field is required')
        }else{
            dispatch(addTodo(todo))
            setTodo('')
        }
    }

    useEffect(()=>{
        console.log(todos)
    },[todos])


    // const addTodo = () => {
    //     if(todo.task == ''){
    //         alert('Task is required')
    //     }else{
    //         setTodos([...todos,todo])
    //         setTodo({task:'',status:'pending'})
    //     }
    // }

    // useEffect(()=>{
    //     console.log('I am triggered')

    //     // optional part
    // },[todos])

    return(
        <div style={style.container}>
            <h1>Todo Application</h1>
            <div className={styles.todo_container}>
                <input type="text" placeholder="Enter task here..." 
                    value={todo}
                    onChange={e=>setTodo(e.target.value)}
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <TodoList/>
            {/* <TodoList todos={todos}/> */}
            {/* // <div className={styles.todo_list}>
            //     {
            //         todos.map((todo,index)=>(
            //             <div className={styles.todo} key={index}>
            //                 <p>{todo.task}</p>
            //                 <button>Done</button>
            //             </div>
            //         ))
            //     }
            // </div> */}
        </div>
    )
}

const style = {
    container : {textAlign:'center'}
}

export default TodoApp