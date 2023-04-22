import "bootstrap/dist/css/bootstrap.min.css";
import "./Root.css";
import "./App.css";
import PlaneNavbar from "./components/PlaneNavbar";
import Header from "./components/Header";
import Feature from "./components/Feature";
import LetsFly from "./components/LetsFly";
import Tickets from "./components/Tickets";
import Travelers from "./components/Travelers";
import Feedback from "./components/Feedback";
import Memories from "./components/Memories";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg_image">
        <div className="d-flex min_vh100 flex-column">
          <PlaneNavbar />
          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <Header />
          </div>
        </div>
      </div>
      <Feature />
      <LetsFly />
      <div className="ticket_bgColor">
        <Tickets />
      </div>
      <Travelers />
      <Feedback />
      <Memories />
      <div style={{ backgroundColor: "#F5F5FF" }} className="py-5">
        <Subscribe />
      </div>
      <div className="footer_bg py-5">
       <Footer/>
      </div>

    </>
  );
}

export default App;
