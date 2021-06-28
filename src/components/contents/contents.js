import React from "react";
import {motion} from "framer-motion";
import styles from "./contents.module.scss";
import florist from "../../assets/images/header-img-florist.jpg";
import gardener from "../../assets/images/header-img-gardener.jpg";
import potter from "../../assets/images/header-img-pottery.jpg";
import barista from "../../assets/images/header-img-barista.jpg";
import location_icon from "../../assets/images/pin-02.svg";
import pin_icon from "../../assets/images/pin-01.svg";
import desktop_path_icon from "../../assets/images/header-line-desktop.svg";
import mobile_path_icon from "../../assets/images/header-line-phone-portrait.svg";

const ContainerVariants = {
  initial: {},
  animate: {}
};

const floristVariants = {
  initial: { y: 1000, opacity:0 },
  animate: { y: 0, opacity:1 },
  transition: {
    type: "tween",
    ease: 'easeInOut',
    stiffness: 100,
    duration: 4,
    delay: 2,

  }
};
const Contents = () => {
  return (
    <motion.div className={styles._}
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
    >
    
      <div className={styles.container}>
        <div className={styles.wiket_images_container}>
          {/* SVG Icons */}
          <div className={styles.svg_icons}>
            <div className={styles.location_svg}>
              <img src={location_icon} alt="location icon" />
            </div>
            <div className={styles.pin_svg}>
              <img src={pin_icon} alt="pin icon" />
            </div>
            <div className={styles.desktop_path_svg}>
              <img src={desktop_path_icon} alt="location icon" />
            </div>
             <div className={styles.mobile_path_svg}>
              <img src={mobile_path_icon} alt="location icon" />
            </div>
          </div>
          <motion.div className={styles.wiket_florist} variants={floristVariants}>
            <div className={styles.florist_image}>
              <img src={florist} alt="a florist" />
            </div>
            <div className={styles.florist_text}>
              <p>Hanging Garden</p>
              <p>Florist in Bangkok</p>
            </div>
          </motion.div>
          <div className={styles.mini_card_container}>
            <div className={styles.mini_card_item}>
              <div className={styles.card_image}>
                <img src={gardener} alt="a gardener" />
              </div>
              <div className={styles.card_text}>
                <p>GreenThumb</p>
                <p>Gardener in CheChe</p>
              </div>
            </div>
            <div className={styles.mini_card_item}>
              <div className={styles.card_image}>
                <img src={potter} alt="a potter" />
              </div>
              <div className={styles.card_text}>
                <p>Potject</p>
                <p>Pottery in Bangkok</p>
              </div>
            </div>
            <div className={styles.mini_card_item}>
              <div className={styles.card_image}>
                <img src={barista} alt="a barista" />
              </div>
              <div className={styles.card_text}>
                <p>Green Cafe</p>
                <p>Cafe in Bangkok</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wiket_text_contents}>
          <div className={styles.hero_text}>
            <p>Explore new opportunities.</p>
            <h1>
              <span>Grow</span> your business.
            </h1>
          </div>
          <div className={styles.sub_hero_text}>
            <p>
              <strong>Wiket is the first business to business network</strong>{" "}
              which lets you connect to mind like people.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contents;
