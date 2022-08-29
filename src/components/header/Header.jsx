import styles from'./Header.module.css';

const Header = (props) => {
  return (
  <section className={styles.header}>
      <h1>
        todos
      </h1>
    </section>
  );
};

export default Header;