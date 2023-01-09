import React from 'react'
import './todoitem.css'

export default function todoitem({todo,onDelete}) {
  return (
    <div className='todo-box alert alert-warning my-3'>
        <div>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
        </div>
        <button className='btn btn-danger btn-sm' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
