import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  renderOrder = key => {
    const orderFish = this.props.fishes[key];
    if (!orderFish) {
      return null;
    }
    const count = this.props.order[key];
    const isAvalible = orderFish && orderFish.status === "avaiable";
    if (!isAvalible) {
      return (
        <CSSTransition
          classNames="order"
          key={key}
          timeout={{ enter: 250, exit: 250 }}
        >
          <li key={key}>
            sorry !{orderFish ? orderFish.name : "fish"} isno loggner
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 250, exit: 250 }}
      >
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition classNames="count" key={count} timeout={{enter:500,exit:500}}>
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            name: {orderFish.name}
            {formatPrice(count * orderFish.price)}
            <button onClick={() => this.props.removeFishFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const orders = Object.keys(this.props.order);
    const totalAmount = orders.reduce((prevTotoal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvalible = fish && fish.status === "available";
      if (isAvalible) {
        return prevTotoal + count * fish.price;
      } else {
        return prevTotoal;
      }
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orders.map(this.renderOrder)}
        </TransitionGroup>
        {/* <ul className="order"></ul> */}
        <div className="total">
          Total:
          <strong>{formatPrice(totalAmount)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
