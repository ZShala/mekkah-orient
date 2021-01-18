import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button";
import { addItem } from "../../redux/cart/cart.actions.js";
import redQuran from "../../assets/img/books/red-book.png";
import pinkQuran from "../../assets/img/books/pink-book.png";
import blueQuran from "../../assets/img/books/blue-book.png";
import greenQuran from "../../assets/img/books/green-book.png";
import whiteQuran from "../../assets/img/books/white-book.png";
import brownQuran from "../../assets/img/books/brown-book.png";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  let img;
  switch (imageUrl) {
    case "redQuran":
      img = redQuran;
      break;
    case "pinkQuran":
      img = pinkQuran;
      break;
    // case "blueQuran":
    //   img = blueQuran;
    //   break;
    case "greenQuran":
      img = greenQuran;
      break;
    case "whiteQuran":
      img = whiteQuran;
      break;
    case "brownQuran":
      img = brownQuran;
      break;
  }

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
