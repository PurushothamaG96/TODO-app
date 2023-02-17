import React from "react";
import { useState } from "react";
import "./../styles/App.css";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
	const [input, setInput] = useState("")
	const [todos, setTodos] = useState([])
	const [editTodos, setEditTodos] = useState(null)
 	return (
	<div id="main">
		<div>
			<Header/>
		</div>
		<div>
		<Form
		input = {input}
		setInput = {setInput}
		todos ={todos}
		setTodos = {setTodos}
		editTodos ={editTodos}
		setEditTodos = {setEditTodos}
		/>
		</div>
		<div>
			<TodoList todos = {todos} setTodos = {setTodos} setEditTodos={setEditTodos}	/>
		</div>
	
	
	</div>
	);
}


export default App;
