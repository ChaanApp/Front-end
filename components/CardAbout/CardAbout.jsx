import React from "react";
import styles from "./cardAbout.module.scss";
import Image from "next/image";

export default function CardAbout() {
  return (
    <div className={styles.ContainerCardAbout}>
      <div className={styles.ContainerSimbolos}>
        <div>
          <Image className={styles.iconSim} src="/iconA.png" alt="" />
        </div>
        <p className={styles.textFooter}>Regístrate</p>
      </div>
      <div className={styles.ContainerSimbolos}>
        <Image className={styles.iconSim} src="/iconC.png" alt="" />
        <p className={styles.textFooter}>Crea tu evento</p>
      </div>
      <div className={styles.ContainerSimbolos}>
        <Image className={styles.iconSim} src="/iconD.png" alt="" />
        <p className={styles.textFooter}>Compartelo</p>
      </div>
    </div>
  );
}
