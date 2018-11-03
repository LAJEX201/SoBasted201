var allRecipes = [];

var RecipesConstructor = function(name, servings, course){
  this.name = name;
  this.servings = servings;
  this.course = course;
  this.ingredients = [];
  allRecipes.push(this);
};

var IngredientsConstructor = function (name, qty, measurementunit, location) {
  this.name = name;
  this.quantity = qty;
  this.measurementunit = measurementunit;
  this.location = location;
};

RecipesConstructor.prototype.ingredientsArrayCreator = function (name, qty, measurementunit, location) {
  var ingredOne = new IngredientsConstructor (name, qty, measurementunit, location);
  this.ingredients.push(ingredOne);
};

var main1 = new RecipesConstructor ('CIDER-BRINED TURKEY WITH STAR ANISE AND CINNAMON', 10, 'MAIN DISH');
main1.ingredientsArrayCreator('APPLE CIDER', 9, 'CUPS', 'JUICE & BEVERAGES');
main1.ingredientsArrayCreator('KOSHER SALT', 1, 'CUP', 'SPICES');
main1.ingredientsArrayCreator('SOY SAUCE', 1, 'CUP', 'CONDIMENTS');
main1.ingredientsArrayCreator('BROWN SUGAR', .5, 'CUP', 'BAKING');
main1.ingredientsArrayCreator('WHOLE PEPPERCORNS', 16, 'EACH', 'SPICES');
main1.ingredientsArrayCreator('STAR ANISE PODS', 12, 'EACH', 'SPICES');
main1.ingredientsArrayCreator('GARLIC CLOVES', 6, 'EACH', 'PRODUCE');
main1.ingredientsArrayCreator('SCALLIONS', 6, 'EACH', 'PRODUCE');
main1.ingredientsArrayCreator('FRESH UNPEELED GINGER', 1.5, 'INCHES', 'PRODUCE');//THIS HAS A WEIRD UNIT
main1.ingredientsArrayCreator('DRIED SHITAKE MUSHROOMS', 5, 'EACH', 'PRODUCE');
main1.ingredientsArrayCreator('4-INCH CINNAMON STICKS', 2, 'EACH', 'SPICES');
main1.ingredientsArrayCreator('CILANTRO', 2, 'SPRIGS', 'PRODUCE');//THIS HAS A WEIRD UNIT
main1.ingredientsArrayCreator('TURKEY', 12, 'LBS', 'MEAT');
main1.ingredientsArrayCreator('APPLES', 2, 'EACH', 'PRODUCE');
main1.ingredientsArrayCreator('BUTTER', .5, 'CUP', 'DAIRY');

var main2 = new RecipesConstructor ('BOURBON ORANGE GLAZED HAM', 10, 'MAIN DISH');
main2.ingredientsArrayCreator('ORANGE MARMALADE', .75, 'CUPS', 'CONDIMENTS');
main2.ingredientsArrayCreator('MAPLE SYRUP', .25, 'CUPS', 'CONDIMENTS');
main2.ingredientsArrayCreator('WHOLE-GRAIN DIJON MUSTARD', .25, 'CUPS', 'CONDIMENTS');
main2.ingredientsArrayCreator('BOURBON', .25, 'CUPS', 'WINE & LIQUOR');
main2.ingredientsArrayCreator('LEMON JUICE', 2, 'TBS', 'PRODUCE');
main2.ingredientsArrayCreator('GROUND GINGER', .5, 'TSP', 'SPICES');
main2.ingredientsArrayCreator('BONE-IN HALF HAM', 10, 'LBS', 'MEAT');

var main3 = new RecipesConstructor ('MAPLE-GLAZED TURKEY WITH BACON AND SAGE BUTTER', 12, 'MAIN DISH');
main3.ingredientsArrayCreator('TURKEY', 12, 'LBS', 'MEAT');
main3.ingredientsArrayCreator('BUTTER', .75, 'CUPS', 'DAIRY');
main3.ingredientsArrayCreator('FRESH SAGE', 3, 'TBS', 'PRODUCE');
main3.ingredientsArrayCreator('GARLIC CLOVES', 6, 'EACH', 'PRODUCE');
main3.ingredientsArrayCreator('ONION', 1, 'EACH', 'PRODUCE');
main3.ingredientsArrayCreator('LEMON', 3, 'EACH', 'PRODUCE');
main3.ingredientsArrayCreator('ORANGE', 1, 'EACH', 'PRODUCE');
main3.ingredientsArrayCreator('APPLE', 1, 'EACH', 'PRODUCE');
main3.ingredientsArrayCreator('MAPLE SYRUP', 1, 'CUP', 'CONDIMENTS');
main3.ingredientsArrayCreator('BACON', 8, 'STRIPS', 'MEAT');
main3.ingredientsArrayCreator('FLOUR', .25, 'CUPS', 'BAKING');
main3.ingredientsArrayCreator('CHICKEN STOCK', 3, 'CUPS', 'OTHER-GROCERY');

/////////////////////////////////MAIN 1/////////////////////////////////////

var main1ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('main-dish-1')) {
    localStorage.removeItem('main-dish-1');
    mainButton1.setAttribute('class', '');
    console.log(mainButton1);
  } else if(event.target.id === 'main-dish-1'){
    var saveRecipe = JSON.stringify(mainRecipeCiderTurkey);
    // console.log(saveRecipe);
    mainButton1.setAttribute('class', 'selected');
    console.log(mainButton1);
    localStorage.setItem('main-dish-1', saveRecipe);
  }
};

var mainButton1 = document.getElementById('main-dish-1');
mainButton1.addEventListener('submit', main1ButtonClickHandler);

/////////////////////////////////MAIN 2/////////////////////////////////////

var main2ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('main-dish-2')) {
    localStorage.removeItem('main-dish-2');
    mainButton2.setAttribute('class', '');
    console.log(mainButton2);
  } else if(event.target.id === 'main-dish-2'){
    var saveRecipe = JSON.stringify(mainRecipeHam);
    // console.log(saveRecipe);
    mainButton2.setAttribute('class', 'selected');
    console.log(mainButton2);
    localStorage.setItem('main-dish-2', saveRecipe);
  }
};

var mainButton2 = document.getElementById('main-dish-2');
mainButton2.addEventListener('submit', main2ButtonClickHandler);

/////////////////////////////////MAIN 3/////////////////////////////////////

var main3ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('main-dish-3')) {
    localStorage.removeItem('main-dish-3');
    mainButton3.setAttribute('class', '');
    console.log(mainButton3);
  } else if(event.target.id === 'main-dish-3'){
    var saveRecipe = JSON.stringify(mainRecipeHam);
    // console.log(saveRecipe);
    mainButton3.setAttribute('class', 'selected');
    console.log(mainButton3);
    localStorage.setItem('main-dish-3', saveRecipe);
  }
};

var mainButton3 = document.getElementById('main-dish-3');
mainButton3.addEventListener('submit', main3ButtonClickHandler);

//////////////////////////////DESSERT 1/////////////////////////////////////

var dessert1ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('dessert-1')) {
    localStorage.removeItem('dessert-1');
    dessertButton1.setAttribute('class', '');
    console.log(dessertButton1);
  } else if(event.target.id === 'dessert-1'){
    var saveRecipe = JSON.stringify(dessertRecipePumkinPie);
    // console.log(saveRecipe);
    dessertButton1.setAttribute('class', 'selected');
    console.log(dessertButton1);
    localStorage.setItem('dessert-1', saveRecipe);
  }
};

var dessertButton1 = document.getElementById('dessert-1');
dessertButton1.addEventListener('submit', dessert1ButtonClickHandler);

//////////////////////////////DESSERT 2/////////////////////////////////////

var dessert2ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('dessert-2')) {
    localStorage.removeItem('dessert-2');
    dessertButton2.setAttribute('class', '');
    console.log(dessertButton2);
  } else if(event.target.id === 'dessert-2'){
    var saveRecipe = JSON.stringify(dessertRecipeTart);
    // console.log(saveRecipe);
    dessertButton2.setAttribute('class', 'selected');
    console.log(dessertButton2);
    localStorage.setItem('dessert-2', saveRecipe);
  }
};

var dessertButton2 = document.getElementById('dessert-2');
dessertButton2.addEventListener('submit', dessert2ButtonClickHandler);

//////////////////////////////DESSERT 3/////////////////////////////////////

var dessert3ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('dessert-3')) {
    localStorage.removeItem('dessert-3');
    dessertButton3.setAttribute('class', '');
    console.log(dessertButton3);
  } else if(event.target.id === 'dessert-3'){
    var saveRecipe = JSON.stringify(dessertRecipeArkansas);
    // console.log(saveRecipe);
    dessertButton3.setAttribute('class', 'selected');
    console.log(dessertButton3);
    localStorage.setItem('dessert-3', saveRecipe);
  }
};

var dessertButton3 = document.getElementById('dessert-3');
dessertButton3.addEventListener('submit', dessert3ButtonClickHandler);

//QUESTIONS AND COMMENTS
//ALL RECIPE COMPONENTS IN CAPS OR CAN WE GET BACK TO SENTENCE CASE AFTER PULLING FROM LOCAL STORAGE IN ORDER TO RENDER NICELY TO THE TABLES?
//FUNCTION TO PLURALIZE STRINGS WITH MORE THAN 1 EACH? EXAMPLE LEMON VS LEMONS
//ALL QUANTITIES NEED TO BE ENTERED AS DECIMALS
//ESCAPE CHARACTER NEEDED TO USE AN AMPERSAND IN JAVASCRIPT?
//STRIPS OF BACON? HOW DO WE WANT TO HANDLE THIS AS A UNIT?
//CAN WE USE CUP AND CUPS? WRITE A FUNCTION TO STANDARDIZE STRINGS FOR LATER CALCULATIONS?
//CHICKEN STOCK OR CHICKEN BROTH... NEED TO BE CONSISTENT ACROSS RECIPES OR WRITE A FUNCTION THAT KNOWS TO SUM THEM AT THE END.
//WE DON'T NEED TO LIST SALT AND PEPPER OR WATER IN THE INGREDIENTS LISTS
//WHEN IN DOUBT USE THE LOWER NUMBER OF A RANGE OF NUMBERS... EXAMPLE - 8-10 SERVINGS, 6-10 LBS OF TURKEY

//STRETCH GOAL IDEA - WOULD IT BE POSSIBLE FOR THE TABLE TO AUTO EXPAND ON A HOVER TO SHOW THE RECIPES THAT CONTRIBUTED TO THE SUMMED INGREDIENTS? THIS MIGHT NOT BE POSSIBLE IN 201.
