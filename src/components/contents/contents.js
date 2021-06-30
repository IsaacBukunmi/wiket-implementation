import React, {useEffect} from "react";
import {motion, useCycle} from "framer-motion";
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
  initial: { y: 80, opacity:0 },
  animate: { y: 0, opacity:1,
    transition: {
      type: "tween",
      ease: 'easeIn',
      stiffness: 800,
      duration: .8,
      delay: .5,
    }
  },
};



const greenThumbVariants = {
  animationOne: { 
    y:[0, -20], 
    opacity:[0,1],
    transition:{
      ease: 'easeOut',
      stiffness: 800,
      duration: .6,
      delay: 1.8,
    }
  },
  animationTwo: {
    y:-10,
    opacity:1,
    transition:{
      yoyo:Infinity,
      duration:4,
      ease:'easeInOut',
    }
  }
}


const potterVariants = {
  animationOne: { 
    y:[20, 0], 
    opacity:[0,1],
    transition:{
      ease: 'easeOut',
      stiffness: 800,
      duration: .6,
      delay: 1.5,
    }
  },
  animationTwo: {
    y:5,
    opacity:1,
    transition:{
      y:{
        yoyo:Infinity,
        duration:6,
        ease:'easeInOut',
      }
    }
  }
}

// const potterVariants = {
//   initial: { y: 20, opacity:0 },
//   animate: { y: 0, opacity:1,
//     transition: {
//       ease: 'easeOut',
//       stiffness: 800,
//       duration: .6,
//       delay: 1.5,
//     }
//   },
// }

const baristaVariants = {
  animationOne: { 
    y:[60, 0], 
    opacity:[0,1],
    transition:{
      ease: 'easeOut',
      stiffness: 800,
      duration: .6,
      delay: 1.5,
    }
  },
  animationTwo: {
    y:-20,
    opacity:1,
    transition:{
      y:{
        yoyo:Infinity,
        duration:7,
        ease:'easeInOut',
      }
    }
  }
}

// const baristaVariants = {
//   initial: { y: 60, opacity:0 },
//   animate: { y: 0, opacity:1,
//     transition: {
//       ease: 'easeOut',
//       stiffness: 800,
//       duration: .6,
//       delay: 2.0,
//     }
//   },
// }


const heroTextVariants = {
  initial: { opacity:0 },
  animate: { opacity:1 ,
    transition: {
      type: "tween",
      ease: 'easeOut',
      duration: 1.5,
      delay: 3,
    }
  },
};

const subHeroTextAndIconsVariants = {
  initial: { opacity:0 },
  animate: { opacity:1 ,
    transition: {
      type: "tween",
      ease: 'easeOut',
      duration: 2,
      delay: 3.5,
    }
  },
};

const svgPinVariants = {
initial:{y:-12, opacity:0 },
animate:{
    y:0,
    opacity:1,
    transition:{
        type:'spring',
        stiffness:120,
        delay:3.5,
        duration:5,
         y: {
            yoyo:Infinity,
            duration:5,
            ease:'easeInOut',
         }
    }
  }
}

const Contents = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  useEffect(() => {
    setTimeout(() => {
      cycleAnimation();
    }, 3500);
  }, []);

  return (
    <motion.div className={styles._}
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
    >
    
      <div className={styles.container}>
        <div className={styles.wiket_images_container}>
          {/* SVG Icons */}
          <motion.div className={styles.svg_icons} variants={subHeroTextAndIconsVariants}>
            <motion.div className={styles.location_svg} variants={svgPinVariants}>
              <img src={location_icon} alt="location icon" />
            </motion.div>
            <motion.div className={styles.pin_svg} variants={svgPinVariants}>
              <img src={pin_icon} alt="pin icon" />
            </motion.div>
            <div className={styles.desktop_path_svg}>
              <img src={desktop_path_icon} alt="location icon" />
            </div>
             <div className={styles.mobile_path_svg}>
              <img src={mobile_path_icon} alt="location icon" />
            </div>
          </motion.div>
          <motion.div className={styles.wiket_florist} variants={floristVariants}>
            <div className={styles.florist_image}>
              <img src={florist} alt="a florist" />
            </div>
            <div className={styles.florist_text}>
              <p>Hanging Garden</p>
              <p>Florist in Bangkok</p>
            </div>
          </motion.div>
          <motion.div className={styles.mini_card_container}>
            <motion.div className={styles.mini_card_item} 
                        variants={greenThumbVariants}
                        animate={animation}>
              <div className={styles.card_image}>
                <img src={gardener} alt="a gardener" />
              </div>
              <div className={styles.card_text}>
                <p>GreenThumb</p>
                <p>Gardener in CheChe</p>
              </div>
            </motion.div>
            <motion.div className={styles.mini_card_item} 
                        variants={potterVariants} 
                        animate={animation}>
              <div className={styles.card_image}>
                <img src={potter} alt="a potter" />
              </div>
              <div className={styles.card_text}>
                <p>Potject</p>
                <p>Pottery in Bangkok</p>
              </div>
            </motion.div>
            <motion.div className={styles.mini_card_item} variants={baristaVariants} animate={animation}>
              <div className={styles.card_image}>
                <img src={barista} alt="a barista" />
              </div>
              <div className={styles.card_text}>
                <p>Green Cafe</p>
                <p>Cafe in Bangkok</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.wiket_text_contents}>
          <motion.div className={styles.hero_text}  variants={heroTextVariants}>
            <p>Explore new opportunities.</p>
            <h1>
              <span>Grow</span> your business.
            </h1>
          </motion.div>
          <motion.div className={styles.sub_hero_text} variants={subHeroTextAndIconsVariants}>
            <p>
              <strong>Wiket is the first business to business network</strong>{" "}
              which lets you connect to mind like people.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contents;
