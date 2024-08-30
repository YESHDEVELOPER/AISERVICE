import Footer from "./Footer";
import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <footer className={[styles.desktop2Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.footerParent}>
          <Footer />
          <div className={styles.topMarketParent}>
            <div className={styles.topMarket}>Top Market</div>
            <div className={styles.chatGptCopilotContainer}>
              <p className={styles.chatGpt}>chat gpt</p>
              <p className={styles.chatGpt}>copilot</p>
              <p className={styles.chatGpt}>nuster ai</p>
            </div>
          </div>
          <div className={styles.contactParent}>
            <div className={styles.topMarket}>Contact</div>
            <div className={styles.emailLinkedinInstagramContainer}>
              <p className={styles.chatGpt}>Email</p>
              <p className={styles.chatGpt}>LinkedIn</p>
              <p className={styles.chatGpt}>Instagram</p>
              <p className={styles.chatGpt}>Twitter</p>
            </div>
          </div>
        </div>
        <div className={styles.workshopContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.joinOurWorkshopWrapper}>
              <h3 className={styles.joinOurWorkshop}>Join our workshop</h3>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.emailAddressWrapper}>
                <div className={styles.emailAddress}>Email Address</div>
              </div>
              <button className={styles.submitButton}>
                <div className={styles.submit}>submit</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
