import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './pages/error404';
import CartProvider from './contexts/CartContext'
import Cart from "./components/Cart/Cart"

function App() {


    return (
    <div className="App container-fluid">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <CartProvider>
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
                <Cart/>
              </Route>
            </CartProvider>
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
