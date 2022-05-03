import React from "react";
import styles from "./navbarLogin.module.scss";
import ResponsiveDrawer from "../ResponsiveDrawer/ResponsiveDrawer";

export default function NavbarLogin() {
  return (
    <div className={styles.NavScss}>
      <div className={styles.NavScssM}>
        <div className={styles.containerIconMenu}>
          <ResponsiveDrawer></ResponsiveDrawer>
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
            <a>Login</a>
            <div>|</div>
            <a>SignUp</a>
          </div>

          <img className={styles.iconLogo} src="/chaanApp.png" alt="" />
        </div>
      </div>
    </div>
  );
}
