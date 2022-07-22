import React, { Component } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "../../components/Header/Header";
import { sample } from "../../data";
import "./productList.css";

export class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: sample.categories[0].products,
    };
  }

  componentDidMount() {
    this.setState({
      items: sample.categories[0].products,
    });
  }

  render() {
    console.log(this.props.cat);
    return (
      <div className="Container">
        <Header />
        <h2 className="ItemCat">Category name</h2>
        <div className="ItemList">
          {this.state.items.map((item, i) => (
            <ProductCard item={item} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductsList;
