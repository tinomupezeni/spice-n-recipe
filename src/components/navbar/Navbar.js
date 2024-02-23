import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo Files/For Web/png/Color logo - no background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "../../routes/WithRouter";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.btnText = this.btnText.bind(this);
  }

  btnText = () => {
    this.props.dispatch({ type: "TOGGLE" });
  };
  render() {
    const { toggleOn, location } = this.props;
    return (
      <>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="log" />
          </div>
          <div className="icon">
            <button onClick={this.btnText}>
              {toggleOn || location.pathname === "/" ? (
                <Link to="/recipes">
                  <FontAwesomeIcon icon={faBasketShopping} /> recipes
                </Link>
              ) : (
                <Link to="/">
                  <FontAwesomeIcon icon={faLeaf} /> spices
                </Link>
              )}
            </button>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToDrops = (state) => ({
  toggleOn: state.toggleOn,
});
export default withRouter(connect(mapStateToDrops)(Navbar));
