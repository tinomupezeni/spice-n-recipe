import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default class RecipeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      apiKey: "97a5fea319c44438be6c71d010fdc6a7",
      numOfRecipes: 100,
      recipeSteps: false,
      ingredients: false,
      query: null,
      recipeSearch: false,
      searchRecipeId: null,
      hasPoorNetwork: null,
      fetchingData: false,
      isExpanded: null,
      instructions: null,
      processing: {},
    };
    this.getRecipeDataById = this.getRecipeDataById.bind(this);
    this.searching = this.searching.bind(this);
    this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
    this.closeErrorMessage = this.closeErrorMessage.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.toggleExpandInstruction = this.toggleExpandInstruction.bind(this);
    this.recipeSteps = this.recipeSteps.bind(this);
  }

  // get recipe data by id
  getRecipeDataById(id) {
    const apiKey = this.state.apiKey;
    this.setState((prevState) => ({
      fetchingData: true,
      searchRecipeId: id,
      processing: { ...prevState.processing, [id]: !prevState.processing[id] },
    }));

    const options = {
      method: "GET",
      url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`,
    };
    axios
      .request(options)
      .then((response) => {
        const index = this.state.recipes.findIndex(
          (recipe) => recipe.id === id
        );
        if (index !== -1) {
          this.setState((prevState) => {
            const newRecipes = [...prevState.recipes];
            newRecipes[index] = response.data;
            return { recipes: newRecipes };
          });
          this.setState({ fetchingData: false, processing: false });
        } else {
          this.setState((prevState) => ({
            recipes: [...prevState.recipes, response.data],
          }));
          this.setState({ fetchingData: false, processing: false });
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.error("error : ", error);
      });
  }

  onSearchQueryChange = (query) => {
    console.log(query);
    this.setState({ query: query });
    this.searching(query);
  };
  //   searching
  searching(query) {
    const apiKey = this.state.apiKey;
    const numOfRecipes = this.state.numOfRecipes;
    this.setState({
      recipes: [],
      fetchingData: true,
      hasPoorNetwork: false,
    });
    // timer
    this.networkTimer = setTimeout(() => {
      this.setState({ hasPoorNetwork: true });
    }, 5000);
    const options = {
      method: "GET",
      url: "https://api.spoonacular.com/recipes/complexSearch",
      params: {
        query: query,
        number: numOfRecipes,
        apiKey: apiKey,
      },
    };
    console.log(query);
    axios
      .request(options)
      .then((response) => {
        clearTimeout(this.networkTimer);
        this.setState({ recipes: response.data.results });
        this.setState({ fetchingData: false });
      })
      .catch((error) => {
        console.error("error : ", error);
        this.setState({ fetchingData: false });
      });
  }
  // toggle instructions
  toggleExpand(id) {
    this.setState((prevState) => ({
      isExpanded: prevState.isExpanded === id ? null : id,
    }));
  }

  // toggle instructions
  toggleExpandInstruction(id) {
    this.setState((prevState) => ({
      instructions: prevState.instructions === id ? null : id,
    }));
  }

  recipeSteps() {
    this.setState({ recipeSteps: true });
  }
  closeErrorMessage(e) {
    if (!e.target.closest(".ingredients")) {
      this.setState({ isExpanded: null });
    }
    if (!e.target.closest(".recipe-instr")) {
      this.setState({ instructions: null, recipeSteps: false });
    }
  }

  componentDidMount() {
    if (localStorage.getItem("initial")) {
      this.searching(localStorage.getItem("initial"));
      localStorage.removeItem("initial");
    }
    document.addEventListener("mousedown", this.closeErrorMessage);
  }

  componentWillUnmount() {
    clearTimeout(this.networkTimer);
    document.removeEventListener("mousedown", this.closeErrorMessage);
  }
  render() {
    const {
      recipes,
      recipeSteps,
      searchRecipeId,
      hasPoorNetwork,
      isExpanded,
      instructions,
      processing,
    } = this.state;
    return (
      <>
        <div className="recipes">
          <h1>recipe</h1>
          <div className="search">
            <SearchBar onSearchQueryChange={this.onSearchQueryChange} />
          </div>
          <div className="recipe-cont">
            {recipes.length === 0 ? (
              hasPoorNetwork ? (
                <p>
                  <svg
                    class="spinner"
                    width="65px"
                    height="65px"
                    viewBox="0 0 66 66"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      class="path"
                      fill="none"
                      stroke-width="6"
                      stroke-linecap="round"
                      cx="33"
                      cy="33"
                      r="30"
                    ></circle>
                  </svg>{" "}
                  you have poor network. Please wait...
                </p>
              ) : (
                <p>
                  <svg
                    className="spinner"
                    width="65px"
                    height="65px"
                    viewBox="0 0 66 66"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="path"
                      fill="none"
                      stroke-width="6"
                      stroke-linecap="round"
                      cx="33"
                      cy="33"
                      r="30"
                    ></circle>
                  </svg>
                </p>
              )
            ) : (
              recipes.map((recipe, index) => {
                const maxLikes = 300;
                let starRating = Math.ceil(
                  (recipe.aggregateLikes / maxLikes) * 5
                );
                console.log("hie");
                starRating = Math.max(1, Math.min(5, starRating));
                const isExpandedId = isExpanded === recipe.id;
                const isExpandedInstruction = instructions === recipe.id;

                return (
                  <div className="recipe" key={index}>
                    <div onClick={() => this.getRecipeDataById(recipe.id)}>
                      <img src={recipe.image} alt={recipe.sourceName} />
                      <h5>{recipe.title}</h5>
                    </div>
                    {processing[recipe.id] && (
                      <p>
                        <svg
                          className="spinner"
                          width="50px"
                          height="50px"
                          viewBox="0 0 66 66"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            className="path"
                            fill="none"
                            stroke-width="6"
                            stroke-linecap="round"
                            cx="33"
                            cy="33"
                            r="30"
                          ></circle>
                        </svg>
                      </p>
                    )}
                    {recipe.aggregateLikes && (
                      <>
                        <StarRatings
                          rating={
                            recipe.id === searchRecipeId
                              ? Math.max(
                                  1,
                                  Math.min(
                                    5,
                                    (recipe.aggregateLikes / maxLikes) * 5
                                  )
                                )
                              : starRating
                          }
                          starDimension="20px"
                          starSpacing="5px"
                          starRatedColor="#123447"
                          starEmptyColor="#fff"
                          style={{ zIndex: 0 }}
                        />
                        <p>
                          estimated cooking time : {recipe.readyInMinutes} mins
                        </p>
                        <p>
                          <b>ingredients</b>
                        </p>
                        {isExpandedId ? (
                          <ul className="ingredients">
                            {recipe.extendedIngredients.map((ingr, index) => {
                              return (
                                <li key={index}>
                                  <span>{ingr.original}</span>
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <>
                            <ul>
                              {recipe.extendedIngredients
                                .slice(0, 3)
                                .map((ingr, index) => {
                                  return (
                                    <li key={index}>
                                      <span>{ingr.original}</span>
                                    </li>
                                  );
                                })}
                            </ul>
                            {recipe.extendedIngredients.length > 5 && (
                              <p
                                className="readMore"
                                onClick={() => this.toggleExpand(recipe.id)}
                              >
                                {isExpandedId ? (
                                  <FontAwesomeIcon icon={faArrowUp} />
                                ) : (
                                  <p>
                                    ...show more{" "}
                                    <FontAwesomeIcon icon={faArrowDown} />{" "}
                                  </p>
                                )}
                              </p>
                            )}
                          </>
                        )}
                        <p
                          className="instructions"
                          onClick={() =>
                            this.toggleExpandInstruction(recipe.id)
                          }
                        >
                          <b>instructions</b>
                        </p>
                        {isExpandedInstruction && (
                          <ul className="recipe-instr">
                            {recipe.analyzedInstructions.length > 0 ? (
                              recipeSteps ? (
                                recipe.analyzedInstructions[0].steps.map(
                                  (instr, index) => {
                                    return <li key={index}>{instr.step}</li>;
                                  }
                                )
                              ) : (
                                recipe.analyzedInstructions[0].steps
                                  .slice(0, 3)
                                  .map((instr, index) => {
                                    return <li key={index}>{instr.step}</li>;
                                  })
                              )
                            ) : recipe.instructions ? (
                              recipeSteps ? (
                                recipe.instructions
                              ) : (
                                recipe.instructions.slice(0, 10)
                              )
                            ) : (
                              <p>No instructions available</p>
                            )}

                            {!recipeSteps && (
                              <p
                                className="readMore"
                                onClick={() => this.recipeSteps()}
                              >
                                {isExpandedId ? (
                                  <FontAwesomeIcon icon={faArrowUp} />
                                ) : (
                                  <p>
                                    ...more{" "}
                                    <FontAwesomeIcon icon={faArrowDown} />{" "}
                                  </p>
                                )}
                              </p>
                            )}
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </>
    );
  }
}
