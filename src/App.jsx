import React,{Component} from 'react';
import Header from './components/header/Header.jsx';
import InputAddToDo from './components/inputAddTodo/InputAddTodo.jsx';
import TodoList from './components/todoList/TodoList.jsx';
import styles from'./App.module.css';
function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div  className={styles.main}>
        <InputAddToDo />
        <TodoList />
      </div>
    </div>

  );
}

export default App;
