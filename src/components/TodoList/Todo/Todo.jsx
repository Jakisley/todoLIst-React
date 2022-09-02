import styles from './Todo.module.css';
import { useState } from 'react';

const Todo = (props) => {

  const { todo, todoArray, onChangeArray } = props;
  const [todoChange, setTodoChange] = useState(todo.description);
  const index = todoArray.findIndex(element => element.key === todo.key);

  let updatedTodoArr = [...todoArray];

  const checkStyles = todo.state === 'active' ?
    styles.listCheck :
    `${styles.listCheck} ${styles.checkCompleted}`;
  const inputStyles = todo.state === 'active' ?
    styles.listElement :
    `${styles.listElement} ${styles.textCopmleted}`;

  const handleChange = (ev) => {
    setTodoChange(ev.target.value);
  };

  const delElement = () => {
    updatedTodoArr.splice(index, 1);
    onChangeArray(updatedTodoArr);
  };

  const changeCheck = () => {
    if (updatedTodoArr[index].state === 'active') {
      updatedTodoArr[index].state = 'completed';
    } else {
      updatedTodoArr[index].state = 'active'
    };
    onChangeArray(updatedTodoArr);
  };

  const chageInput = (ev) => {
    const sibling = ev.target.nextSibling
    sibling.focus();
    onfocus(sibling);

  };

  const onfocus = (element) => {

    element.style.zIndex = 2;
    element.onblur = () => onblur(element);
    
    document.addEventListener( 'click', (event) => {
      if ( !event.composedPath().includes(element) && element.value !==' ') {
        updatedTodoArr[index].description = element.value;
        onChangeArray(updatedTodoArr);
      }else{
        setTodoChange(todo.description);
      }
    });

  };

  const onblur = (element) => {
    element.style.zIndex = 0;
  };

  const handleKeyDown = (ev) => {

    if (ev.code === 'Enter') {
      if (todoChange && todoChange[0]!==' ') {
        updatedTodoArr[index].description = todoChange;
        onChangeArray(updatedTodoArr);
        onblur(ev.target);
      };
    };
    if (ev.code === 'Escape') {
      setTodoChange(todo.description);
      onblur(ev.target);
    };
  };

  return (
    <div
      id={todo.id}
      className={styles.listWrapper}
    >
      <div
        className={checkStyles}
        onClick={changeCheck}
      />
      <input
        className={inputStyles}
        type="text"
        value={todo.description}
        onDoubleClick={chageInput}
        readOnly
      />
      <input
        className={styles.bottomElement}
        type="text"
        value={todoChange}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <div
        className={styles.listDestroyBtn}
        onClick={delElement}>
        ×
      </div>
    </div>
  );
};

export default Todo;