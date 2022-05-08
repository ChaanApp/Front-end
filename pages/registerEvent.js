import React, { useEffect } from "react";
import NavbarUser from "../components/NavbarUser/NavbarUser";
import RegisterEvent from "../components/RegisterEvent/RegisterEvent";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <div>
      <NavbarUser> </NavbarUser>
      <RegisterEvent></RegisterEvent>
      <Footer></Footer>
    </div>
  );
}
