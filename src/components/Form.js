import React, {useEffect} from "react"
import {v4 as uuidv4} from "uuid"
import { useState } from "react"

const Form = ({input, setInput, todos, setTodos, editTodos, setEditTodos})=>{
    const updateTodo = (title, id)=>{
        const newTodo = todos.map((todo)=>{
            todo.id === id ? {title, id}:todo
        })
        setTodos(newTodo)
        editTodos("")
    }
    useEffect(()=>{
        if(editTodos){
            setInput(editTodos.title)
        }
        else{
            setInput("")
        }
    },[setInput, editTodos])
    const onInputChange = (e)=>{
        setInput(e.target.value)
    }
    const onFormSubmit = (event)=>{
        event.preventDefault()
        if(!editTodos){
            setTodos([...todos, {id:uuidv4(), title:input, completed:false}])
            setInput =""
        }
        else{
            updateTodo(input, editTodos.id)
        }
        
    }
    return(
        <form onSubmit={onFormSubmit}>
        <input type="textArea" placeholder="enter todo..."
        value={input}
        required
        onChange ={onInputChange}/>
        <button className="button-add" type="submit">
            {editTodos?"ok":"add"}
        </button>
        </form>
    )
}

export default Form