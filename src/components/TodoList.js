import React from "react"
const TodoList = ({todos, setTodos, setEditTodos})=>{
    const handleDelete =({id}) =>{
        setTodos(todos.filter((todo)=> todo.id !== id))

    }

    const handleEdit = ({id})=>{
        const findTodo = todos.find((todo)=> todo.id == id)
        setEditTodos(findTodo)
    }
    return(
        <div>
            { todos.map((todo)=>(
                <li className="todo-list" key={todo.id}>
                    <input type="text"
                    value={todo.title}
                    className ="list"
                    onChange={(event)=>event.preventDefault()}/>
                    <button onClick ={()=>handleEdit(todo)}>edit</button>
                    <button onClick={()=>handleDelete(todo)}>delete</button>
                </li>
                
            )
                
            )
                
            }
        </div>

    )
}

export default TodoList