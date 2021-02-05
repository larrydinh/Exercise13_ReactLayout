import logo from "./logo.svg";
import "./App.css";
import BT3Header from "./components/BT3Layout/BT3Header";
import BT3Footer from "./components/BT3Layout/BT3Footer";
import BT3Content from "./components/BT3Layout/BT3Content";

function App() {
  return (
    <div className="App">
      <BT3Header />
      <BT3Content />
      <BT3Footer />
    </div>
  );
}

export default App;
