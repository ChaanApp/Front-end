import React from "react";
import styles from "./cardAnfInv.module.scss";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";


export default function CardAnfInv() {
  return (
    <div className={styles.ContainerCardsAnfInv}>
      <Link href="/login-user">
        <a>
          <div className={styles.overFowXS}>
            <Image
              className={styles.imgAnf}
              src="/Anfi2.jpg"
              alt="Landscape picture"
              width={156}
              height={150}
            />
          </div>
          <div className={styles.overFowMD}>
            <Image
              className={styles.imgAnf}
              src="/Anfi2.jpg"
              alt="Landscape picture"
              width={262}
              height={150}
            />
          </div>
          <div className={styles.overFowXL}>
            <Image
              className={styles.imgAnf}
              src="/Anfi2.jpg"
              alt="Landscape picture"
              width={362}
              height={200}
            />
          </div>
          <p className={styles.textCArd}>Soy anfitrión</p>
        </a>
      </Link>
      <Link href="/login-invitee">
        <a>
          <div className={styles.overFowXS}>
            <Image
              className={styles.imgAnf}
              src="/Inv.jpg"
              alt="Landscape picture"
              width={156}
              height={150}
            />
          </div>
          <div className={styles.overFowMD}>
            <Image
              className={styles.imgAnf}
              src="/Inv.jpg"
              alt="Landscape picture"
              width={262}
              height={150}
            />
          </div>
          <div className={styles.overFowXL}>
            <Image
              className={styles.imgAnf}
              src="/Inv.jpg"
              alt="Landscape picture"
              width={362}
              height={200}
            />
          </div>
          <p className={styles.textCArd}>Soy invitado</p>
        </a>
      </Link>
    </div>
  );
}
