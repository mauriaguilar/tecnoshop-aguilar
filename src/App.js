import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App container-fluid">
        <NavBar />
        <ItemListContainer greeting="Tecno People" />
        <ItemDetailContainer category="Speakers" />
    </div>
  );
}

export default App;
