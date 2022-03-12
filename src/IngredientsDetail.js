import React from "react";

function IngredientsDetail(prop) {
  return (
    <>
      {
        <div>
          <h1>{prop.meal.strMeal}</h1>
          <img className="meal-image-2" src={prop.meal.strMealThumb} alt="" />
          <div className="meal-name">
            <p>{prop.meal.strCategory}</p>
            <p>{prop.meal.strArea}</p>
          </div>
          <h1>Instructions</h1>
          <p>{prop.meal.strInstructions}</p>
          <h1>Ingredients</h1>
          <ul>
            {prop.ingredients.map((ingredient) => {
              return <li>{ingredient}</li>;
            })}
          </ul>
        </div>
      }
    </>
  );
}

export default IngredientsDetail;
