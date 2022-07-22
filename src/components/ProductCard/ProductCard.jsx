import React, { Component } from "react";
import cart from "../../assets/addToCart.svg";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      currency: 0,
    };
  }

  render() {

    return (
      <div className="Card">
        <span
          className="ProdImg"
          role="img"
          aria-label={this.props.item.name}
          style={{ backgroundImage: `url(${this.props.item.gallery[0]})` }}
        >
          {this.props.item.inStock ? (
            <div className="Status">
              <p>OUT OF STOCK</p>
            </div>
          ) : null}
          <Link to={`/product/${this.props.item.id}`}>
            <img src={cart} alt="" className="Add" />
          </Link>
        </span>
        <div className="ProdDesc">
          <h2 className="ProdName">
            {this.props.item.brand} {this.props.item.name}
          </h2>
          <h2 className="ProdPrice">
            {this.props.item.prices[this.state.currency].currency.symbol}{" "}
            {this.props.item.prices[this.state.currency].amount}
          </h2>
        </div>
      </div>
    );
  }
}

export default ProductCard;
