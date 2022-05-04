import React from "react";
import styles from "./titleEventDUser.module.scss";

export default function TitleEventD() {
  return (
    <div className={styles.ContainerEventDUser}>
      <h1 className={styles.textEventDH1User}>Titulo del evento</h1>
      <p className={styles.textEventDTitleUser}>
        Los invitamos a "tipo de evento"
      </p>
      <div className={styles.contentbtnDE}>
        <button className={styles.btnDE}>Edit event</button>
        <a className={styles.ancorDE}>Delete event</a>
      </div>
    </div>
  );
}
