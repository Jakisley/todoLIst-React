import React from 'react';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import InputAddToDo from './components/InputAddTodo';
import TodoList from './components/TodoList';
import LowerMenu from './components/LowerMenu';

import styles from './App.module.css';

const App = () => {
  const [todoArray, setTodoArray] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [filterCondition, setFillterCondition] = useState('all');
  const [countActive, setCountActive] = useState(0);

  const delAllCompleted = () => {
    const updatedTodoArr = todoArray.filter(element => element.state === 'active');
    setTodoArray(updatedTodoArr);

  };

  const addTodo = (todo) => {
    let key = 0;
    const arraylength = todoArray.length;
    if (arraylength > 0) {
      key = todoArray[arraylength - 1].key + 1;
    };
    if (todo && todo[0] !== ' ') {
      const updatedTodoArr = [...todoArray, { key: +key, description: todo, state: 'active' }]
      setTodoArray(updatedTodoArr);
    };
  };
  const changeAllCheck = () => {
    const index = todoArray.findIndex(todo => todo.state === 'active');
    const updatedTodoArr = [...todoArray];
    let state = '';
    index === -1 ? state = 'active' : state = 'completed';
    updatedTodoArr.filter(element => element.state = state);
    setTodoArray(updatedTodoArr);
  };


  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todoArray));
    setCountActive(todoArray.filter(element => element.state === 'active').length);

  }, [todoArray, filterCondition]);

  return (
    <section className={styles.app}>
      <Header />

      <section className={styles.main}>
        <InputAddToDo
          isAllCompleted={countActive === 0}
          addTodo={addTodo}
          changeAllCheck={changeAllCheck}
        />

        <TodoList
          todoArray={todoArray}
          onChangeArray={setTodoArray}
          filterCondition={filterCondition}
        />

        <LowerMenu
          setFillterCondition={setFillterCondition}
          countActive={countActive}
          isEnyCompleted={(todoArray.length - countActive) > 0}
          delAllCompleted={delAllCompleted}
        />
      </section>

      <Footer />
    </section>
  );
};

export default App;
