import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store, {DELETERECIPE} from '../../store'

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    this.state = {
      recipes: reduxState.recipesList
    };
  }

  componentDidMount(){
    store.subscribe(() => {
      let tempState = store.getState()
      this.setState({recipes: tempState.recipesList})
    })
  }

  deleteCard = (id) => {
    store.dispatch({type: DELETERECIPE, payload: id})
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          id={i}
          deleteCard={this.deleteCard}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.firstName}
          authorLast={recipe.lastName}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
