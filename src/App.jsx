import React from 'react';
import { useState, useEffect} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import InputAddToDo from './components/InputAddTodo';
import TodoList from './components/TodoList';
import LowerMenu from './components/LowerMenu';


import styles from './App.module.css';


function App() {

  const [todoArray, setTodoArray] = useState([]);
  useEffect(() => {
  console.log(todoArray);
  },
  [todoArray]);

  return (
    <section className={styles.app}>
      <Header />
      <section className={styles.main}>
        <InputAddToDo todoArray={todoArray} onChangeArray={setTodoArray} />
        <TodoList todoArray={todoArray} onChangeArray={setTodoArray} />
        <LowerMenu />
      </section>
      <Footer />
    </section>
  );
}

export default App;