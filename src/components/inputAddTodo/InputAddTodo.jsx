import styles from'./InputAddTodo.module.css';

const InputAddToDo = () =>{
  // function {

  // }
  return(
    <section>
      <button  className={styles.checkAllTodoBtn}>❯</button>
      <input  className={styles.newTodo} type="text"  placeholder="What needs to be done?" autoFocus/>
    </section>
  )

}

export default InputAddToDo;