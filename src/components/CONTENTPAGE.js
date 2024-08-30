import PropTypes from "prop-types";
import styles from "./CONTENTPAGE.module.css";

const CONTENTPAGE = ({ className = "" }) => {
  return (
    <div className={[styles.contentPage, className].join(" ")}>
      <div className={styles.leftContent}>
        <div className={styles.components}>
          <img
            className={styles.componentGridIcon}
            loading="lazy"
            alt=""
            src="/frame-3@2x.png"
          />
        </div>
      </div>
      <div className={styles.featuresParent}>
        <h1 className={styles.features}> FEATURES..</h1>
        <div className={styles.loremIpsumIsSimplyDummyTeWrapper}>
          <div className={styles.loremIpsumIsSimply}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchan Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum
          </div>
        </div>
      </div>
    </div>
  );
};

CONTENTPAGE.propTypes = {
  className: PropTypes.string,
};

export default CONTENTPAGE;
