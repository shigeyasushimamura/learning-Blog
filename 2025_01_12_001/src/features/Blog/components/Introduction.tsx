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
          Fullmeは、デザインに特化した オンラインスクールです。
          <br />
          <br />
          プロのデザイナーの制作と思考を 辿りながら学べる授業です。
          <br />
          <br />
          とことん手を動かしているうちに、自然と知識と技術が深まり、
          表現力だけでなく、仕事に必要な思考力を身に付けることができます。
          <br />
          <br />
          だから、センスや知識がなくても、未経験からでも大丈夫。
          <br />
          <br />
          さぁ、一生「求められる人」になろう。
          <br />
          <br />
          人生の充実が始まるデザインスクールへ。
        </div>
      </div>
    </div>
  );
};

export default Introduction;
