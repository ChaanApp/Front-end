import React from "react";
import styles from "./cardAnfInv.module.scss";

export default function CardAnfInv() {
  return (
    <div className={styles.ContainerCardsAnfInv}>
      <a>
        <div className={styles.overFow}>
          <img className={styles.imgAnf} src="/Anfi2.jpg" alt="" />
        </div>
        <p className={styles.textCArd}>Soy anfitrión</p>
      </a>
      <a>
        <div className={styles.overFow}>
          <img className={styles.imgInv} src="/Inv.jpg" alt="" />
        </div>
        <p className={styles.textCArd}>Soy invitado</p>
      </a>
    </div>
  );
}
