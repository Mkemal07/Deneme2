import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../Redux/TodoSlice';


function TodoCreate() {
	const dispatch =useDispatch();
	const [newTodo,setNewTodo] =useState('');
	const handleCreateTodo =() => {
		if (newTodo.trim().length==0) {
			alert('Todo Giriniz')
			return;
		}
			const payload={
				id:Math.floor(Math.random() *9999999999999),
				content:newTodo
			}
			dispatch(createTodo(payload))
			setNewTodo("");
	}
	
  return (
	<div>
		<div>
			<input value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}></input>
			<button onClick={handleCreateTodo}></button>
			
		</div>
	</div>
  )
}

export default TodoCreate