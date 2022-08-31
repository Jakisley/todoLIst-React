import React from 'react';
import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import InputAddToDo from './components/InputAddTodo';
import TodoList from './components/TodoList';
import LowerMenu from './components/LowerMenu';


import styles from './App.module.css';


function App() {

  const [todoArray, setTodoArray] = useState([]);
  const onChangeArray = (todoArray) => {
    setTodoArray(todoArray);
    console.log(todoArray);
  }

  return (
    <section className={styles.app}>
      <Header />
      <section className={styles.main}>
        <InputAddToDo todoArray={todoArray} onChangeArray={onChangeArray} />
        <TodoList todoArray={todoArray} onChangeArray={onChangeArray}/>
        <LowerMenu />
      </section>
      <Footer />
    </section>
  );
}

export default App;