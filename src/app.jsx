import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar.jsx";
import LandingPage from "./LandingPage.jsx";
import UpcomingEventsPage from "./upcoming-events-page/UpcomingEventsPage.jsx";
import TeamsPage from "./teams-page/TeamsPage.jsx";
import SponsorsPage from "./sponsors-page/SponsorsPage.jsx";
import GalleryPage from "./gallery-page/GalleryPage.jsx";
import Footer from "./footer/Footer.jsx";

import "./app.css";

const App = () => {
  return (
    <div className="RootDiv">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="Upcoming-Events" element={<UpcomingEventsPage />} />
          <Route path="Team" element={<TeamsPage />} />
          <Route path="Sponsors" element={<SponsorsPage />} />
          <Route path="Gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
