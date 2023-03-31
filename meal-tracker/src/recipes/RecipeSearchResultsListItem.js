import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const RecipeSearchResultsListItem = ({ recipe, ingredients = [] }) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const selectedDate = new Date(params.get("date"));
  //   const date = new Date();
  //   const selectedDate = date.getDate();

  const navigate = new useNavigate();
  const missingIngredients = recipe.ingredients.filter(
    (recipeIngredient) =>
      !ingredients.some(
        (ingredient) => ingredient.name === recipeIngredient.name
      )
  );

  const addMealWithRecipe = async () => {
    await fetch("/meals", {
      method: "post",
      body: JSON.stringify({ date: selectedDate, recipeId: recipe.id }),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/");
  };

  return (
    <div className="search-list-item" onClick={addMealWithRecipe}>
      <h3>{recipe.name}</h3>
      {missingIngredients.length === 0 ? (
        <p>You have all the required ingredients!</p>
      ) : (
        <p>You're missing {missingIngredients.length} ingredients</p>
      )}
    </div>
  );
};
