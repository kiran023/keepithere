import React from 'react'
import { Todoitem } from './TodoItem'

export const Todos = (props) => {
  
  return (
    <>
      <div className="container">
        <h2 className="my-5">Task List</h2>
        {props.todos.length === 0 ? "todo list is empty" :
          props.todos.map((todo) => {
            return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })}
      </div>
    </>
  )
}
