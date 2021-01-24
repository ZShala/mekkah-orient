import React, { Component } from "react";
import "./menu-dropdown.styles.scss";

class MenuDropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.getElementById('title-btn').addEventListener("mouseleave", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.getElementById('title-btn').removeEventListener("mouseleave", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div  id='title-btn'>
        <button onMouseEnter={this.showMenu} className="title-btn">
          {this.props.title}
        </button>

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            {this.props.firstItem ? (
              <button className='item-btn'> {this.props.firstItem} </button>
            ) : null}

            {this.props.secondItem ? (
              <button className='item-btn'> {this.props.secondItem} </button>
            ) : null}

            {this.props.thirdItem ? (
              <button className='item-btn'> {this.props.thirdItem} </button>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

export default MenuDropdown;
