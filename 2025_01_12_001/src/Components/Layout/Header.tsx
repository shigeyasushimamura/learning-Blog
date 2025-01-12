import styles from "./Layout.module.css";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <header className={styles["header__heading"]}>Fullme</header>

      <nav className={styles["header__nav"]}>
        <ul className={styles["header__field"]}>
          <li className={styles["header__nav-item"]}>コース紹介</li>
          <li className={styles["header__nav-item"]}>受講生の声</li>
          <li className={styles["header__nav-item"]}>よくある質問</li>
          <li className={styles["header__nav-item"]}>メッセージ</li>
        </ul>

        <div className={styles["header__field"]}>
          <button className={styles["header__btn-signup"]}>新規会員登録</button>
          <button className={styles["header__btn-login"]}>ログイン</button>
        </div>
      </nav>
    </div>
  );
};
export default Header;
