import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      searchUrl: false,
    };
    this.getSearchQuery = this.getSearchQuery.bind(this);
    this.sendQuery = this.sendQuery.bind(this);
  }

  // searching spoonacular
  getSearchQuery(e) {
    const query = e.target.value;
    this.setState({ query: query });
  }

  //   send search query
  sendQuery = () => {
    if (!this.state.searchUrl) {
      localStorage.setItem("initial", this.state.query);
    } else {
      this.props.onSearchQueryChange(this.state.query);
    }
    this.setState({ searchUrl: true });
  };
  componentWillUnmount() {
    this.setState({ searchUrl: false });
  }
  render() {
    const { query, searchUrl } = this.state;
    return (
      <>
        <div>
          <input
            placeholder="what are you looking for..."
            onChange={this.getSearchQuery}
          />
          <span>
            {query ? (
              !searchUrl ? (
                <Link to={`/recipes/search-recipe`}>
                  <i onClick={this.sendQuery}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </i>
                </Link>
              ) : (
                <i onClick={this.sendQuery}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </i>
              )
            ) : (
              <i>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </i>
            )}
          </span>
        </div>
      </>
    );
  }
}

export default SearchBar;
