import styles from './InputAddTodo.module.css';
import { useState } from 'react';
const InputAddToDo = () => {
  const [count, setCount] = useState('');
  let ischecked = false;


  const handleChange=(ev)=>{
    setCount(ev.target.value);
    console.log(count)

  }
  const handlesSubmit = () => {
    alert(count);
    setCount('');
  }

  const handleClick = (ev) => {
    if (!ischecked) {
      ev.target.style.color = "#737373";
      ischecked = true;
    } else {
      ev.target.style.color = "#e6e6e6";
      ischecked = false;
    }
  }
  return (
    <section className={styles.todoAddWrapper}>
      <button className={styles.checkAllTodoBtn} onClick={handleClick}>❯</button>
      <form onSubmit={handlesSubmit}>
        <input className={styles.todoAdd} value={count} onChange={handleChange} name="newTodo" type="text" placeholder="What needs to be done?" autoFocus/>
      </form>
    </section>
  )

}

export default InputAddToDo;