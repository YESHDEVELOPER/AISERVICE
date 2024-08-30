import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.nusterAiParent}>
        <h3 className={styles.nusterAi}>NUSTER AI</h3>
        <div className={styles.ourServiceLetsTryPricingWrapper}>
          <div className={styles.ourServiceLetsContainer}>
            <p className={styles.ourService}>Our Service</p>
            <p className={styles.ourService}>Let’s Try</p>
            <p className={styles.ourService}>Pricing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
