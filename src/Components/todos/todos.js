import React from 'react'
import Todoitem from '../todoitem/todoitem'

export default function todos(props) {

  return (


    <div className='container'>

      {props.todos.length === 0 ?
        <div className="alert alert-danger text-center my-1" role="alert">
          List Empty
        </div>
        :
        props.todos.map((todo) => {
          return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })}

    </div>
  )
}
