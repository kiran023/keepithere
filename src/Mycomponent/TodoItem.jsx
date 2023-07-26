import React from 'react'

export const Todoitem = ({todo , onDelete}) => {
    return (
        <>
            <div className='inner-box'>
                <div className="title">{ todo.title}</div>
                <div className="desc">{ todo.desc }</div>
                <div onClick={() =>{onDelete(todo)}}><ion-icon name="trash-outline"></ion-icon></div>
                
            </div>
            
        </>
    )
}
