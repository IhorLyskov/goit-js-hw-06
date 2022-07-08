const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");
const ingredientsItems = ingredients.map((ingredientItem) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = ingredientItem;
  return ingredient;
});

ingredientsRef.append(...ingredientsItems);
console.log(ingredientsItems);
