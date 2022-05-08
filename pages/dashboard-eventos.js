import React, { useEffect } from "react";
import NavbarUser from "../components/NavbarUser/NavbarUser";
import TitleMyEvents from "../components/TitleMyEvts/TitleMyEvts";
import CardDashbordEvents from "../components/CardDashbordEvents/CardDashbordEvents";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";

export default function About() {
  return (
    <div>
      <NavbarUser> </NavbarUser>
      <CardDashbordEvents></CardDashbordEvents>
      <Footer></Footer>
    </div>
  );
}
