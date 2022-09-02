import { useState } from 'react';
import styles from './InputAddTodo.module.css';

const InputAddToDo = (props) => {
  const [todo, setTodo] = useState('');
  const { isAllCompleted,addTodo,changeAllCheck } = props;

  const checkStyle = !isAllCompleted ?
    styles.checkAllTodoBtn :
    `${styles.checkAllTodoBtn} ${styles.checkAllTodoBtnActive}`;

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleKeyDownAddInput = (event) => {
    if (event.key === 'Enter') {
      addTodo(todo);
      setTodo('');
    };
  };

  const handleClickCheckBtn = () => {
    changeAllCheck();
  };

  return (
    <section className={styles.todoAddWrapper}>
      <button
        className={checkStyle}
        onClick={handleClickCheckBtn}
      >
        ❯
      </button>

      <input
        className={styles.todoAdd}
        value={todo}
        onKeyDown={handleKeyDownAddInput}
        onChange={handleChange}
        name="newTodo"
        type="text"
        placeholder="What needs to be done?"
        autoFocus
      />
    </section>
  )

};

export default InputAddToDo;