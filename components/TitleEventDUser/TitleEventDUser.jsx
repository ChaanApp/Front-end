import React from "react";
import styles from "./titleEventDUser.module.scss";
import Link from "next/link";

export default function TitleEventD(props) {
 // console.log(props);
  const event = props.existingEvent;

  return (
    <div className={styles.ContainerEventDUser}>
      <h1 className={styles.textEventDH1User}>{event.eventName}</h1>
      <p className={styles.textEventDTitleUser}>Un evento {event.eventType}</p>

      <div className={styles.contentbtnDE}>
        <Link href={`/register-event/${event._id}`}>
          <button className={styles.btnDE}>Editar evento</button>
        </Link>
        <Link href={`/create-invitees/${event._id}`}>
          <button className={styles.btnDEAI}>Agragar invitado</button>
        </Link>
        <a className={styles.ancorDE}>Enlace del evento</a>
      </div>
    </div>
  );
}
