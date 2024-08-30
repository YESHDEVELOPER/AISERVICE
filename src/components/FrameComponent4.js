import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.butttonWrapper}>
            <button className={styles.buttton}>
              <div className={styles.buyItNow}>buy it now</div>
            </button>
          </div>
          <h1
            className={styles.whatAnAi}
          >{`  WHAT AN AI assistant CAN DO `}</h1>
        </div>
      </div>
      <div className={styles.feauture}>
        <div className={styles.feautureInner}>
          <div className={styles.featureItemsParent}>
            <img
              className={styles.featureItemsIcon}
              loading="lazy"
              alt=""
              src="/frame-37@2x.png"
            />
            <img
              className={styles.featureItemsIcon1}
              loading="lazy"
              alt=""
              src="/frame-38@2x.png"
            />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.aiVoiceForEverythingParent}>
              <h1 className={styles.aiVoiceFor}>AI VOICE FOR EVERYTHING</h1>
              <div className={styles.customerSupportFront}>
                Customer support, front desk, outbound sales, lead generation,
                telehealth, food ordering, transportation logistics, employee
                training, roleplay, or whatever else you want to build.
              </div>
            </div>
            <div className={styles.butttonContainer}>
              <button className={styles.buttton1}>
                <div className={styles.buyItNow}>GIVE IT A TRY</div>
              </button>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.stopStrugullingWithEmailParent}>
                <h1 className={styles.stopStrugullingWith}>
                  STOP STRUGULLING WITH EMAIL
                </h1>
                <div className={styles.emailAiAutomatically}>
                  {" "}
                  Email AI automatically learns how you email and pre-drafts
                  ready to send replies for you in the background. Save 5+ hours
                  a week on email.
                </div>
              </div>
              <div className={styles.butttonFrame}>
                <button className={styles.buttton2}>
                  <div className={styles.buyItNow}>lets get startred</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
