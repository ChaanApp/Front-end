import React from "react";
import styles from "./navbarInvitee.module.scss";
import ResponsiveDrawerInvitee from "../ResponsiveDrawerInvitee/ResponsiveDrawerInvitee";
import Link from "next/link";
import Image from "next/image";


export default function NavbarInvitee() {
  return (
    <div className={styles.NavScss}>
      <div className={styles.NavScssM}>
        <div className={styles.containerIconMenu}>
          <ResponsiveDrawerInvitee></ResponsiveDrawerInvitee>
        </div>
        <p className={styles.textNav}>cha &#39;an</p>
        <div className={styles.containerLogo}>
          <Image
            width={50}
            height={50}
            className={styles.iconLogo}
            src="/chaanApp.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.NavScssW}>
        <div className={styles.NavScssWOne}>
          <p className={styles.textNav}>cha&#39;an</p>
        </div>
        <div className={styles.contentancorMenuWTwo}>
          <Link href="/">
            <a className={styles.ancorStylesOne}> ¿Qué es cha&#39;an?</a>
          </Link>
          <Link href="/login-invitee">
            <a className={styles.ancorStylesTwo}>Soy invitado</a>
          </Link>
          <Link href="/register-event">
            <a className={styles.ancorStylesTwo}>Crear un evento</a>
          </Link>
          <div className={styles.contentancorMenuWThree}>
            <a>Invitee</a>
          </div>

          <Image
            width={50}
            height={50}
            className={styles.iconLogo}
            src="/chaanApp.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
