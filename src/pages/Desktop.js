import HEADER1 from "../components/HEADER1";
import CONTENTPAGE from "../components/CONTENTPAGE";
import SPONSER from "../components/SPONSER";
import FrameComponent from "../components/FrameComponent";
import styles from "./Desktop.module.css";

const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <HEADER1 />
      <section className={styles.pageContent}>
        <CONTENTPAGE />
        <SPONSER />
      </section>
      <FrameComponent />
      <div className={styles.copyright}>
        <div className={styles.copyright1}>
          <div className={styles.copyrights2024All}>
            copyrights 2024 All Rights Reserved Nuster AI
          </div>
        </div>
        <img
          className={styles.copyrightRegular1Icon}
          loading="lazy"
          alt=""
          src="/copyrightregular-1.svg"
        />
        <img className={styles.image1Icon} alt="" src="/image-1-1@2x.png" />
      </div>
    </div>
  );
};

export default Desktop1;
