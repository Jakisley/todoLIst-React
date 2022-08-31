import styles from './InputAddTodo.module.css';
import { useState } from 'react';

const InputAddToDo = (props) => {
  const { todoArray, onChangeArray } = props;
  const [todo, setTodo] = useState('');
  const [isChecked, setIsChecked] = useState(false)


  const handleChange = (event) => {
    setTodo(event.target.value);
  }
  const handleKeyDown = (event) => {
    if (event.code === 'Enter') {
      todoArray.push({ description: todo, state: 'active' });
      onChangeArray(todoArray);
      setTodo('');
    }
  }

  const handleClick = (event) => {
    if (!isChecked) {
      event.target.style.color = "#737373";
      setIsChecked(true);
    } else {
      event.target.style.color = "#e6e6e6";
      setIsChecked(false);
    }
  }
  return (
    <section className={styles.todoAddWrapper}>
      <button className={styles.checkAllTodoBtn} onClick={handleClick}>❯</button>
      <input className={styles.todoAdd} value={todo} onKeyDown={handleKeyDown} onChange={handleChange} name="newTodo" type="text" placeholder="What needs to be done?" autoFocus />
    </section>
  )

}

export default InputAddToDo;