import React, { Component } from "react";
import Product from "./pages/product/Product";
import ProductsList from "./pages/productsList/ProductsList";
import Cart from "./pages/cart/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cat: "",
    };
  }
  componentDidMount() {
    this.setState({
      cat: window.location.pathname.substring(1),
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/">
              <Route
                path=":cat"
                element={<ProductsList cat={this.state.cat} />}
              />
              <Route path="" element={<ProductsList cat={this.state.cat} />} />
            </Route>
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
