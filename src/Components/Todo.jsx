import React from 'react'
import { useDispatch } from 'react-redux';
import {removeTodoById} from '../Redux/TodoSlice';


function Todo({todo}) {
	const {id,content}=todo;

	const dispatch = useDispatch()
	const handleDeleteTodo=()=>{
		dispatch(removeTodoById(id))
	}
  return (
	<div>
	<div>
		{content}
	</div>
	<div>
	<button onClick={handleDeleteTodo}></button>
	</div>
	</div>
  )
}

export default Todo