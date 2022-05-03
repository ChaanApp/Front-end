import NavbarUser from "../components/NavbarUser/NavbarUser";
import TitleMyEvents from "../components/TitleMyEvts/TitleMyEvts";
import CardsMyEventsOrganizer from "../components/CardsMyEventsOrganizer/CardsMyEventsOrganizer";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <div>
      <NavbarUser> </NavbarUser>
      <TitleMyEvents></TitleMyEvents>
      <CardsMyEventsOrganizer></CardsMyEventsOrganizer>
      <Footer></Footer>
    </div>
  );
}
