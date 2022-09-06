import styles from './Todo.module.css';
import { useState, useRef, useMemo, useEffect } from 'react';

const Todo = (props) => {
  const ref = useRef(null);
  const { todo, delElement, changeCheck, doubleClickInput, onblur, handleKeyDownToDoInput } = props;
  const [toDoDescription, setToDoDescription] = useState(todo.description);
  const [isChanged, setIsChanged] = useState(false)
  const [inputTextStyles, setInputTextStyles] = useState('');

  useEffect(() => {
    setInputTextStyles(`${styles.listElement} ${todo.state === 'active' ? '' : styles.textCopmleted}`);
  }, [todo.state])

  const checkStyles = useMemo(() => {
    return `${styles.listCheck} ${todo.state === 'active' ? '' : styles.checkCompleted}`;
  }, [todo.state]);

  const handleChange = (ev) => {
    setToDoDescription(ev.target.value);
  };

  return (
    <div className={styles.listContainer}>
      <div
        className={checkStyles}
        onClick={() => changeCheck(todo.key)}
      />
      <input
        ref={ref}
        className={inputTextStyles}
        value={toDoDescription}
        onDoubleClick={() => doubleClickInput(ref, inputTextStyles, setInputTextStyles, setIsChanged)}
        onKeyDown={(ev) => handleKeyDownToDoInput(ref, ev, toDoDescription, setToDoDescription, todo)}
        onChange={handleChange}
        onBlur={() => onblur(ref, setIsChanged, setInputTextStyles, todo.state, todo.key)}
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