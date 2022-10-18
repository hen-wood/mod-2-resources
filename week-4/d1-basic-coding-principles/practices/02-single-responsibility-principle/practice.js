/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
function combineIngredients(pieType, recipe) {
  let combiningMsg = `Combining ingredients for ${pieType}: `
  combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
  console.log(combiningMsg);
}
function ingredientPrinter(pieType, pieQuantity, recipe) {
  for (let i = 0; i < pieQuantity; i++) {
    // Print the ingredients for each ingredient in the recipe
    combineIngredients(pieType, recipe)
    // Print the nth pie that was baked
    console.log(`Baked pie ${i + 1}!`);
  }
}
function costCalc(recipe) {
  let costOfPie = recipe.reduce((prev, current) => {
    return prev + current.cost;
  }, recipe[0].cost);
  return costOfPie
}
function costPrinter(recipe) {
  console.log(`Cost per pie: ${costCalc(recipe)}`);
}
function revenuePrinter(cost, quantity, profitMargin = 1.2) {
  const totalCost = cost * quantity
  const revenue = totalCost * profitMargin
  console.log(`Sold ${quantity} pies for $${revenue.toFixed(2)}!`);
}
function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  const recipe = recipes[pieType];
  const costOfPie = costCalc(recipe)
  ingredientPrinter(pieType, pieQuantity, recipe)
  costPrinter(recipe)
  revenuePrinter(costOfPie, pieQuantity, profitMargin)
}

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};
