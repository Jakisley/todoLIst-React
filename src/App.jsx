import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import InputAddToDo from './components/InputAddTodo';
import TodoList from './components/TodoList';
import LowerMenu from './components/LowerMenu';


import styles from './App.module.css';


const list = React.createContext([]);
console.log(list);
function App() {
  return (
    <section className={styles.app}>
      <Header />
      <section className={styles.main}>
        <InputAddToDo />
        <TodoList />
        <LowerMenu />
      </section>
      <Footer />
    </section>
  );
}

export default App;
