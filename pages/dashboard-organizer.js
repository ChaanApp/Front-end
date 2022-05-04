import React, { useEffect } from "react";
import NavbarUser from "../components/NavbarUser/NavbarUser";
import TitleMyEvents from "../components/TitleMyEvts/TitleMyEvts";
import CardsMyEventsOrganizer from "../components/CardsMyEventsOrganizer/CardsMyEventsOrganizer";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  useEffect(() => {
    const miStorage = window.localStorage;
    const token = miStorage.getItem("tokenUser");
    const id = JSON.parse(miStorage.getItem("idUser"));

    if (!token) {
      // ruteo login
      router.push("/login-user");
    } else {
      async function getInfo() {
        const url = `http://localhost:8080/organizer/${id}`;
        const user = await fetch(url, {
          method: "GET",
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzIwODNmMmM2MDQ2NGMzYzQyMDJmZSIsImlhdCI6MTY1MTY0NTIyMiwiZXhwIjoxNjUxNjgxMjIyfQ.kxDMuQ-FIB294gNP4nh-ZZQCHKmAlTfhel0e2duPDNU",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }
      getInfo();
    }
  });

  return (
    <div>
      <NavbarUser> </NavbarUser>
      <TitleMyEvents></TitleMyEvents>
      <CardsMyEventsOrganizer></CardsMyEventsOrganizer>
      <Footer></Footer>
    </div>
  );
}
