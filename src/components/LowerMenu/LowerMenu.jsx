import styles from './LowerMenu.module.css';

function LowerMenu(props) {

  const { setFillterCondition, todoArray, setTodoArray, count } = props;

  const onClickLowerMenu = (ev) => {
    setFillterCondition(ev.target.name);
  }

  const clearCompleted = () => {
    const updatedTodoArr = [...todoArray];
    for (let i = 0; i < updatedTodoArr.length; i++) {
      if (updatedTodoArr[i].state === 'completed'){
          console.log(i);
          updatedTodoArr.splice(i,1);
          i -=1;
      }
    }
    setTodoArray(updatedTodoArr);

    // Возможно когда-нибудь починю
    // do {
    //   index = updatedTodoArr.findIndex(todo => todo.state === 'completed');
    //   console.log(index);
    //   updatedTodoArr.splice(index,1);
    //   setTodoArray(updatedTodoArr);
    // }while (index!= -1);
  }


  return (
    <section className={styles.lowerMenuWrapper}>
      <span className={styles.lowerMenuText}>{count} items left</span>
      <div className={styles.lowerMenuLinks}>
        <a name='all' className={`${styles.lowerMenuLink} ${styles.selected}`} onClick={onClickLowerMenu}>All</a>
        <a name='active' className={styles.lowerMenuLink} onClick={onClickLowerMenu}>Active</a>
        <a name='completed' className={styles.lowerMenuLink} onClick={onClickLowerMenu}>Complected</a>
      </div>
      <span className={todoArray.find(todo => todo.state === 'completed') ? styles.lowerMenuClearBtn : styles.hiden} onClick={clearCompleted}>Clear complected</span>
    </section>

  );
}

export default LowerMenu;