import React from "react";
import IngredientsDetail from "./IngredientsDetail";

function ShowIngredient(prop) {
  return (
    <>
      <div>
        <h1>
          {prop.meal.map((recipe) => {
            let ingredients = prop.getIngredients(recipe);
            if (recipe.idMeal == prop.id) {
              return (
                <IngredientsDetail meal={recipe} ingredients={ingredients} />
              );
            }
          })}
        </h1>
      </div>
    </>
  );
}

export default ShowIngredient;
