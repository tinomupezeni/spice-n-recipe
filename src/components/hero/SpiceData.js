import React, { Component } from "react";
import "./SpiceData.css";
import CategoryData from "./CategoryData";

export default class SpiceData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpices: false,
      activeIndex: null,
    };
    this.setActiveIndex = this.setActiveIndex.bind(this);
    this.toggleSpiceList = this.toggleSpiceList.bind(this);
  }

  setActiveIndex = (index) => {
    this.setState({ activeIndex: index, showSpices: true });
  };

  toggleSpiceList(e) {
    if (!e.target.closest(".category")) {
      this.setState({ showSpices: false, activeIndex: null });
    }
  }
  componentDidMount(){
    document.addEventListener("mousedown", this.toggleSpiceList);
    
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.toggleSpiceList);
    
  }
  render() {
    const { showSpices, activeIndex } = this.state;
    return (
      <>
        {CategoryData.map((item) => {
          return (
            <div
              className="category"
              key={item.id}
              onClick={() => this.setActiveIndex(item.id)}
            >
              <img src={item.image} />

              <h3>
                {showSpices && activeIndex === item.id ? null : item.name}
              </h3>
              {(showSpices && activeIndex === item.id) &&
                item.spiceList.map((spice, index) => (
                  <div key={index} className="spice">
                    <h4>{spice.name}</h4>
                    <p>
                      <b>Flavor Profile:</b> {spice.flavorProfile}
                    </p>
                    <p>
                      <b>Best Used In:</b> {spice.bestUsedIn}
                    </p>
                    <p>
                      <b>Health Benefits:</b> {spice.healthBenefits}
                    </p>
                    <div></div>
                  </div>
                ))}
            </div>
          );
        })}
      </>
    );
  }
}
