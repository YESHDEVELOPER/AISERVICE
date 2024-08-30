import RightContent from "../components/RightContent";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import WorkshopTitle from "../components/WorkshopTitle";
import styles from "./Desktop1.module.css";

const Desktop11 = () => {
  return (
    <div className={styles.desktop2}>
      <RightContent />
      <div className={styles.text}>{` `}</div>
      <FrameComponent5 />
      <img
        className={styles.desktop2Child}
        loading="lazy"
        alt=""
        src="/frame-43@2x.png"
      />
      <main className={styles.frameParent}>
        <FrameComponent4 />
        <section className={styles.emailInput}>
          <div className={styles.letsCreateChatAgentsForYParent}>
            <h3 className={styles.letsCreateChatContainer}>
              <p className={styles.letsCreateChat}>
                Let's Create Chat Agents for Your Business
              </p>
              <p className={styles.letsCreateChat}>already today.</p>
            </h3>
            <div className={styles.footerNavigation}>
              <div className={styles.doNotGetContainer}>
                <p className={styles.letsCreateChat}>
                  DO NOT GET LEFT BEHIND AI Assistants
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.businessCasesContainer}>
          <img
            className={styles.image16Icon}
            loading="lazy"
            alt=""
            src="/image-16@2x.png"
          />
          <div className={styles.exploreOurBusinessContainer}>
            <p className={styles.exploreOurBusiness}>
              Explore our business cases and learn how we have helped other
              companies achieve success.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.letsCreateChat}>
              Don't be left behind: Join the 85% of businesses adopting AI
            </p>
            <p className={styles.letsCreateChat}>by 2026</p>
          </div>
          <button className={styles.buttton}>
            <div className={styles.ourBusineessPlan}>our busineess plan</div>
          </button>
        </section>
        <WorkshopTitle />
      </main>
      <div className={styles.desktop2Inner}>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

export default Desktop11;
