import React, {useEffect} from "react";
import styles from "./nav.module.scss";
import wiket_logo from "../../assets/images/wiket-logo.svg";
import './nav-scroll.css';

const Nav = () => {

  const handleScroll = () => {
        if(window.scrollY > 60){
            document.querySelector('.nav').className ='nav scroll';
        }else{
            document.querySelector('.nav').className = 'nav'
        }
    }

     useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

  return (
    <div className={styles._}>
      <nav className="nav">
        <div className={styles.nav_container}>
          <div className={styles.logo}>
            <img src={wiket_logo} alt="wiket logo" />
          </div>
          <div className={styles.menu_container}>
            <ul className={styles.menu_list}>
              <li>Benefits</li>
              <li>Your Profile</li>
              <li>Connections</li>
              <li>Plans & Pricing</li>
            </ul>
            <button className={styles.get_started}>Get Started</button>
            <div className={styles.hamburger_menu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
