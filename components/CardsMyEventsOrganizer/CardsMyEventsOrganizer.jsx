import React from "react";
import styles from "./cardsMyEventsOrganizer.module.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Link from "next/link";

export default function CardsMyEventsOrganizer() {
  return (
    <div className={styles.contentCardMyEventsTitleAndCards}>
      <div className={styles.contInfoMyEvents}>
        <div>
          <h3> Eventos próximos</h3>
          <div>
            <h4>Boda</h4>
            <p>Creado el 28 de febrero de 2022</p>
          </div>
        </div>
        <div className={styles.lineaH}></div>
        <div>
          <h3> Eventos próximos</h3>
          <div>
            <h4>Boda</h4>
            <p>Creado el 28 de febrero de 2022</p>
          </div>
        </div>
        <div className={styles.lineaH}></div>
        <div>
          <h3> Eventos próximos</h3>
          <div>
            <h4>Boda</h4>
            <p>Creado el 28 de febrero de 2022</p>
          </div>
        </div>
        <div className={styles.lineaH}></div>
      </div>
      <div className={styles.contentCardMyEvents}>
        <div className={styles.containerCardMyEvents}>
          <Link href="/dashboard-eventos">
            <div className={styles.cardMyEventsDurazno}>
              <FiberManualRecordIcon></FiberManualRecordIcon>
              <h3 className={styles.cardMyEventsTitle}> Mis eventos</h3>
            </div>
          </Link>
          <Link href="/invitees">
            <div className={styles.cardMyEventsMorado}>
              <FiberManualRecordIcon></FiberManualRecordIcon>
              <h3 className={styles.cardMyEventsTitle}> Mis invitaciones</h3>
            </div>
          </Link>
          <Link href="/registerEvent">
            <div className={styles.cardMyEventsPink}>
              <FiberManualRecordIcon></FiberManualRecordIcon>
              <h3 className={styles.cardMyEventsTitle}> Crea un eventos</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
