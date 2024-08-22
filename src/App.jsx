import "./App.css";
import Billing from "./components/Billing";
import { NavBar } from "./components";
import Bussiness from "./components/Bussiness";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Card from "./components/Card";
import Review from "./components/Review";
import Partners from "./components/Partners";
import CTA from "./components/CTA";
import Foter from "./components/Footer";

function App() {
  return (
    <div className="bg-primary text-white">
      <NavBar></NavBar>
      <Hero></Hero>
      <Stats></Stats>
      <Bussiness></Bussiness>
      <Billing></Billing>
      <Card></Card>
      <Review></Review>
      <Partners></Partners>
      <CTA></CTA>
      <Foter></Foter>
    </div>
  );
}
export default App;
