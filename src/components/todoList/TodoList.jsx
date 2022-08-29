import styles from'./TodoList.module.css';

const TodoList = (props) => {
  return (
    <div>
       <input  className={styles.todoCheck} type="checkbox"/>
    <input  className={styles.todoElement} type="text" value= "Покормить собаку" readOnly/>
    </div>
  );
};

export default TodoList;