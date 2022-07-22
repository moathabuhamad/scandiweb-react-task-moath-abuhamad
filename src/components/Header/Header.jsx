import React, { Component } from "react";
import "./header.css";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/down.svg";
import cart from "../../assets/EmptyCart.svg";
import { sample } from "../../data";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeCat: "", catagoryList: sample.categories };
  }
  render() {
    return (
      <nav className="header">
        <div className="header__nav">
          {this.state.catagoryList.map((catagory) => (
            <Link to={`/${catagory.name}`} key={catagory.name}>
              <div className="nav__catagory">{catagory.name}</div>
            </Link>
          ))}
        </div>
        <img src={logo} className="logo" alt="logo" />
        <div className="header__actions">
          <div className="action__curr">
            <p>$</p>
            <img src={arrow} alt="action__curr button" />
          </div>
          <div className="action__cart">
            <img src={cart} alt="cart button" className="cart__icon" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
