import React from "react";
import { Link } from "react-router-dom";
import { IngredientsListItem } from "./IngredientsListItem";

export const IngredientsList = ({ isLoading, ingredients, onDelete }) => (
  <div className="list-container">
    <h1>Ingredients</h1>
    {isLoading ? (
      <p>Loading ... </p>
    ) : (
      ingredients.map((ingredient) => (
        <IngredientsListItem
          key={ingredient.name}
          ingredient={ingredient}
          onDelete={onDelete}
        />
      ))
    )}
    <Link to="/add-ingredient">
      <button className="space-before left-action">+ Add Ingredients</button>
    </Link>
  </div>
);
