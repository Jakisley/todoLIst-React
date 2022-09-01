import React from 'react';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import InputAddToDo from './components/InputAddTodo';
import TodoList from './components/TodoList';
import LowerMenu from './components/LowerMenu';


import styles from './App.module.css';


function App() {

  const [todoArray, setTodoArray] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [filterCondition, setFillterCondition] = useState('all');
  const [filter, setFillter] = useState(todoArray);
  const [count, setCount] = useState(0);


  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todoArray));

    if (filterCondition === 'all') {
      setFillter(todoArray)
    } else if (filterCondition === 'active') {
      const updatedTodoArr = todoArray.filter(element => element.state === 'active')
      setFillter(updatedTodoArr);

    } else {
      const updatedTodoArr = todoArray.filter(element => element.state === 'completed')
      setFillter(updatedTodoArr);

    }
    let counter = 0
    for (let i = 0; i < todoArray.length; i++) {
      if (todoArray[i].state === 'active') {
        counter += 1;
      }
    }
    setCount(counter);
  },
    [todoArray, filterCondition]);



  return (
    <section className={styles.app}>
      <Header />
      <section className={styles.main}>
        <InputAddToDo todoArray={todoArray} onChangeArray={setTodoArray} />
        <TodoList filter={filter} todoArray={todoArray} onChangeArray={setTodoArray} />
        <LowerMenu setFillterCondition={setFillterCondition} todoArray={todoArray} setTodoArray={setTodoArray} count={count} />
      </section>
      <Footer />
    </section>
  );
}

export default App;