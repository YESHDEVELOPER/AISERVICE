import PropTypes from "prop-types";
import styles from "./SPONSER.module.css";

const SPONSER = ({ className = "" }) => {
  return (
    <div className={[styles.sponser, className].join(" ")}>
      <div className={styles.presented}>
        <div className={styles.sponsorDetails}>
          <h1 className={styles.sponsorship}>SPONSORSHIP</h1>
          <div className={styles.presentedBy}>
            <div className={styles.presentedBy1}>Presented By</div>
          </div>
        </div>
      </div>
      <div className={styles.sponsorImages}>
        <img
          className={styles.image2Icon}
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
        <img
          className={styles.image4Icon}
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
        />
        <img
          className={styles.image5Icon}
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
      </div>
    </div>
  );
};

SPONSER.propTypes = {
  className: PropTypes.string,
};

export default SPONSER;
