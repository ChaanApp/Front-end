import React, { useEffect, useState } from "react";
import styles from "./titleMyEvts.module.scss";
import { useRouter } from "next/router";

export default function TitleMyEvts(props) {
  const router = useRouter();
  const [dataUser, setDataUser] = useState([]);
  const { organizerId } = props;

  useEffect(() => {
    const miStorage = window.localStorage;
    const token = JSON.parse(miStorage.getItem("tokenUser"));
    const id = JSON.parse(miStorage.getItem("idUser"));

    if (!token) {
      // ruteo login
      router.push("/login-user");
    } else {
      async function getInfo() {
        const url = ` http://api.chaan.site/organizer/${id}`;
        const user = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            return data.data.organizer;
          });
        setDataUser(user);
        // console.log("Desde nav", user);
      }
      getInfo();
    }
  }, []);

  return (
    <div className={styles.ContantMyEventTitle}>
      <div className={styles.ContainerMyEventTitle}>
        <h1 className={styles.textEventDH1}>Bienvenid@ a Cha&#39;an</h1>
        <p className={styles.nameOfOrganizer}>
          {dataUser.name}, Gestiona Tus Eventos De Una Forma Rápida Y Sencilla.
        </p>
      </div>
    </div>
  );
}
