import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import About from "./components/About/About";
import Footer from "./components/Footer";
import "./styles/main.scss";

function App() {
  return (
    <div>
      <Topbar />
      <ResponsiveNavbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
