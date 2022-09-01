import styles from './Todo.module.css';
import { useState } from 'react';

const Todo = (props) => {

  const { id, text, state, todoArray, onChangeArray } = props;
  const [todoChange, setTodoChange] = useState(text);

  const handleChange = (ev) => {
    setTodoChange(ev.target.value);
  }

  const delElement = (ev) => {
    const id = +ev.target.parentElement.id
    const index = todoArray.findIndex(todo => todo.key === id);
    const updatedTodoArr = [...todoArray];
    updatedTodoArr.splice(index, 1);
    onChangeArray(updatedTodoArr);

  }
  const changeCheck = (ev) => {
    const id = +ev.target.parentElement.id
    const index = todoArray.findIndex(todo => todo.key === id);
    const updatedTodoArr = [...todoArray];
    if (updatedTodoArr[index]['state'] === 'active') {
      updatedTodoArr[index]['state'] = 'completed';
    } else {
      updatedTodoArr[index]['state'] = 'active'
    }
    onChangeArray(updatedTodoArr);
  }
  const chageInput = (ev) => {
    const id = +ev.target.parentElement.id;
    const index = todoArray.findIndex(todo => todo.key === id);
    const sibling = ev.target.nextSibling
    sibling.focus();
    onfocus(sibling, 'focus');

  }
  const onfocus = (sibling) => {

    sibling.style.zIndex = 2;

    sibling.onblur = () => {
      sibling.style.zIndex = 0;
    }
  }

  const handleKeyDown = (ev) => {

    if (ev.code === 'Enter') {
      const id = +ev.target.parentElement.id
      const index = todoArray.findIndex(todo => todo.key === id);
      if (ev.target.value) {
        const updatedTodoArr = [...todoArray];
        updatedTodoArr[index]['description'] = ev.target.value;
        onChangeArray(updatedTodoArr);
        ev.target.style.zIndex = 0;
      }
    }
  }
  return (
    <div id={id} className={styles.listWrapper}>
      <div className={state === 'active' ? styles.listCheck : `${styles.listCheck} ${styles.checkCompleted}`} onClick={changeCheck} />
      <input className={state === 'active' ? styles.listElement : `${styles.listElement} ${styles.textCopmleted}`} type="text" value={text} onDoubleClick={chageInput} readOnly />
      <input className={styles.bottomElement} type="text" value={todoChange} onKeyDown={handleKeyDown} onChange={handleChange} />
      <div className={styles.listDestroyBtn} onClick={delElement}>×</div>
    </div>
  );
};

export default Todo;