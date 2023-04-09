import React from 'react'

export const Todoitem = ({todo , onDelete}) => {
    return (
        <>
            <div className="container">
                <div className="title">{ todo.title}</div>
                <div className="desc">{ todo.desc }</div>
                <button className="btn btn-danger btn-sm" onClick={() =>{onDelete(todo)}} >Delete</button>
                <hr />
            </div>
            
        </>
    )
}
