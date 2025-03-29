import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            state.todos.push({ 
                task: action.payload, 
                status: 'pending'
            });
        },
        updateTodo:(state,action) => {
            // change the status to completed
        },
        deleteTodo:(state,action) => {
            // delete a specific todo
        }
    }
})

export const { addTodo,updateTodo,deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;