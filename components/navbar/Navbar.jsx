import React from "react";
import styles from "./navbar.module.scss";
import ResponsiveDrawer from "../ResponsiveDrawer/ResponsiveDrawer";

export default function Navbar() {
  return (
    <div className={styles.NavScss}>
      <div className={styles.containerIconMenu}>
        <ResponsiveDrawer></ResponsiveDrawer>
      </div>
      <p className={styles.textNav}>cha'an</p>
      <div className={styles.containerLogo}>
        <img className={styles.iconLogo} src="/chaanApp.png" alt="" />
      </div>
    </div>
  );
}
