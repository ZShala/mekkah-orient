import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";
import MenuDropdown from "../menu-item/menu-dropdown/menu-dropdown.js";

const MenuItem = ({
  title,
  imageUrl,
  firstItem,
  secondItem,
  thirdItem,
  size,
  history,
  linkUrl,
  match,
}) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">
          <MenuDropdown
            firstItem={firstItem}
            secondItem={secondItem}
            thirdItem={thirdItem}
            title={title}
          />
        </h1>
        {/* <span className="subtitle">SHOP NOW</span> */}
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
