import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './pages/error404';
import CartProvider from './contexts/CartContext'
import Cart from "./components/Cart/Cart"
import Checkout from './components/Checkout/Checkout';

function App() {


    return (
    <div className="App container-fluid">
        <BrowserRouter>
          <CartProvider>
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
                  <Cart/>
                </Route>
                <Route exact path="/checkout">
                  <Checkout/>
                </Route>
              <Route path="*" component={NotFound} />
            </Switch>
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
