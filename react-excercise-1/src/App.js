import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header greeting="Good morning" />
      <Footer companyName="Dunder Mifflin" />
    </div>
  );
}

export default App;
