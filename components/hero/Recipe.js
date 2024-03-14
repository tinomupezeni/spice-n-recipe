import React, { Component } from "react";
import "./Recipe.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";
import SearchBar from "./SearchBar";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      apiKey: "97a5fea319c44438be6c71d010fdc6a7",
      numOfRecipes: 100,
      recipeSteps: false,
      ingredients: false,
      query: null,
      // recipeSearch: false,
      searchRecipeId: null,
      fetchingData: false,
      isExpanded: null,
      hasPoorNetwork: false,
      instructions: null,
    };
    this.getRecipes = this.getRecipes.bind(this);
    // this.getRecipeDataById = this.getRecipeDataById.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.closeErrorMessage = this.closeErrorMessage.bind(this);
    this.toggleExpandInstruction = this.toggleExpandInstruction.bind(this);
    this.recipeSteps = this.recipeSteps.bind(this);
  }
  // spoonacular calling
  getRecipes() {
    const apiKey = this.state.apiKey;
    const numOfRecipes = this.state.numOfRecipes;
    this.setState({ fetchingData: true, hasPoorNetwork: false });
    // timer
    this.networkTimer = setTimeout(() => {
      this.setState({ hasPoorNetwork: true });
    }, 5000);

    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${numOfRecipes}`
      )
      .then((response) => {
        clearTimeout(this.networkTimer);
        this.setState({ recipes: response.data.recipes, fetchingData: false });
        // console.log(response.data.recipes);
        localStorage.setItem("temp", response.data.recipes);
      })
      .catch((error) => {
        console.error("error : ", error);
      });
  }

  // toggle instructions
  toggleExpand(id) {
    this.setState((prevState) => ({
      isExpanded: prevState.isExpanded === id ? null : id,
    }));
  }
  // ingredients
  closeErrorMessage(e) {
    if (!e.target.closest(".ingredients")) {
      this.setState({ isExpanded: null });
    }
    if (!e.target.closest(".recipe-instr")) {
      this.setState({ instructions: null, recipeSteps: false });
    }
  }

  // toggle instructions
  toggleExpandInstruction(id) {
    console.log(id);
    this.setState((prevState) => ({
      instructions: prevState.instructions === id ? null : id,
    }));
  }

  recipeSteps() {
    this.setState({ recipeSteps: true });
  }
  componentDidMount() {
    this.getRecipes();
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
    } = this.state;
    recipes.sort((a, b) => b.aggregateLikes - a.aggregateLikes);

    return (
      <>
        <div className="recipes">
          <h1>recipes</h1>
          <div className="search">
            <SearchBar />
          </div>
          <div className="recipe-cont">
            {recipes.length === 0 ? (
              hasPoorNetwork ? (
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
                  </svg>{" "}
                  you have slow network connection. Please wait...
                </p>
              ) : (
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
                  </svg>
                </p>
              )
            ) : (
              recipes.map((recipe, index) => {
                const maxLikes = 300;
                let starRating = Math.ceil(
                  (recipe.aggregateLikes / maxLikes) * 5
                );

                starRating = Math.max(1, Math.min(5, starRating));
                const isExpandedId = isExpanded === recipe.id;
                const isExpandedInstruction = instructions === recipe.id;

                return (
                  <div className="recipe" key={index}>
                    <div>
                      <img src={recipe.image} alt={recipe.sourceName} />
                      <h5>{recipe.title}</h5>
                    </div>
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
