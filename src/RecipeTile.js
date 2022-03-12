import React from "react";

function RecipeTile(prop) {
  function showRecipe(e) {
    e.stopPropagation();
    let x = e.target.attributes[1].value;
    prop.showMeals(true, x);
    console.log(x);
  }
  function showRecipe2(e) {
    e.stopPropagation();
    let x = e.target.parentElement.attributes[1].value;
    prop.showMeals(true, x);
    console.log(x);
  }
  return (
    <div className="meal">
      <img className="meal-image" src={prop.recipe.strMealThumb} alt="" />
      <div className="meal-info" onClick={showRecipe} id={prop.recipe.idMeal}>
        <h3 onClick={showRecipe2}>{prop.recipe.strMeal}</h3>
      </div>
    </div>
  );
}

export default RecipeTile;
