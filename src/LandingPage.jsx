import HeroVid from "./assets/Hero-Vid.mp4";
import CounterCards from "./counter-cards/CounterCards.jsx";
import Title from "./title/Title.jsx";
import ConvenersSection from "./convener-section/ConvenersSection.jsx";
import UpcomingEventsLandingPage from "./upcoming-events-landing-page/UpcomingEventsLandingPage.jsx";
import PastEvents from "./past-events/PastEvents.jsx";
import LandingPageCarousel from "./landing-page-carousel/LandingPageCarousel.jsx";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="HeroVideoDiv">
        <video width="100vw" height="100vh" autoPlay muted preload="true">
          <source src={HeroVid} type="video/mp4" />
        </video>
      </div>
      <CounterCards />
      <ConvenersSection />
      <Title firstWord={"Upcoming"} secondWord={"Events"} />
      <UpcomingEventsLandingPage />
      <Title firstWord={"Past"} secondWord={"Events"} />
      <PastEvents />
      <Title firstWord={""} secondWord={"Gallery"} />
      <div className="LandingPageGallery">
        <LandingPageCarousel />
      </div>
    </div>
  );
};

export default LandingPage;
