import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App container-fluid">
        <NavBar />
        <ItemListContainer greeting="Tecno People" />
    </div>
  );
}

export default App;
