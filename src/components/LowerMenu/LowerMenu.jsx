import styles from './LowerMenu.module.css';

function LowerMenu(props) {

  const { setFillterCondition, countActive, isEnyCompleted, delAllCompleted } = props;
  const message = countActive > 1 ? `${countActive} items left` : `${countActive} item left`;

  const clearBtnStyles = isEnyCompleted ?
    styles.lowerMenuClearBtn :
    styles.hiden;

  const onClickLowerMenu = (fillter) => {
    setFillterCondition(fillter);
  };

  const clearCompleted = () => {
    delAllCompleted();
  };

  return (
    <section className={styles.lowerMenuWrapper}>
      <span className={styles.lowerMenuText}>{message}</span>

      <div className={styles.lowerMenuLinks}>
        <p className={styles.lowerMenuLink} onClick={() => onClickLowerMenu('all')}>All</p>
        <p className={styles.lowerMenuLink} onClick={() => onClickLowerMenu('active')}>Active</p>
        <p className={styles.lowerMenuLink} onClick={() => onClickLowerMenu('completed')}>Completed</p>
      </div>

      <span
        className={clearBtnStyles}
        onClick={clearCompleted}
      >
        Clear complected
      </span>
    </section>
  );
};

export default LowerMenu;