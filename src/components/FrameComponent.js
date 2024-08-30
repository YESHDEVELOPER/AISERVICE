import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer className={[styles.formContainerWrapper, className].join(" ")}>
      <div className={styles.formContainer}>
        <div className={styles.formDetails}>
          <img
            className={styles.removalaiB7e02620E97c4162Icon}
            loading="lazy"
            alt=""
            src="/removalai-b7e02620e97c4162b95ebb837389326f-depositphotos-186100106stockillustrationletterslogodarkbackground-2@2x.png"
          />
          <div className={styles.contactInfo}>
            <div className={styles.xxxxxxx}>+91 923XXXXXXX</div>
            <img
              className={styles.phoneSolid11}
              loading="lazy"
              alt=""
              src="/phonesolid-1-1@2x.png"
            />
            <div className={styles.emailInfo}>
              <div className={styles.siteMapLink}>
                <h2 className={styles.nuster}>NUSTER</h2>
                <h3 className={styles.ai}>AI</h3>
              </div>
              <div className={styles.envelopeInfo}>
                <img
                  className={styles.envelopeSolid11}
                  loading="lazy"
                  alt=""
                  src="/envelopesolid-1-1.svg"
                />
                <div className={styles.nusteraibusiin}>nusterai.@busi.in</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fieldsContainerParent}>
          <div className={styles.fieldsContainer}>
            <div className={styles.siteMapLink1}>
              <h1 className={styles.contactUs}>Contact Us</h1>
              <div className={styles.sendUsA}>send us a messge</div>
            </div>
            <div className={styles.nameMailFieldsParent}>
              <div className={styles.nameMailFields}>
                <div className={styles.name}> Name :</div>
              </div>
              <input
                className={styles.nameMailFields1}
                placeholder="Mail :"
                type="text"
              />
            </div>
            <textarea
              className={styles.fieldsContainerChild}
              placeholder="Message :"
              rows={11}
              cols={17}
            />
            <button className={styles.submitWrapper}>
              <div className={styles.submit}>submit</div>
            </button>
          </div>
          <div className={styles.visitUsLink}>
            <div className={styles.siteMapContainer}>
              <div className={styles.visit}>
                <div className={styles.siteMapLinks}>
                  <h1 className={styles.siteMap}>Site Map</h1>
                  <div className={styles.visitUs}>
                    <div className={styles.visitUs1}>Visit us.</div>
                  </div>
                </div>
              </div>
              <div className={styles.pageLinks}>
                <div className={styles.home}>
                  <ul className={styles.home1}>
                    <li>HOME</li>
                  </ul>
                </div>
                <div className={styles.aboutUsParent}>
                  <div className={styles.aboutUs}>
                    <ul className={styles.home1}>
                      <li>About Us</li>
                    </ul>
                  </div>
                  <div className={styles.siteMapLink}>
                    <div className={styles.feautures}>
                      <ul className={styles.home1}>
                        <li>Feautures</li>
                      </ul>
                    </div>
                    <div className={styles.sponser}>
                      <ul className={styles.home1}>
                        <li>Sponser</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
