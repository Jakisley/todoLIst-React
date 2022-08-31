import styles from './TodoList.module.css';
import defaultCheck from "../../images/defaultCheckBox.svg";
import completedCheck from "../../images/completedCheckBox.svg";

const TodoList = () => {
  let ischecked = false;
  const listCheckClick = (ev) => {
    if (!ischecked) {
      ev.target.style.backgroundImage = `url(${defaultCheck})`;
      ischecked = true;
    } else {
      ev.target.style.backgroundImage = `url(${completedCheck})`;
      ischecked = false;
    }
  }
  return (
    <section>
      <div className={styles.listWrapper} data-id="1">
        <div className={styles.listCheck} onClick={listCheckClick} />
        <input className={styles.listElement} type="text" value="Покормить собаку" readOnly />
        <div className={styles.listDestroyBtn}>×</div>
      </div>
      <div className={styles.listWrapper} data-id="2">
        <div className={styles.listCheck} onClick={listCheckClick} />
        <input className={styles.listElement} type="text" value="Погулять с попугаем" readOnly />
        <div className={styles.listDestroyBtn}>×</div>
      </div>
      <div className={styles.listWrapper} data-id="3">
        <div className={`${styles.listCheck} ${styles.checkCompleted}`} onClick={listCheckClick} />
        <input className={`${styles.listElement} ${styles.textCopmleted}`} type="text" value="Лежать на диване" readOnly />
        <div className={styles.listDestroyBtn}>×</div>
      </div>
    </section>

  );
};

export default TodoList;