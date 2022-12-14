import React from "react";
import classes from "./card.module.css";
import AmountActions from "./amountActions/amountActions";
import { parser } from "../../../../../helper/CartAttributeParser";

class CartProductCard extends React.Component {
  constructor(props) {
    super(props);

    const { name, brand, id, count, index1, index2, index3, currencies } =
      props.product;

    const myProduct = props.fullProduct.find((e) => e.product.id === id);

    const defaultAttributes = myProduct.product.attributes;
    const gallery = myProduct.product.gallery;
    const prices = myProduct.product.prices;

    this.state = {
      product: {
        name,
        brand,
        id,
        count,
      },
      choosenAttributes: [index1, index2, index3],
      defaultAttributes: defaultAttributes,
      currencies,
      gallery,
      prices,
    };
  }

  render() {
    return (
      <div key={Math.random()} className={classes.card}>
        <div  key={Math.random()}  className={classes.description}>
          <span className={classes.brandName}>{this.state.product.brand}</span>
          <span>{this.state.product.name}</span>
          <span className={classes.coast}>
            {this.state.currencies[this.props.currencyIndex].currency.symbol}
            {this.state.prices[this.props.currencyIndex].amount}
          </span>

          {this.state.product &&
            parser(this.state.defaultAttributes, this.state.choosenAttributes)}
        </div>

        <AmountActions
          id={this.state.product.id}
          addToCart={this.props.addToCart}
          count={this.state.product.count}
          removeFromCart={this.props.removeFromCart}
          takeData={this.props.takeData}
          indexes={this.state.choosenAttributes}
        />

        <div className={classes.img}>
          <img src={this.state.gallery[0]} />
        </div>
      </div>
    );
  }
}

export default CartProductCard;
