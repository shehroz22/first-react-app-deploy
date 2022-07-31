import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Navbar Name="Southland" />
      <Table one="SouthLand Avenue" two="Frenchmens" three="Ashlen" />
    </>
  );
}

export default App;
