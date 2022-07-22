import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { graphql } from "@apollo/client/react/hoc";
import { getProductQuery } from "../../queries/queries";
// import { sample } from "../../data";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      item: null,
    };
  }

  displayProduct() {
    if (this.props.data.loading) {
      return <div>Loading</div>;
    } else {
      let prod = this.props.data.product;
      return (
        <div className="Wrapper">
          <div className="ImgContainer">
            <div className="ImgList">
              {prod.gallery.map((image, i) => (
                <img
                  className="SmallImage"
                  alt=""
                  src={image}
                  key={i}
                  onMouseOver={this.hoverHandler}
                />
              ))}
            </div>
            <img className="Image" alt="" src={prod.gallery[0]} />
          </div>
          <div className="InfoContainer">
            <h2 className="Brand">{prod.brand}</h2>
            <h2 className="Name">{prod.name}</h2>
            <div className="attContainer">
              {prod.attributes.map((att) => (
                <div className="OptionContainer" key={att.id}>
                  <span className="OptionTitle">{att.name}:</span>
                  <div className={"Option"}>
                    {att.items.map((i) => (
                      <div
                        className={`${att.type}`}
                        style={{
                          backgroundColor: `${
                            att.type === "swatch" ? i.value : "white"
                          }`,
                        }}
                        key={i.id}
                        onClick={this.clickHandler}
                      >
                        {att.type !== "swatch" ? i.value : ""}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="PriceContainer">
              <span className="OptionTitle">PRICE:</span>
              <span className="Price">
                {prod.prices[0].currency.symbol} {prod.prices[0].amount}
              </span>
            </div>
            <button className="Button">ADD TO CART</button>
            <p
              className="Desc"
              dangerouslySetInnerHTML={{ __html: prod.description }}
            />
          </div>
        </div>
      );
    }
  }

  hoverHandler = (e) => {
    this.setState({ image: e.target.src });
  };

  render() {
    return (
      <>
        <Header />
        {this.displayProduct()}
      </>
    );
  }
}

export default graphql(getProductQuery, {
  options: { variables: { id: window.location.pathname.substring(9) } },
})(Product);
