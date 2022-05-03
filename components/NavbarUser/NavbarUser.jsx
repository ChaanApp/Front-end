import React from "react";
import styles from "./navbarUser.module.scss";
import ResponsiveDrawerUser from "../ResponsiveDrawerUser/ResponsiveDrawerUser";

export default function NavbarUser() {
  return (
    <div className={styles.NavScss}>
      <div className={styles.NavScssM}>
        <div className={styles.containerIconMenu}>
          <ResponsiveDrawerUser></ResponsiveDrawerUser>
        </div>
        <p className={styles.textNav}>cha'an</p>
        <div className={styles.containerLogo}>
          <img className={styles.iconLogo} src="/chaanApp.png" alt="" />
        </div>
      </div>
      <div className={styles.NavScssW}>
        <div className={styles.NavScssWOne}>
          <p className={styles.textNav}>cha'an</p>
        </div>
        <div className={styles.contentancorMenuWTwo}>
          <a className={styles.ancorStylesOne}> ¿Qué es cha’an?</a>
          <a className={styles.ancorStylesTwo}>Soy invitado</a>
          <a className={styles.ancorStylesTwo}>Crear un evento</a>
          <div className={styles.contentancorMenuWThree}>
            <a>Nasme User</a>
          </div>
          <img className={styles.iconLogo} src="/chaanApp.png" alt="" />
        </div>
      </div>
    </div>
  );
}
