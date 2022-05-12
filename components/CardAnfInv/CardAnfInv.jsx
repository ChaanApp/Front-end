import React from "react";
import styles from "./cardAnfInv.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function CardAnfInv() {
  return (
    <div className={styles.ContainerCardsAnfInv}>
      <Link href="/login-user">
        <a>
          <div className={styles.overFow}>
            <Image className={styles.ImageAnf} Image="/Anfi2.jpg" alt="" />
          </div>
          <p className={styles.textCArd}>Soy anfitrión</p>
        </a>
      </Link>
      <Link href="/login-invitee">
        <a>
          <div className={styles.overFow}>
            <Image className={styles.ImageInv} Image="/Inv.jpg" alt="" />
          </div>
          <p className={styles.textCArd}>Soy invitado</p>
        </a>
      </Link>
    </div>
  );
}
