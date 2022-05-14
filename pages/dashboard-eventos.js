import React, { useEffect, useState } from "react";
import NavbarUser from "../components/NavbarUser/NavbarUser";
import TitleMyEvents from "../components/TitleMyEvts/TitleMyEvts";
import CardDashbordEvents from "../components/CardDashbordEvents/CardDashbordEvents";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";

export default function About() {
  const [dataEvents, setDataEvents] = useState([]);

  useEffect(() => {
    const miStorage = window.localStorage;
    const token = JSON.parse(miStorage.getItem("tokenUser"));
    const id = JSON.parse(miStorage.getItem("idUser"));

    if (!token) {
      // ruteo login
      router.push("/login-user");
    } else {
      async function getInfo() {
<<<<<<< HEAD
        const url = `https://api.chaan.site/organizer/${id}`;
=======
        const url = ` https://api.chaan.site/organizer/${id}`;
>>>>>>> 06605f1b8c8f0635cef16770356b3bd39f51386e
        const user = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
           // console.log(data);
          });
      }
      async function getEvents() {
<<<<<<< HEAD
        const url = `https://api.chaan.site/events/organizer`;
=======
        const url = ` https://api.chaan.site/events/organizer`;
>>>>>>> 06605f1b8c8f0635cef16770356b3bd39f51386e
        const events = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            return data.data.events;
          });
        setDataEvents(events);
      }
      getInfo();
      getEvents();
    }
  }, []);

  return (
    <div>
      <NavbarUser> </NavbarUser>
      <CardDashbordEvents events={dataEvents}></CardDashbordEvents>
      <Footer></Footer>
    </div>
  );
}
