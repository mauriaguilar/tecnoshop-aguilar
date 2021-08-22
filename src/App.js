import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './pages/error404';

function App() {
  return (
    <div className="App container-fluid">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="Tecno People" />
            </Route>
            <Route exact path="/category/:id">
              <ItemListContainer greeting="Tecno People" />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer category="Speakers" />
            </Route>
            <Route exact path="/cart">
              <h2>Purchase details:</h2>
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
