import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import NotFound from "./Components/NotFound/NotFound";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Login from './Components/Login/Login';
import Shipment from "./Components/Shipment/Shipment";
import { createContext, useState } from "react";
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
export const userContext = createContext()
function App() {
const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h2>{loggedInUser.email}</h2>
      <img src={loggedInUser.photo} alt=""/>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path = "/shop">
          <Shop></Shop>
          </Route>
          <Route path = "/review">
              <Review></Review>
          </Route>
          <PrivetRoute path = "/inventory">
            <Inventory></Inventory>
          </PrivetRoute>
          <Route exact path = "/">
            <Shop></Shop>
          </Route>
          <Route path = "/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <PrivetRoute path = "/shipment">
            <Shipment></Shipment>
          </PrivetRoute>
          <Route path = "/login">
            <Login></Login>
          </Route>
          <Route path = "*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     
    </userContext.Provider>
  );
}

export default App;
