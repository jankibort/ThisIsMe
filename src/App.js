import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import "./styles/main.scss";

function App() {
  return (
    <div>
      <Topbar />
      <ResponsiveNavbar />
      <Introduction />
      <Footer />
    </div>
  );
}

export default App;
