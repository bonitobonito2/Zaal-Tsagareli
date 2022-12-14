import React, { Fragment } from "react";
import classes from "./totalPrice.module.css";
class TotalPrice extends React.Component {
  render() {
    return (
      <Fragment>
        <div className={classes.taxDiv}>
          <span>Tax 21%: </span>
          
          <span className={classes.taxPrice}>
            {this.props.symbol}
            {((this.props.totalPrice * 21) / 100).toFixed(2)}{" "}
          </span>
        </div>

        <div className={classes.taxDiv}>
          <span>Quantity: </span>
          <span className={classes.taxPrice}>
           {this.props.quantity}
          </span>
        </div>

        <div className={classes.totalPriceDiv}>
         
            <span className={classes.total}>Total:</span>
         

          <div className={classes.price}>
            <span>
              {this.props.symbol}
              {this.props.totalPrice}
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TotalPrice;
