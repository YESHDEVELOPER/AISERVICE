import PropTypes from "prop-types";
import styles from "./WorkshopTitle.module.css";

const WorkshopTitle = ({ className = "" }) => {
  return (
    <section className={[styles.workshopTitle, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.image18Parent}>
          <img
            className={styles.image18Icon}
            loading="lazy"
            alt=""
            src="/image-18@2x.png"
          />
          <div className={styles.reduceCostsReduceTheCostOWrapper}>
            <div className={styles.reduceCostsReduceContainer}>
              <p className={styles.reduceCosts}>Reduce costs</p>
              <p className={styles.reduceTheCost}>
                Reduce the cost of repetitive tasks by assigning tasks with a
                low level of profitability to the AI assistant.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/frame-47@2x.png"
            />
            <div className={styles.increaseEfficiencyProvideYoWrapper}>
              <div className={styles.reduceCostsReduceContainer}>
                <p className={styles.reduceCosts}>Increase efficiency</p>
                <p className={styles.reduceTheCost}>
                  Provide your team with the tools they need to improve
                  productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WorkshopTitle.propTypes = {
  className: PropTypes.string,
};

export default WorkshopTitle;
