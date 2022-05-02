import React from "react";
import styles from "./registerEvent.module.scss";

export default function RegisterEvent() {
  return (
    <div className={styles.containerLoginAndImg}>
      <div className={styles.containerLogin}>
        <div className={styles.contLogin}>
          <h2 className={styles.titleLogin}>Register your Event</h2>
          <div className={styles.lineLogin}></div>
        </div>
        <div className={styles.contentLogin}>
          <div className={styles.cardLogin}>
            <div>
              <p className={styles.upInputLogin}>Event type</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Event type"
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Organizer name</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Organizer name"
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Event name</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Event name"
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Number of invitees</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Number of invitees"
              />
            </div>
          </div>
          <button className={styles.btnL}>Register</button>
        </div>
      </div>
      <div className={styles.contImgLoginW}>
        <img className={styles.imgLoginW} src="/picLogW.jpg" alt="" />
      </div>
    </div>
  );
}
