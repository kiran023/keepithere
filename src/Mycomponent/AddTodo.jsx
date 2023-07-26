import React, { useState } from 'react';
export const AddTodo = (props) => {
 
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const submit = (e) =>{
    e.preventDefault();
    if(!title|| !desc){
      alert("Title and description cannot be blanked");
    }
    else
   { props.addTodo(title,desc);
    settitle("");
    setdesc("");}

  }
  return (
    <div className="container" id='box-1'>
      {/* <h2 className="my-5">hey! {props.user}</h2> */}
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
        </div>
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </form>
    </div>
  )
}
