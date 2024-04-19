import './todo.css'
import { useState } from 'react'


export default function Todo(){

    const [todo, setTodo] = useState([])
    const [input, setInput] = useState("")

    function change(e){
        const inputs = e.target.value
        setInput(inputs)
    }

    function addTodo(){
        if (input === ""){
            alert("Enter Todo")
        }
        else{
            const textId = {
                id : todo.length + 1,
                text : input
            }
            setTodo([...todo, textId])
            setInput("")
    
        }

    }

    function close(id){
        const removeTodo = todo.filter(todo => todo.id !== id)
        setTodo(removeTodo)
    }
    
    return(
    
        <div>
            <div className="container">
                {/* <p>{input}</p> */}

                <input type="text" value={input} placeholder='Enter Todo' onChange={change}/>

                <button onClick={addTodo}>Add Todo</button>

                <ul className="todo-list">
                    {todo.map((todos) => {
                        return <li key={todos.id} className='todo'>
                                    <span>{todos.text}</span>
                                    <button className='close' onClick={() => close(todos.id)}>X</button>
                                </li>
                    })}
                </ul>
            </div>
            
        </div>
    )
}