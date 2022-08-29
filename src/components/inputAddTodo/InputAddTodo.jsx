import styles from './InputAddTodo.module.css';

const InputAddToDo = () => {
  let ischecked = false;
  const checkAllTodoBtnClick = (ev) => {
    if (!ischecked) {
      ev.target.style.color = "#737373";
      ischecked = true;
    } else {
      ev.target.style.color = "#e6e6e6";
      ischecked = false;
    }
  }
  return (
    <section>
      <button className={styles.checkAllTodoBtn} onClick={checkAllTodoBtnClick}>❯</button>
      <input className={styles.ToDoAdd} type="text" placeholder="What needs to be done?" autoFocus />
    </section>
  )

}

export default InputAddToDo;