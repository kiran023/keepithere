import { Todos } from './Todo';
import { AddTodo } from './AddTodo';
import React, { useState, useEffect } from 'react';
import {UserAuth} from './context/AuthContext'
import {
  Link
} from "react-router-dom";

export const Account = () => {
  const {logOut,user}=UserAuth()
  const handleGoogleSignOut=async()=>{

    try{
      await logOut();

    }
    catch{
      alert("error")
    }
  };

//logic
  let initTodo;
  if (localStorage.getItem("todos") === null)
    initTodo = [];
  else
    initTodo = JSON.parse(localStorage.getItem("todos"));


  const onDelete = (todo) => {
    settodos(todos.filter(
      (e) => {
        return e != todo;
      }
    ))
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0)
      sno = 1;
    else sno = todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(myTodo);
    settodos([...todos, myTodo]);
  }

  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <>
      <div style={{float:"right"}}>
        <button onClick={handleGoogleSignOut} style={{ borderRadius:" 10px", padding: "4%",width: "120px"}}className="mybtn"> 
       <Link to="/" style={{textDecoration:"none",color:"white"}}>sign out</Link> </button>
      </div>
      <AddTodo addTodo={addTodo} user={user}/>
      <Todos todos={todos} onDelete={onDelete} />
    </>
  )
}
