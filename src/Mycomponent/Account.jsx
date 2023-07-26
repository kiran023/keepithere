import { Todos } from './Todo';
import { AddTodo } from './AddTodo';
import React, { useState, useEffect } from 'react';
import { database } from './firebase';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
// import {
//   Link
// } from "react-router-dom";

export const Account = () => {
  const navigate = useNavigate()
  const [data, setdata] = useState([])
  // localStorage.setItem("email",JSON.stringify(response.user.email));
  const localvariable = JSON.parse(localStorage.getItem("email"))
  const collectionRef = collection(database, localvariable)
  useEffect(() => {
    async function fetchdata() {
      const info = await getDocs(collectionRef)
      const arr = info.docs.map((e) => {
        return {
          ...e.data(), id: e.id
        }
      })
      setdata(arr)
    }
    fetchdata()
  }, [])
  const user = 'kiran'

  const addTodo = (title, desc) => {
    let sno;
    if (data.length == 0)
      sno = 1;
    else sno = data[data.length - 1].sno + 1;
    addDoc(collectionRef, {
      sno: sno,
      title: title,
      desc: desc
    })
      .then(() => {
        const updatedCartData = [...data, {
          sno: sno,
          title: title,
          desc: desc
        }];
        setdata(updatedCartData);
        alert("added")

      })
      .catch((err) => {
        alert(err.message)
      });

  }
  const onDelete = (e) => {
    // console.log("id",e.id);
    deleteDoc(doc(database, localvariable, e.id))
      .then(() => {
        alert("deleted")
        const deletedData = data.filter((event) => {
          return event.id !== e.id
        })
        setdata(deletedData)

      })
      .catch((err) => {
        alert(err.message)
      });
  }

  const logout=()=>{
    alert("Logout Successfully")
    localStorage.clear();
    navigate('/')

  }




  return (
    <>
      <div className='main-body'>
        
        <div style={{display: "flex", justifyContent: "space-between", margin:'5%'}}>
          <h1 style={{color:'white'}}>KEEP IT HERE</h1>
          <div class="dropdown">
          <div  class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><ion-icon name="person-outline"></ion-icon></div>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">{user}</a></li>
              <li><a class="dropdown-item" href="#" onClick={logout}>Logout</a></li>
            </ul>
        </div>
        </div>
        <AddTodo addTodo={addTodo} />
        <Todos todos={data} onDelete={onDelete} />
      </div>

    </>
  )
}
