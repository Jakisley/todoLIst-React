import styles from './Todo.module.css';
import { useState, useRef, useMemo, useEffect } from 'react';

const Todo = (props) => {
  const ref = useRef(null);
  const { todo, todoArray, onChangeArray, delElement,changeCheck } = props;
  const [toDoDescription, setToDoDescription] = useState(todo.description);
  const [isChanged, setIsChanged] = useState(false)
  const [inputTextStyles, setInputTextStyles] = useState('');

  useEffect(()=>{
    setInputTextStyles(`${styles.listElement} ${todo.state === 'active' ? '' : styles.textCopmleted}`);
  },[todo.state])

  const checkStyles = useMemo(() => {
    return `${styles.listCheck} ${todo.state === 'active' ? '' : styles.checkCompleted}`;
  }, [todo.state]);

  const index = useMemo(() => {
    return todoArray.findIndex(element => element.key === todo.key);
  }, [todo.key, todoArray]);

  let updatedTodoArr = useMemo(() => {
    return [...todoArray];
  }, [todoArray]);

  const handleChange = (ev) => {
    setToDoDescription(ev.target.value);
  };

  const doubleClickInput = () => {
    const element = ref.current;
    window.getSelection().removeAllRanges();
    setInputTextStyles(inputTextStyles + `${styles.focusElement}`);
    setIsChanged(true);
    element.focus();
  };

  const onblur = () => {
    const element = ref.current
    setIsChanged(false);
    updatedTodoArr[index].description = element.value;
    setInputTextStyles(`${styles.listElement} ${todo.state === 'active' ? '' : styles.textCopmleted}`)
    onChangeArray(updatedTodoArr);
    element.classList.remove(styles.focusElement);

  };

  const handleKeyDown = (ev) => {
    if (ev.code === 'Enter') {
      if (toDoDescription) {
        updatedTodoArr[index].description = toDoDescription;
        onChangeArray(updatedTodoArr);
        ref.current.blur();
      };
    } else if (ev.code === 'Escape') {
      setToDoDescription(todo.description);
      ref.current.blur();
    }

  };

  return (
    <div className={styles.listContainer}>
      <div
        className={checkStyles}
        onClick={()=>changeCheck(todo.key)}
      />
      <input
        ref={ref}
        className={inputTextStyles}
        value={toDoDescription}
        onDoubleClick={doubleClickInput}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onBlur={onblur}
        readOnly={!isChanged}
      />
      <div
        className={styles.listDestroyBtn}
        onClick={() => delElement(todo.key)}
      >
        ×
      </div>
    </div>
  );
};

export default Todo;