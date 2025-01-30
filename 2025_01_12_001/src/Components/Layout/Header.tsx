import styles from "./Layout.module.css";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <header className={styles["header__heading"]}>Tabibulo</header>

      <nav className={styles["header__nav"]}>
        <ul className={styles["header__field"]}>
          <li className={styles["header__nav-item"]}>トピック紹介</li>
          <li className={styles["header__nav-item"]}>視聴者の声</li>
          <li className={styles["header__nav-item"]}>よくある質問</li>
          <li className={styles["header__nav-item"]}>メッセージ</li>
          <li>
            <button className={styles["header__btn-signup"]}>
              新規会員登録
            </button>
          </li>
          <li>
            <button className={styles["header__btn-login"]}>ログイン</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
