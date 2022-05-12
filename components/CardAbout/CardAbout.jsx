import React from "react";
import styles from "./cardAbout.module.scss";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function CardAbout() {
  return (
    <div className={styles.ContainerCardAbout}>
      <div className={styles.ContainerSimbolos}>
        <Grid  spacing={{ xs: 2, md: 3 }}>
          <Image
            width={75}
            height={75}
            className={"styles.iconSim"}
            src="/iconA.png"
            alt=""
          />
        </Grid>
        <p className={styles.textFooter}>Regístrate</p>
      </div>
      <div className={styles.ContainerSimbolos}>
        <Grid  spacing={{ xs: 2, md: 3 }}>
          <Image
            width={75}
            height={75}
            className={"styles.iconSim"}
            src="/iconC.png"
            alt=""
          />
        </Grid>
        <p className={styles.textFooter}>Crea tu evento</p>
      </div>
      <div className={styles.ContainerSimbolos}>
        <Grid  spacing={{ xs: 2, md: 3 }}>
          <Image
            width={75}
            height={75}
            className={"styles.iconSim"}
            src="/iconD.png"
            alt=""
          />
        </Grid>
        <p className={styles.textFooter}>Compártelo</p>
      </div>
    </div>
  );
}
