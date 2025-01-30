import styles from "./Blog.module.css";

const Introduction = () => {
  return (
    <div className={styles["introduction"]}>
      <div className={styles["container"]}>
        <h1 className={styles["introduction__heading"]}>ABOUT</h1>
      </div>
      {/* <h2 className={styles["introduction__heading-sub"]}>ABOUT</h2> */}
      <div className={styles["introduction__container"]}>
        <img
          src="person_pc.webp"
          className={styles["introduction__img-main"]}
        ></img>
        <div className={`${styles["introduction__msg"]} ${styles["jp-text"]}`}>
          旅の魅力を詰め込んだ、あなたのための旅行ブログ。
          <br />
          <br />
          このブログでは、世界中の美しい風景、隠れた名所、そして旅先でのリアルな体験をお届けします。
          実際に旅したからこそ分かる感動や発見を、写真と言葉にのせてお届け。
          <br />
          <br />
          読むだけで旅気分を味わえ、次の旅行プランのヒントが見つかるかもしれません。
          だから、旅行経験が少なくても、まだ行きたい場所が決まっていなくても大丈夫。
          <br />
          <br />
          さぁ、新しい景色と出会う旅へ、一歩踏み出そう。
          あなたの旅がもっと特別になる、旅行ブログへ。
        </div>
      </div>
    </div>
  );
};

export default Introduction;
