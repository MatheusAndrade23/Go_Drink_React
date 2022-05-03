export const IngredientsArray = (drink) => {
  const ingredients = [];
  const measures = [];

  if (drink.strIngredient1) ingredients.push(drink.strIngredient1);
  if (drink.strIngredient2) ingredients.push(drink.strIngredient2);
  if (drink.strIngredient3) ingredients.push(drink.strIngredient3);
  if (drink.strIngredient4) ingredients.push(drink.strIngredient4);
  if (drink.strIngredient5) ingredients.push(drink.strIngredient5);
  if (drink.strIngredient6) ingredients.push(drink.strIngredient6);
  if (drink.strIngredient7) ingredients.push(drink.strIngredient7);
  if (drink.strIngredient8) ingredients.push(drink.strIngredient8);
  if (drink.strIngredient9) ingredients.push(drink.strIngredient9);
  if (drink.strIngredient10) ingredients.push(drink.strIngredient10);
  if (drink.strIngredient11) ingredients.push(drink.strIngredient11);
  if (drink.strIngredient12) ingredients.push(drink.strIngredient12);
  if (drink.strIngredient13) ingredients.push(drink.strIngredient13);
  if (drink.strIngredient14) ingredients.push(drink.strIngredient14);
  if (drink.strIngredient15) ingredients.push(drink.strIngredient15);

  if (drink.strMeasure1) measures.push(drink.strMeasure2);
  if (drink.strMeasure2) measures.push(drink.strMeasure2);
  if (drink.strMeasure3) measures.push(drink.strMeasure3);
  if (drink.strMeasure4) measures.push(drink.strMeasure4);
  if (drink.strMeasure5) measures.push(drink.strMeasure5);
  if (drink.strMeasure6) measures.push(drink.strMeasure6);
  if (drink.strMeasure7) measures.push(drink.strMeasure7);
  if (drink.strMeasure8) measures.push(drink.strMeasure8);
  if (drink.strMeasure9) measures.push(drink.strMeasure9);
  if (drink.strMeasure10) measures.push(drink.strMeasure10);
  if (drink.strMeasure11) measures.push(drink.strMeasure11);
  if (drink.strMeasure12) measures.push(drink.strMeasure12);
  if (drink.strMeasure13) measures.push(drink.strMeasure13);
  if (drink.strMeasure14) measures.push(drink.strMeasure14);
  if (drink.strMeasure15) measures.push(drink.strMeasure15);

  if (ingredients.length == measures.length) {
    return { ingredients: ingredients, measures: measures };
  } else {
    measures.push('lots');
    return { ingredients: ingredients, measures: measures };
  }
};
