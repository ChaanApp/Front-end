import React, { useState } from "react";
import styles from "./cardDashbordEvents.module.scss";
import { useRouter } from "next/router";

export default function CardDashbordEvents() {
  return (
    <div className={styles.containerMyEventsAndImg}>
      <div className={styles.containerMyEvents}>
        <div className={styles.contMyEvents}>
          <div>
          <h2 className={styles.titleMyEvents}>Mis eventos</h2>
          <div className={styles.lineMyEvents}></div>
          </div>
          <button className={styles.btnLMEW}>Crear evento</button>
        </div>
        <div className={styles.contMyEventsinfo}>
          <div className={styles.titleEvnt}>
            <h3> # Nombre del evento</h3>
          </div>
          <div>
            <a  className={styles.ancorTitleEvnt} href="">Editar</a>
          </div>
        </div>
        <div className={styles.contMyEventsinfo}>
          <div className={styles.titleEvnt}>
            <h3> # Nombre del evento</h3>
          </div>
          <div>
            <a  className={styles.ancorTitleEvnt} href="">Editar</a>
          </div>
        </div>
        <div className={styles.contMyEventsinfo}>
          <div className={styles.titleEvnt}>
            <h3> # Nombre del evento</h3>
          </div>
          <div>
            <a  className={styles.ancorTitleEvnt} href="">Editar</a>
          </div>
        </div>
        <div className={styles.contMyEventsinfo}>
          <div className={styles.titleEvnt}>
            <h3> # Nombre del evento</h3>
          </div>
          <div>
            <a  className={styles.ancorTitleEvnt} href="">Editar</a>
          </div>
        </div>
        <div className={styles.contMyEventsinfo}>
          <div className={styles.titleEvnt}>
            <h3> # Nombre del evento</h3>
          </div>
          <div>
            <a  className={styles.ancorTitleEvnt} href="">Editar</a>
          </div>
        </div>
        <div className={styles.contMyEventsinfo}>
          <div className={styles.titleEvnt}>
            <h3> # Nombre del evento</h3>
          </div>
          <div>
            <a  className={styles.ancorTitleEvnt} href="">Editar</a>
          </div>
        </div>
        <div className={styles.contMyEventsinfo}>
          <div className={styles.titleEvnt}>
            <h3> # Nombre del evento</h3>
          </div>
          <div>
            <a  className={styles.ancorTitleEvnt} href="">Editar</a>
          </div>
        </div>
      </div>
      <button className={styles.btnLME}>Crear evento</button>
    </div>
  );
}
