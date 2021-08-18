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
              <div>Route: /</div>
              <ItemListContainer greeting="Tecno People" />
            </Route>
            <Route exact path="/category/:id">
              <div>Route: /Category ID</div>
              <ItemListContainer greeting="Tecno People" />
            </Route>
            <Route exact path="/item/:id">
              <div>Route: /Item ID</div>
              <ItemDetailContainer category="Speakers" />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
