import React from "react";
import styles from "./titleEventDInvitee.module.scss";


export default function TitleEventD(props) {
 // console.log(props);
  const event = props.existingEvent;

  return (
    <div className={styles.ContainerEventDUser}>
      <h1 className={styles.textEventDH1User}>{event.eventName}</h1>
      <p className={styles.textEventDTitleUser}>Un evento {event.eventType}</p>
    </div>
  );
}
