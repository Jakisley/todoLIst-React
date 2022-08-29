import styles from './TodoList.module.css';
import defaultCheck from "../../images/defaultCheckBox.svg";
import activeCheck from "../../images/activeCheckBox.svg";

const TodoList = (props) => {

  let ischecked = false;
  const listCheckClick = (ev) => {
    if (!ischecked) {
      ev.target.style.backgroundImage = `url(${defaultCheck})`;
      ischecked = true;
    } else {
      ev.target.style.backgroundImage = `url(${activeCheck})`;
      ischecked = false;
    }
  }
  return (
    <div>
      <div className={styles.listCheck} onClick={listCheckClick} />
      <input className={styles.listElement} type="text" value="Покормить собаку" readOnly />
    </div>
  );
};

export default TodoList;