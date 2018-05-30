import React, { Component } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { toggleDropdown: false };
  }
  handleDropdown() {
    this.setState({
      toggleDropdown: !this.state.toggleDropdown
    });
  }
  render() {
    return (
      <div>
        <div className="sidenav">
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Clients</Link>
          <Link to="/">Contact</Link>
          <button
            className="dropdown-btn"
            onClick={this.handleDropdown.bind(this)}
          >
            Dropdown
            <i className="fa fa-caret-down" />
          </button>
          <div
            className={
              this.state.toggleDropdown
                ? 'drop-container-show'
                : 'drop-container-hide'
            }
          >
            <a href="">Link 1</a>
            <a href="">Link 2</a>
            <a href="">Link 3</a>
          </div>
          <a href="" id="seach">
            Search
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
