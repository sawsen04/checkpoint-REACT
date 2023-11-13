import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Navbar"
import Cards from "./components/Card"


function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div>
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );

}

export default App;
