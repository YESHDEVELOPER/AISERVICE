import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./HEADER1.module.css";

const HEADER1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <section className={[styles.header, className].join(" ")}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.topNavigation}>
        <div className={styles.aiLogoParent}>
          <img
            className={styles.aiLogoIcon}
            loading="lazy"
            alt=""
            src="/ai-logo@2x.png"
          />
          <div className={styles.navigationItems}>
            <div className={styles.homeParent}>
              <a className={styles.home} onClick={onHomeTextClick}>
                Home
              </a>
              <div className={styles.linkItems}>
                <a className={styles.aboutUs} onClick={onHomeTextClick}>
                  About us
                </a>
              </div>
              <div className={styles.linkItems}>
                <a className={styles.feautures}>Feautures</a>
              </div>
              <div className={styles.linkItems}>
                <a className={styles.purchase}>Purchase</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigationItems2}>
          <div className={styles.content}>
            <h1 className={styles.enhanceYourCarrier}>
              Enhance your carrier by AI
            </h1>
            <h2 className={styles.nusterAi}>Nuster AI</h2>
          </div>
        </div>
      </div>
      <div className={styles.contactUsWrapper}>
        <a className={styles.contactUs}>Contact us</a>
      </div>
    </section>
  );
};

HEADER1.propTypes = {
  className: PropTypes.string,
};

export default HEADER1;
