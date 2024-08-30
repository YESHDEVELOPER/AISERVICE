import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./RightContent.module.css";

const RightContent = ({
  className = "",
  rightContentPosition,
  rightContentTop,
  rightContentLeft,
  frameDivWidth,
  frameDivPadding,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      position: rightContentPosition,
      top: rightContentTop,
      left: rightContentLeft,
    };
  }, [rightContentPosition, rightContentTop, rightContentLeft]);

  const frameHeaderStyle = useMemo(() => {
    return {
      width: frameDivWidth,
      padding: frameDivPadding,
    };
  }, [frameDivWidth, frameDivPadding]);

  return (
    <div
      className={[styles.desktop2Inner, className].join(" ")}
      style={frameDivStyle}
    >
      <header className={styles.frameParent} style={frameHeaderStyle}>
        <div className={styles.nusterAiWrapper}>
          <a className={styles.nusterAi}>NUSTER AI</a>
        </div>
        <div className={styles.frameGroup}>
          <nav className={styles.frameWrapper}>
            <nav className={styles.ourServiceParent}>
              <a className={styles.ourService}>OUR SERVICE</a>
              <a className={styles.pricing}>pricing</a>
              <a className={styles.letsTry}>LET’S TRY</a>
            </nav>
          </nav>
          <button className={styles.signup}>
            <div className={styles.signupInner}>
              <div className={styles.frameChild} />
            </div>
            <a className={styles.signUp}>SIGN UP</a>
          </button>
        </div>
      </header>
    </div>
  );
};

RightContent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  rightContentPosition: PropTypes.any,
  rightContentTop: PropTypes.any,
  rightContentLeft: PropTypes.any,
  frameDivWidth: PropTypes.any,
  frameDivPadding: PropTypes.any,
};

export default RightContent;
