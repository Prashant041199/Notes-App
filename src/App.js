import './App.css';
import Navbar from './Components/navbar/navbar';
import Todos from './Components/todos/todos'
import Footer from './Components/footer/footer'
import AddItem from './Components/addItems/additem'

import React, { useState , useEffect} from 'react';



function App() {
  let initTodo;
  const localSet = () => {
    
    if (localStorage.getItem('tod') === null) {
      initTodo = [];
    } else {
      initTodo = JSON.parse(localStorage.getItem('tod'))
    }
  }

  localSet()
  
  const [tod, setTod] = useState(initTodo)
  
  useEffect(() => {
    localStorage.setItem("tod", JSON.stringify(tod))
  
  }, [tod])
  const addTodo = (title, description) => {
    // console.log("i am adding this todo", title, description)
    let sno = tod.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      description: description
    }

    setTod([...tod, myTodo])
    console.log(myTodo)

    
    
    


  }



  const onDelete = (todo) => {

    setTod(tod.filter((e) => {
      return e !== todo
    }))
    // let index = tod.indexOf(todo);
    // tod.splice(index, 1)

    localStorage.setItem("tod", JSON.stringify(tod))
  }
  return (
    <>
      <Navbar title="Notes-App" />
      <AddItem addTodo={addTodo} />

      <Todos todos={tod} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
