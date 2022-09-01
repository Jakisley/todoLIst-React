import styles from './InputAddTodo.module.css';
import { useState } from 'react';

const InputAddToDo = (props) => {
  const [todo, setTodo] = useState('');
  const [isChecked, setIsChecked] = useState(false)
  const { todoArray, onChangeArray } = props;

  const handleChange = (event) => {
    setTodo(event.target.value);
  }
  const handleKeyDown = (event) => {
    if (event.code === 'Enter') {
      let key = 0;
      const arraylength =todoArray.length;
      if (arraylength > 0) {
        key = todoArray[arraylength-1].key+1;
      }
      if (event.target.value) {
        const updatedTodoArr = [...todoArray, { key: +key, description: todo, state: 'active' }]
        onChangeArray(updatedTodoArr);
        setTodo('');
      }
    }
  }

  const handleClick = (event) => {

    const filter = todoArray.findIndex(todo => todo.state === 'active');
    const updatedTodoArr = [...todoArray];
    if (filter === -1) {
      for (let i = 0; i < updatedTodoArr.length; i++) {
        updatedTodoArr[i]['state'] = 'active';
        event.target.style.color = "#e6e6e6";
      }
    } else {
      for (let i = 0; i < updatedTodoArr.length; i++) {
        updatedTodoArr[i]['state'] = 'completed';
        event.target.style.color = "#737373";
      }
    }
    onChangeArray(updatedTodoArr);

  }
  return (
    <section className={styles.todoAddWrapper}>
      <button className={styles.checkAllTodoBtn} onClick={handleClick}>❯</button>
      <input className={styles.todoAdd} value={todo} onKeyDown={handleKeyDown} onChange={handleChange} name="newTodo" type="text" placeholder="What needs to be done?" autoFocus />
    </section>
  )

}

export default InputAddToDo;