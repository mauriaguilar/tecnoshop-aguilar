import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App container-fluid">
        <NavBar />
        <ItemListContainer greeting="Tecno People" />
    </div>
  );
}

export default App;
