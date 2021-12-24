import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Hive from "./components/Hive.js";
import SideBar from "./components/SideBar.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SideBar></SideBar>
      <Hive></Hive>
    </div>
  );
}

export default App;
