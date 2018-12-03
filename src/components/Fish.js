import React from "react";
import { formatPrice } from "../helpers";
import { PropTypes } from "prop-types";
import { render } from 'react-dom';


// const Fish = (props) => {
//   return({
//     render(

//     )
//   });
// } 


class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string
    })
  };

  /**
   * add fish in order
   */
  addThisFish = () => {
    console.log("add this fish", this.props.index);
    this.props.addFishToOrder(this.props.index);
  };

  render() {
    /** props 解構. */
    const { name, image, price, desc, status } = this.props.detail;

    const isAvailable = status === "avaiable";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p className="desc">{desc}</p>
        <button disabled={!isAvailable} onClick={this.addThisFish}>
          {isAvailable ? "Add To Cart" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
