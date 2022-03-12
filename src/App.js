import "./styles.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import ShowIngredient from "./ShowIngredient";
import IngredientsDetail from "./IngredientsDetail";
import RecipeTile from "./RecipeTile";

function App() {
  const [input, setInput] = useState("");
  const [meal, setMeal] = useState([]);
  const [meals, setMeals] = useState("");
  const [recipe, setRecipe] = useState("");

  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;

  function showMeal(x, id) {
    // console.log(x);
    if (x == true) {
      setRecipe(
        <ShowIngredient meal={meal} id={id} getIngredients={getIngredients} />
      );
    }
  }

  async function getMeal() {
    let result = await Axios.get(url).catch((err) => console.log(err));
    setMeal(result.data.meals);
  }

  useEffect(() => {
    const mealrecipe = [];
    if (meal !== null) {
      meal.map((recipe) => {
        return mealrecipe.push(
          <RecipeTile recipe={recipe} showMeals={showMeal} meal={meal} />
        );
      });
      setMeals(mealrecipe);
    } else {
      setMeals(
        <>
          <h2>No result Found</h2>
        </>
      );
    }
  }, [meal]);

  function searchMeal(e) {
    e.preventDefault();
    setRecipe("");
    if (input !== "") {
      console.log(getMeal());
    } else {
      setMeals("");
      alert("Please enter a value");
    }
  }

  function inputHandler(e) {
    setInput(e.target.value);
  }

  function getIngredients(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }
    return ingredients;
  }

  function showRandom(e) {
    setMeals("");
    setInput("");
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => res.json())
      .then((data) => {
        const meal = data.meals[0];
        let ingredients = getIngredients(meal);
        // console.log(ingredients);
        setRecipe(<IngredientsDetail meal={meal} ingredients={ingredients} />);
      });
  }

  return (
    <div className="container">
      <div className="title">
        <h1>Meal Finder</h1>
      </div>
      <div className="search-form">
        <form>
          <input
            type="text"
            className="search-bar"
            placeholder="Search For Meal"
            value={input}
            onChange={inputHandler}
          />
          <button type="submit" className="search-btn" onClick={searchMeal}>
            search
          </button>
          <button className="shuffle-btn" onClick={showRandom}>
            shuffle
          </button>
        </form>
      </div>
      <div className="result-head"></div>
      <div className="meals">{meals}</div>
      <div className="single-meal">{recipe}</div>
    </div>
  );
}

export default App;
