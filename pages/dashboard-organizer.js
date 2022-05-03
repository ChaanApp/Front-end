import Navbar from "../components/Navbar/Navbar";
import TitleMyEvents from "../components/TitleMyEvts/TitleMyEvts";
import CardsMyEventsOrganizer from "../components/CardsMyEventsOrganizer/CardsMyEventsOrganizer";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <div>
      <Navbar> </Navbar>
      <TitleMyEvents></TitleMyEvents>
      <CardsMyEventsOrganizer></CardsMyEventsOrganizer>
      <Footer></Footer>
    </div>
  );
}
