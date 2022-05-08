import React from "react";
import styles from "./registerEvent.module.scss";
import InputTime from "../InputTime/InputTime";
import InputDate from "../InputDate/InputDate";
import FormSelectorCodVes from "../FormSelectorCodVes/FormSelectorCodVes";
import FormSelectorTipEvent from "..//FormSelectorTipEvent/FormSelectorTipEvent";
import InputLocation from "..//InputLocation/InputLocation";

export default function RegisterEvent() {
  return (
    <div className={styles.containerFormRegisterEvent}>
      <div className={styles.containerFormReg}>
        <div className={styles.contForm}>
          <h2 className={styles.titleForm}>Registra tu evento</h2>
          <div className={styles.lineLogin}></div>
        </div>
        <div className={styles.contentLogin}>
          <div className={styles.cardLogin}>
            <div className={styles.contCardLogin}>
              <div>
                <p className={styles.upInputLogin}>Nombre del evento</p>
                <input
                  className={styles.inputLogin}
                  type="text"
                  placeholder="Nombre del evento"
                />
              </div>
              <div>
                <p className={styles.upInputLogin}>Tipo de evento</p>
                <FormSelectorTipEvent
                  className={styles.inputLogin}
                ></FormSelectorTipEvent>
              </div>
              <div>
                <p className={styles.upInputLogin}>Detalles del evento</p>
                <input
                  className={styles.inputLogin}
                  type="text"
                  placeholder="Detalles del evento"
                />
              </div>
              <div>
                <p className={styles.upInputLogin}>Código de vestimenta</p>
                <FormSelectorCodVes></FormSelectorCodVes>
              </div>
            </div>

            <div>
              <div>
                <p className={styles.upInputLogin}>Fecha del evento</p>
                <InputDate></InputDate>
              </div>
              <div>
                <p className={styles.upInputLogin}>Hora del evento</p>
                <InputTime></InputTime>
              </div>
              <div>
                <p className={styles.upInputLogin}>Lugar del evento</p>
                <InputLocation></InputLocation>
              </div>
              <div>
                <p className={styles.upInputLogin}>Numero de invitados</p>
                <input
                  className={styles.inputLogin}
                  type="number"
                  placeholder="Numero de invitados"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentLogin}>
        <button className={styles.btnL}>Completar registro</button>
      </div>
    </div>
  );
}
