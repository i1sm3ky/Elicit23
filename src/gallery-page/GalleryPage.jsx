// import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
// import Gallery from "./components/Gallery";
// import Collage from "./components/Collage";
import Events from "./components/events";
// import Trial from "./components/trial";
import Collage1 from "./components/Collage1.jsx";
import "./GalleryPage.css";

const App = () => (
  <main className="relative">
    <section className="Hero">
      <Hero />
    </section>
    {/* <section className="Navbar">
            <Navbar/>
        </section> */}
    {/*<section className="Gallery">
            <Gallery />
        </section>*/}
    {/*<section className="Collage">
            <Collage />
        </section>*/}
    <section className="Events">
      <Events />
    </section>
    {/*<section className="trial">
            <Trial />
        </section>*/}
    <section className="trial">
      <Collage1 />
    </section>
  </main>
);

export default App;
