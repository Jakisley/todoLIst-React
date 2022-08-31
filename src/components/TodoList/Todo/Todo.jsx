import styles from './Todo.module.css';
import defaultCheck from "../../../images/defaultCheckBox.svg";
import completedCheck from "../../../images/completedCheckBox.svg";

const Todo = (props) => {
  const { id, text, state, todoArray,onChangeArray } = props;

  const delElement = (ev) => {
    let id = +ev.target.id;
    let index =todoArray.findIndex(todo => todo.key === id);
    const updatedTodoArr = [...todoArray];
    updatedTodoArr.splice(index,1);
    onChangeArray(updatedTodoArr);
    
  }
  const listCheckClick = (ev) => {
    let id = +ev.target.id;
    let index =todoArray.findIndex(todo => todo.key === id);
    const updatedTodoArr = [...todoArray];
    if(updatedTodoArr[index]['state']==='active'){
      updatedTodoArr[index]['state'] = 'completed';
    }else{
      updatedTodoArr[index]['state'] = 'active'
    }
    onChangeArray(updatedTodoArr);
  }
  return (
    <div className={styles.listWrapper}>
      <div id={id} className={state === 'active' ? styles.listCheck : `${styles.listCheck} ${styles.checkCompleted}`} onClick={listCheckClick} />
      <input className={state === 'active' ? styles.listElement : `${styles.listElement} ${styles.textCopmleted}`} type="text" value={text} readOnly />
      <div id={id} className={styles.listDestroyBtn} onClick={delElement}>×</div>
    </div>
  );
};

export default Todo;