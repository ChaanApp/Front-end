import React, { useEffect, useState } from "react";
import NavbarUser from "../../components/NavbarUser/NavbarUser";
import HeaderCardEvent from "../../components/HeaderCardEvent/HeaderCardEvent";
import TitleEventDUser from "../../components/TitleEventDUser/TitleEventDUser";
import CardDetailEventUser from "../../components/CardDetailEventUser/CardDetailEventUser";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";

const initialState = {
  eventType: "",
  eventName: "",
  detailsEvent: "",
  eventDressCode: "",
  eventDate: "",
  timeDate: "",
  eventLocation: {
    adress: "dommi",
    lat: "dommi",
    long: "dommi",
  },
  eventNumInvitee: 0,
};

export default function About() {
  const [dataEvent, setDataEvent] = useState(initialState);
  //const [token, setToken] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const miStorage = window.localStorage;
    let token = JSON.parse(miStorage.getItem("tokenUser"));
    const idUser = JSON.parse(miStorage.getItem("idUser"));
    if (!token) {
      // ruteo login
      router.push("/login-user");
    } else {
      async function getEvent() {
<<<<<<< HEAD
        const url = `https://api.chaan.site/events/${router.query.id}`;
=======
        const url = ` https://api.chaan.site/events/${router.query.id}`;
>>>>>>> 06605f1b8c8f0635cef16770356b3bd39f51386e
        const event = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            return data.success ? data.data.events : initialState;
            //console.log(data.success ? data.data.events : data.data.message);
          })
          .catch((err) => console.log("Hubo un error en la peticion", err));
        setDataEvent(event);
      }

      getEvent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return (
    <div>
      <NavbarUser existingEvent={dataEvent}> </NavbarUser>
      <HeaderCardEvent></HeaderCardEvent>
      <TitleEventDUser existingEvent={dataEvent}></TitleEventDUser>
      <CardDetailEventUser existingEvent={dataEvent}></CardDetailEventUser>
      <Footer></Footer>
    </div>
  );
}
