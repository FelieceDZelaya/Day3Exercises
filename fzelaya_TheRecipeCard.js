var theRecipe = {
    title: 'Chicken Soup',
    servings: 2,
    ingredients: ['chicken', 'veggies', 'broth']
};

console.log(theRecipe.title);
console.log(`Servings: ${theRecipe.servings}`);
console.log('Ingredients:');

for (var i = 0; i < theRecipe.ingredients.length; i++) {
    console.log(theRecipe.ingredients[i]);
}