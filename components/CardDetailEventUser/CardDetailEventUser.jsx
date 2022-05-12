import React from "react";
import styles from "./cardDetailEventUser.module.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BusinessIcon from "@mui/icons-material/Business";
import Image from "next/image";

export default function CardDetailEvent(props) {
  console.log(props);
  const event = props.existingEvent;

  return (
    <div className={styles.containerDE}>
      <div className={styles.containerImageTitleDescDE}>
        <div className={styles.conticonDetEvtTitle}>
          <BusinessIcon className={styles.iconDetEvt} />

          <div className={styles.titleDE}>Detalles del evento</div>
        </div>
        <p className={styles.textDE}>{event.detailsEvent}</p>
        <div className={styles.lineaH}></div>
        <div className={styles.conticonDetEvtTitle}>
          <EventIcon className={styles.iconDetEvt} />
          <div className={styles.titleDE}>Día del evento</div>
        </div>
        <p className={styles.textDE}>{event.eventDate}</p>
        <div className={styles.lineaH}></div>
        <div className={styles.conticonDetEvtTitle}>
          <ScheduleIcon className={styles.iconDetEvt} />
          <div className={styles.titleDE}>Horario del evento</div>
        </div>
        <p className={styles.textDE}>{event.timeDate}</p>
        <div className={styles.lineaH}></div>
      </div>
      <div className={styles.containerImageTitleDescDE}>
        <div className={styles.conticonDetEvtTitle}>
          <Image className={styles.iconDetEvt} Image="/codev.png" alt="" />
          <div className={styles.titleDE}> Código de vestimenta</div>
        </div>
        <p className={styles.textDE}>{event.eventDressCode}</p>
        <div className={styles.lineaH}></div>
        <div className={styles.conticonDetEvtTitle}>
          <LocationOnIcon className={styles.iconDetEvt} />
          <div className={styles.titleDE}> Lugar del evento</div>
        </div>
        <p className={styles.textDE}>{event.eventLocation.adress}</p>
        <Image className={styles.mapsDetEvt} Image="/maps.png" alt="" />
      </div>
    </div>
  );
}
