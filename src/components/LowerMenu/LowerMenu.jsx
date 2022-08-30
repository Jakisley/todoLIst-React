import styles from './LowerMenu.module.css';

function LowerMenu() {
  return (
    <section className={styles.lowerMenuWrapper}>
      <span className={styles.lowerMenuText}>2 items left</span>
      <div className={styles.lowerMenuLinks}>
        <a className={`${styles.lowerMenuLink} ${styles.selected}`}>All</a>
        <a className={styles.lowerMenuLink}>Active</a>
        <a className={styles.lowerMenuLink}>Complected</a>
      </div>
      <span className={styles.lowerMenuClearBtn}>Clear complected</span>
    </section>

  );
}

export default LowerMenu;