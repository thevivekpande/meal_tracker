import { getIngredients } from "./getIngredients";
import { getRecipes } from "./getRecipes";

export const getPopulatedIngredients = async () => {
  const meals = await getIngredients();
  const recipes = await getRecipes();

  const populatedIngredients = meals.map((ingredient) => ({
    ...ingredient,
    recipe: recipes.find((recipe) => recipe.name === ingredient.name),
  }));

  return populatedIngredients;
};
