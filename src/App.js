
// import React from 'react'
import { Todos } from './Mycomponents/Todos';
import { AddTodo } from './Mycomponents/AddTodo';
import { Navbar } from './Mycomponents/Navbar';
import React, { useState, useEffect } from 'react';

function App() {
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
      <Navbar />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  )
};
export default App;
