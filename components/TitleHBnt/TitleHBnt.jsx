import React from "react";
import styles from "./titleHBnt.module.scss";
import Button from "@mui/material/Button";

export default function TitleHBnt() {
  return (
    <div className={styles.ContainerTitleHBnt}>
      <h1 className={styles.textH1}>cha'an</h1>
      <p className={styles.textTitle}>
        Gestiona tu evento de manera rápida, simple y divertida
      </p>
      <Button className={styles.btnHome} variant="contained" disableElevation>
        Crea tu evento
      </Button>
    </div>
  );
}
