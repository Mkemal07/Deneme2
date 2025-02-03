import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	todos:[],
}

export const todoSlice = createSlice({

	name:'todo',
	initialState,
	reducers:{
		createTodo : (state,action) =>{
			state.todos= [...state.todos,action.payload];
		},
		
		removeTodoById :( (state, action)=> {
			state.todos=[...state.todos.filter((todo)=>todo.id !== action.payload)];
		})

	},
	
})
export const {createTodo,removeTodoById} = todoSlice.actions
export default todoSlice.reducer