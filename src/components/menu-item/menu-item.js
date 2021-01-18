import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";
import careProducts from "../../assets/img/menu/care-products.jpg";
import scarfs from "../../assets/img/menu/scarfs.jpg";
import books from "../../assets/img/menu/books.jpg";
import womenPerfumes from "../../assets/img/menu/women-perfumes.jpg";
import menPerfumes from "../../assets/img/menu/men-perfumes.jpg";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  let img;
  switch (imageUrl) {
    case 'careProducts':
      img = careProducts;
      break;
    case 'scarfs':
      img = scarfs;
      break;
    case 'books':
      img = books;
      break;
    case 'womenPerfumes':
      img = womenPerfumes;
      break;
    case 'menPerfumes':
      img = menPerfumes;
      break;
  }

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
