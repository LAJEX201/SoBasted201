'use strict';

var allRecipes = [];
var servingOptions = document.getElementsByClassName('sel');
var servingMultipler = ['Regular', 'Double', 'Triple', 'Quadruple'];

var RecipesConstructor = function(name, servings, course){
  this.name = name.toUpperCase();
  this.servings = servings;
  this.course = course.toUpperCase();
  this.ingredients = [];
  allRecipes.push(this);
};

var IngredientsConstructor = function (name, qty, measurementunit, location) {
  this.name = name.toUpperCase();
  this.quantity = qty;
  this.measurementunit = measurementunit.toUpperCase();
  this.location = location.toUpperCase();
};

RecipesConstructor.prototype.ingredientsArrayCreator = function (name, qty, measurementunit, location) {
  var doesIngredientExist = false;
  var indexOfIngredientExist = -1;

  for (var i = 0; i < this.ingredients; i ++){
    if (name == this.ingredients[i].name){
      indexOfIngredientExist = i;
      doesIngredientExist = true;
    }
  }
  if (doesIngredientExist){
    this.ingredients[indexOfIngredientExist].quantity = this.ingredients[indexOfIngredientExist].quantity + qty;
  } else {
    var ingredOne = new IngredientsConstructor (name, qty, measurementunit, location);
    this.ingredients.push(ingredOne);
  }
};

var selectOptions = function(){
  for(var a = 0; a < servingOptions.length; a++){
    for(var b = 0; b < servingMultipler.length; b++){
      var option = document.createElement('option');
      option.text = servingMultipler[b];
      servingOptions[a].add(option);
    }
  }
};
selectOptions();


//===============================================================================================================================================================================
//    Recipe Construction
//===============================================================================================================================================================================

var appRecipePecan = new RecipesConstructor('SPICED PECANS', 16, 'APPETIZER');
appRecipePecan.ingredientsArrayCreator('salt', 4, 'teaspoons', 'spices');
appRecipePecan.ingredientsArrayCreator('cayenne', 0.5, 'teaspoons', 'spices');
appRecipePecan.ingredientsArrayCreator('white pepper', 1, 'teaspoons', 'spices');
appRecipePecan.ingredientsArrayCreator('nutmeg', 1, 'teaspoons', 'spices');
appRecipePecan.ingredientsArrayCreator('cloves', 1, 'teaspoons', 'spices');
appRecipePecan.ingredientsArrayCreator('allspice', 1, 'teaspoons', 'spices');
appRecipePecan.ingredientsArrayCreator('pecans', 4, 'cups', 'nuts');
appRecipePecan.ingredientsArrayCreator('butter', 0.25, 'cups', 'dairy');
appRecipePecan.ingredientsArrayCreator('maple syrup', 0.333, 'cups', 'condiments');

var appRecipeBrie = new RecipesConstructor('APPLE-PECAN BAKED BRIE', 10, 'APPETIZER');
appRecipeBrie.ingredientsArrayCreator('butter', .0625, 'cups', 'dairy');
appRecipeBrie.ingredientsArrayCreator('apples', 1, 'each', 'produce');
appRecipeBrie.ingredientsArrayCreator('dried cranberries', 0.333, 'cups', 'other-grocery');
appRecipeBrie.ingredientsArrayCreator('pecans', 0.25, 'cups', 'nuts');
appRecipeBrie.ingredientsArrayCreator('brown sugar', .0625, 'cups', 'baking');
appRecipeBrie.ingredientsArrayCreator('cinnamon', 0.25, 'teaspoons', 'spices');
// appRecipeBrie.ingredientsArrayCreator('ground nutmeg', 1, 'dash', 'spices');
appRecipeBrie.ingredientsArrayCreator('Brie cheese', 1, 'cups', 'dairy');
appRecipeBrie.ingredientsArrayCreator('package crackers', 2, 'each', 'other-grocery');

var appRecipePoppers = new RecipesConstructor('Jalapeno Popper Cups', 4, 'APPETIZER');
appRecipePoppers.ingredientsArrayCreator('mini phyllo tart shells (12 per package)', 1, 'each', 'frozen');
appRecipePoppers.ingredientsArrayCreator('cream cheese', .5, 'cups', 'dairy');
appRecipePoppers.ingredientsArrayCreator('shredded cheddar cheese', 0.5, 'cups', 'dairy');
appRecipePoppers.ingredientsArrayCreator('jalapeno peppers', 2, 'each', 'produce');
appRecipePoppers.ingredientsArrayCreator('hot pepper sauce', 1, 'tablespoons', 'condiments');
appRecipePoppers.ingredientsArrayCreator('bacon bits', 1, 'teaspoons', 'meat');
//========================================================================================================================================================================
var mainRecipeCiderTurkey = new RecipesConstructor ('CIDER-BRINED TURKEY WITH STAR ANISE AND CINNAMON', 10, 'MAIN DISH');
mainRecipeCiderTurkey.ingredientsArrayCreator('APPLE CIDER', 9, 'CUPS', 'JUICE & BEVERAGES');
mainRecipeCiderTurkey.ingredientsArrayCreator('KOSHER SALT', 1, 'CUPS', 'SPICES');
mainRecipeCiderTurkey.ingredientsArrayCreator('SOY SAUCE', 1, 'CUPS', 'CONDIMENTS');
mainRecipeCiderTurkey.ingredientsArrayCreator('BROWN SUGAR', .5, 'CUPS', 'BAKING');
mainRecipeCiderTurkey.ingredientsArrayCreator('WHOLE PEPPERCORNS', 16, 'EACH', 'SPICES');
mainRecipeCiderTurkey.ingredientsArrayCreator('STAR ANISE PODS', 12, 'EACH', 'SPICES');
mainRecipeCiderTurkey.ingredientsArrayCreator('GARLIC CLOVES', 6, 'EACH', 'PRODUCE');
mainRecipeCiderTurkey.ingredientsArrayCreator('SCALLIONS', 6, 'EACH', 'PRODUCE');
mainRecipeCiderTurkey.ingredientsArrayCreator('FRESH UNPEELED GINGER', 1, 'EACH', 'PRODUCE');//THIS WAS 1.5 INCHES
mainRecipeCiderTurkey.ingredientsArrayCreator('DRIED SHITAKE MUSHROOMS', 5, 'EACH', 'PRODUCE');
mainRecipeCiderTurkey.ingredientsArrayCreator('CINNAMON STICKS', 2, 'EACH', 'SPICES');
mainRecipeCiderTurkey.ingredientsArrayCreator('CILANTRO', 1, 'EACH', 'PRODUCE');//THIS WAS 2 SPRIGS
mainRecipeCiderTurkey.ingredientsArrayCreator('TURKEY', 12, 'LBS', 'MEAT');
mainRecipeCiderTurkey.ingredientsArrayCreator('APPLES', 2, 'EACH', 'PRODUCE');
mainRecipeCiderTurkey.ingredientsArrayCreator('BUTTER', .5, 'CUPS', 'DAIRY');

var mainRecipeHam = new RecipesConstructor ('BOURBON ORANGE GLAZED HAM', 10, 'MAIN DISH');
mainRecipeHam.ingredientsArrayCreator('ORANGE MARMALADE', .75, 'CUPS', 'CONDIMENTS');
mainRecipeHam.ingredientsArrayCreator('MAPLE SYRUP', .25, 'CUPS', 'CONDIMENTS');
mainRecipeHam.ingredientsArrayCreator('WHOLE-GRAIN DIJON MUSTARD', .25, 'CUPS', 'CONDIMENTS');
mainRecipeHam.ingredientsArrayCreator('BOURBON', .25, 'CUPS', 'WINE & LIQUOR');
mainRecipeHam.ingredientsArrayCreator('LEMON JUICE', 2, 'TABLESPOONS', 'PRODUCE');
mainRecipeHam.ingredientsArrayCreator('GROUND GINGER', .5, 'TEASPOONS', 'SPICES');
mainRecipeHam.ingredientsArrayCreator('BONE-IN HALF HAM', 10, 'LBS', 'MEAT');

var mainRecipeMapleTurkey = new RecipesConstructor ('MAPLE-GLAZED TURKEY WITH BACON AND SAGE BUTTER', 12, 'MAIN DISH');
mainRecipeMapleTurkey.ingredientsArrayCreator('TURKEY', 12, 'LBS', 'MEAT');
mainRecipeMapleTurkey.ingredientsArrayCreator('BUTTER', .75, 'CUPS', 'DAIRY');
mainRecipeMapleTurkey.ingredientsArrayCreator('FRESH SAGE', 3, 'TABLESPOONS', 'PRODUCE');
mainRecipeMapleTurkey.ingredientsArrayCreator('GARLIC CLOVES', 6, 'EACH', 'PRODUCE');
mainRecipeMapleTurkey.ingredientsArrayCreator('ONIONS', 1, 'EACH', 'PRODUCE');
mainRecipeMapleTurkey.ingredientsArrayCreator('LEMONS', 3, 'EACH', 'PRODUCE');
mainRecipeMapleTurkey.ingredientsArrayCreator('ORANGES', 1, 'EACH', 'PRODUCE');
mainRecipeMapleTurkey.ingredientsArrayCreator('APPLES', 1, 'EACH', 'PRODUCE');
mainRecipeMapleTurkey.ingredientsArrayCreator('MAPLE SYRUP', 1, 'CUP', 'CONDIMENTS');
mainRecipeMapleTurkey.ingredientsArrayCreator('BACON', .5, 'LBS', 'MEAT');
mainRecipeMapleTurkey.ingredientsArrayCreator('FLOUR', .25, 'CUPS', 'BAKING');
mainRecipeMapleTurkey.ingredientsArrayCreator('CHICKEN STOCK', 3, 'CUPS', 'OTHER-GROCERY');
//========================================================================================================================================================================
var sideRecipeStuffing = new RecipesConstructor ('Cranberry Cornbread Stuffing', 10, 'Side Dish');
sideRecipeStuffing.ingredientsArrayCreator ('Olive oil', .333, 'Tablespoons', 'Baking');
sideRecipeStuffing.ingredientsArrayCreator ('Italian sausage', 1, 'lbs', 'Meat');
sideRecipeStuffing.ingredientsArrayCreator ('Unsalted butter', .125, 'cups', 'Dairy');
sideRecipeStuffing.ingredientsArrayCreator ('Celery stalks', 2, 'each', 'Produce');
sideRecipeStuffing.ingredientsArrayCreator ('onions', .5, 'each', 'Produce');
sideRecipeStuffing.ingredientsArrayCreator ('apples', 1, 'each', 'Produce');
sideRecipeStuffing.ingredientsArrayCreator ('dried sage', .5, 'teaspoons', 'Spices');
sideRecipeStuffing.ingredientsArrayCreator ('black pepper', .5, 'teaspoons', 'Spices');
sideRecipeStuffing.ingredientsArrayCreator ('chicken stock', 1.5, 'cups', 'Other-Grocery');
sideRecipeStuffing.ingredientsArrayCreator ('Eggs', 1, 'each', 'Dairy');
sideRecipeStuffing.ingredientsArrayCreator ('Dried cranberries', .5, 'cups', 'Other-Grocery');
sideRecipeStuffing.ingredientsArrayCreator ('STOVE TOP Cornbread Stuffing Mix (6 oz.)', 1, 'each', 'Other-Grocery');
sideRecipeStuffing.ingredientsArrayCreator ('fresh sage', 3, 'teaspoons', 'Produce'); //fresh sage leaves for garnish, should i have left this one off?

var sideRecipeShallots = new RecipesConstructor ('Mashed Potatoes with Caramelized Shallots', 8, 'Side Dish');
sideRecipeShallots.ingredientsArrayCreator ('olive oil', 2, 'tablespoons', 'Baking');
sideRecipeShallots.ingredientsArrayCreator ('Shallots', 2, 'cups', 'Produce');
// sideRecipeShallots.ingredientsArrayCreator ('Kosher salt', 1, 'each', 'Spices'); //Kosher salt, no measurements
sideRecipeShallots.ingredientsArrayCreator ('Potatoes', 4, 'lbs', 'Produce');
sideRecipeShallots.ingredientsArrayCreator ('Unsalted butter', 1, 'cups', 'Dairy');
sideRecipeShallots.ingredientsArrayCreator ('Crème fraîche', 1, 'cups', 'Dairy');
sideRecipeShallots.ingredientsArrayCreator ('Whole milk', .5, 'cups', 'Dairy');
// sideRecipeShallots.ingredientsArrayCreator ('Freshly ground black pepper', 1, 'each', 'Spices');

var sideRecipeRoastedBrussels = new RecipesConstructor ('Roasted Brussels Sprouts with Balsamin Carmelized Onions & Bacon', 4, 'Side Dish');
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Brussel Sprouts', 4, 'cups', 'Produce');
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Bacon', .25, 'lbs', 'Meat');
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Butter', .0625, 'cups', 'Dairy');
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Onions', 1, 'each', 'Produce');
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Red pepper flakes', .25, 'teaspoons', 'Spices'); //it was 1 pinch
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Sugar', .0416, 'cups', 'Baking');
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Balsamic vinegar', .5, 'cups', 'Baking');
// sideRecipeRoastedBrussels.ingredientsArrayCreator ('Salt', 1, 'each', 'Spices'); //was to taste
// sideRecipeRoastedBrussels.ingredientsArrayCreator ('Pepper', 1, 'each', 'Spices'); //was to taste

var sideRecipeGreenBean = new RecipesConstructor ('The Ultimate Homemade Green Bean Casserole Recipe', 8, 'Side Dish');
sideRecipeGreenBean.ingredientsArrayCreator ('shallots', 4.5, 'cups', 'Produce');
sideRecipeGreenBean.ingredientsArrayCreator ('Canola oil', 2, 'cups', 'other-grocery');
// sideRecipeGreenBean.ingredientsArrayCreator ('Kosher salt', 1, 'each', 'Spices');
sideRecipeGreenBean.ingredientsArrayCreator ('White button mushrooms', .5, 'lbs', 'Produce');
sideRecipeGreenBean.ingredientsArrayCreator ('Soy sauce', .0416, 'cups', 'Condiments');
sideRecipeGreenBean.ingredientsArrayCreator ('Lemon juice', .666, 'tablespoons', 'Produce');
sideRecipeGreenBean.ingredientsArrayCreator ('chicken stock', 2, 'cups', 'Other-Grocery');
sideRecipeGreenBean.ingredientsArrayCreator ('Heavy cream', 1.5, 'cups', 'Dairy');
sideRecipeGreenBean.ingredientsArrayCreator ('Butter', .125, 'cups', 'Dairy');
sideRecipeGreenBean.ingredientsArrayCreator ('Garlic cloves', 2, 'each', 'Produce'); //2 cloves
sideRecipeGreenBean.ingredientsArrayCreator ('Flour', .25, 'cup', 'Baking');
// sideRecipeGreenBean.ingredientsArrayCreator ('Pepper', 1, 'each', 'Spices'); //Freshly ground black pepper
sideRecipeGreenBean.ingredientsArrayCreator ('Green beans', 2, 'lbs', 'Produce');

var sideRecipeCranberrySauce = new RecipesConstructor ('Orange Maple Cranberry Sauce', 6, 'Side Dish');
sideRecipeCranberrySauce.ingredientsArrayCreator ('Frozen cranberries', 3, 'cups', 'Frozen');
sideRecipeCranberrySauce.ingredientsArrayCreator ('maple syrup', .33, 'cups', 'Condiments');
sideRecipeCranberrySauce.ingredientsArrayCreator ('oranges', 1, 'each', 'Produce');
// sideRecipeCranberrySauce.ingredientsArrayCreator ('fresh orange juice', .5, 'cup', 'Juice & Beverages');
sideRecipeCranberrySauce.ingredientsArrayCreator ('Cinnamon sticks', 1, 'each', 'Spices');

var sideRecipeCreamedCorn = new RecipesConstructor ('Creamed Corn', 4, 'Side Dish');
sideRecipeCreamedCorn.ingredientsArrayCreator ('frozen corn', .625, 'lbs', 'Frozen');
sideRecipeCreamedCorn.ingredientsArrayCreator ('Butter', .1875, 'cups', 'Dairy');
sideRecipeCreamedCorn.ingredientsArrayCreator ('Flour', .1875, 'cups', 'Baking');
sideRecipeCreamedCorn.ingredientsArrayCreator ('Whole Milk', 2, 'cups', 'Dairy');
sideRecipeCreamedCorn.ingredientsArrayCreator ('Sugar', .125, 'cups', 'Baking');
//========================================================================================================================================================================
var dessertRecipePumpkinPie = new RecipesConstructor ('The Great Pumpkin Pie Recipe', 8, 'dessert');
dessertRecipePumpkinPie.ingredientsArrayCreator ('fresh cranberries', 1,'cups', 'produce');
dessertRecipePumpkinPie.ingredientsArrayCreator ('sugar', 2,'cups', 'baking');
dessertRecipePumpkinPie.ingredientsArrayCreator ('pre-made pie crust (2 crusts)', 1, 'each', 'other-grocery');
dessertRecipePumpkinPie.ingredientsArrayCreator ('can of pumpkin puree', 1, 'each', 'other-grocery');
dessertRecipePumpkinPie.ingredientsArrayCreator ('eggs', 3, 'each', 'dairy');
dessertRecipePumpkinPie.ingredientsArrayCreator ('brown sugar', 1.25, 'cups', 'baking');
dessertRecipePumpkinPie.ingredientsArrayCreator ('cornstarch', 1, 'tablespoons', 'baking');
dessertRecipePumpkinPie.ingredientsArrayCreator ('salt', .5, 'teaspoons', 'spices');
dessertRecipePumpkinPie.ingredientsArrayCreator ('cinnamon', 1.5, 'teaspoons', 'spices');
dessertRecipePumpkinPie.ingredientsArrayCreator ('ground ginger', .5, 'teaspoons', 'spices');
dessertRecipePumpkinPie.ingredientsArrayCreator ('nutmeg', .25, 'teaspoons', 'spices');
dessertRecipePumpkinPie.ingredientsArrayCreator ('black pepper', .125, 'teaspoons', 'spices');
dessertRecipePumpkinPie.ingredientsArrayCreator ('heavy cream', 1, 'cups', 'dairy');
dessertRecipePumpkinPie.ingredientsArrayCreator ('whole milk', .25, 'cups', 'dairy');
dessertRecipePumpkinPie.ingredientsArrayCreator ('eggs', 1, 'each', 'dairy');
// dessertRecipePumpkinPie.ingredientsArrayCreator ('whole milk', 1, 'tablespoon', 'dairy');

var dessertRecipeTart = new RecipesConstructor ('Cranberry-Almond Shortbread Tart', 8, 'dessert');
dessertRecipeTart.ingredientsArrayCreator ('sugar', 1, 'cups', 'baking');
dessertRecipeTart.ingredientsArrayCreator ('lemon juice', 2, 'tablespoons', 'produce');
dessertRecipeTart.ingredientsArrayCreator ('fresh cranberries', 3, 'cups', 'produce');
dessertRecipeTart.ingredientsArrayCreator ('apricot jam', 3, 'tablespoons', 'condiments');
dessertRecipeTart.ingredientsArrayCreator ('sliced almonds', 3.5, 'cups', 'nuts');
dessertRecipeTart.ingredientsArrayCreator ('flour', 2, 'cups', 'baking');
dessertRecipeTart.ingredientsArrayCreator ('fine yellow cornmeal', .25, 'cups', 'baking');
dessertRecipeTart.ingredientsArrayCreator ('salt', .75, 'teaspoons', 'spices');
dessertRecipeTart.ingredientsArrayCreator ('unsalted butter', 1, 'cups', 'dairy');
dessertRecipeTart.ingredientsArrayCreator ('sugar', 1, 'cups', 'baking');
dessertRecipeTart.ingredientsArrayCreator ('lemons', 1, 'each', 'produce');
dessertRecipeTart.ingredientsArrayCreator ('vanilla extract', .75, 'teaspoons', 'spices');
dessertRecipeTart.ingredientsArrayCreator ('almond extract', .25, 'teaspoons', 'baking');
dessertRecipeTart.ingredientsArrayCreator ('eggs', 1, 'each', 'dairy');
// dessertRecipeTart.ingredientsArrayCreator ('cooking spray', 1, 'spray', 'baking'); //how do we do the cooking spray?
dessertRecipeTart.ingredientsArrayCreator ('powdered sugar', 1, 'teaspoons', 'baking'); //there is not actually a measure for the sugar...

var dessertRecipeArkansas = new RecipesConstructor ('Arkansas Black Apple Pie with Caramel Sauce Recipe', 8, 'dessert');
dessertRecipeArkansas.ingredientsArrayCreator ('apples', 6, 'each', 'produce');
dessertRecipeArkansas.ingredientsArrayCreator ('lemons', 1, 'each', 'produce');
dessertRecipeArkansas.ingredientsArrayCreator ('sugar', 1, 'cups', 'baking');
dessertRecipeArkansas.ingredientsArrayCreator ('flour', .25, 'cups', 'baking');
dessertRecipeArkansas.ingredientsArrayCreator ('cinnamon', 1, 'teaspoons', 'spices');
dessertRecipeArkansas.ingredientsArrayCreator ('nutmeg', .5, 'teaspoons', 'spices');
dessertRecipeArkansas.ingredientsArrayCreator ('allspice', .25, 'teaspoons', 'spices');
dessertRecipeArkansas.ingredientsArrayCreator ('pre-made pie crust (2 crusts)', 1, 'each', 'other-store');
dessertRecipeArkansas.ingredientsArrayCreator ('butter', .125, 'tablespoons', 'dairy');
dessertRecipeArkansas.ingredientsArrayCreator ('eggs', 1, 'each', 'dairy');
dessertRecipeArkansas.ingredientsArrayCreator ('sugar', .125, 'cups', 'baking');
//========================================================================================================================================================================
var beverageRecipeCider = new RecipesConstructor('MJ\'s Mulled Cider', 8, 'beverages');
beverageRecipeCider.ingredientsArrayCreator('Apple Cider', 8, 'cups', 'juice & beverages');
beverageRecipeCider.ingredientsArrayCreator('Mulling Spices', 0.25, 'cups', 'spices');

var beverageRecipeSangria = new RecipesConstructor('Apple Cider Autumn Sangria', 6, 'beverages');
beverageRecipeSangria.ingredientsArrayCreator('cinnamon sticks', 2, 'each', 'spices');
beverageRecipeSangria.ingredientsArrayCreator('pears', 1, 'each', 'produce');
beverageRecipeSangria.ingredientsArrayCreator('oranges', 1, 'each', 'produce');
beverageRecipeSangria.ingredientsArrayCreator('pomegranate seeds', 0.666, 'cups', 'produce');
beverageRecipeSangria.ingredientsArrayCreator('white wine (750 ml bottle)', 1, 'each', 'liquor');
beverageRecipeSangria.ingredientsArrayCreator('apple cider', 2, 'cups', 'juice');
beverageRecipeSangria.ingredientsArrayCreator('brandy', 0.5, 'cups', 'wine & liquor');
beverageRecipeSangria.ingredientsArrayCreator('orange juice', 0.25, 'cups', 'juice & beverages');
beverageRecipeSangria.ingredientsArrayCreator('lemon juice', 2, 'tablespoons', 'produce');
beverageRecipeSangria.ingredientsArrayCreator('club soda', 1, 'cups', 'juice & beverages');

var beverageRecipePunch = new RecipesConstructor('Lusious Slush Punch', 24, 'beverages');
beverageRecipePunch.ingredientsArrayCreator('sugar', 2.5, 'cups', 'baking');
beverageRecipePunch.ingredientsArrayCreator('lemon juice', 10.66, 'tablespoons', 'produce');
beverageRecipePunch.ingredientsArrayCreator('orange juice', 4, 'cups', 'juice & beverages');
beverageRecipePunch.ingredientsArrayCreator('lime soda', 8.5, 'cups', 'juice & beverages');
beverageRecipePunch.ingredientsArrayCreator('strawberry gelatin mix (6 oz)', 2, 'each', 'baking');
beverageRecipePunch.ingredientsArrayCreator('pineapple juice', 5.75, 'cups', 'juice & beverages');

//=================================MAIN PAGE CLICK HANDLERS=================================

/////////////////////////////////APPETIZER 1////////////////////////////////////////////////

var app1ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('appetizer-1')) {
    localStorage.removeItem('appetizer-1');
    appButton1.setAttribute('class', '');
    // console.log(appButton1);
  } else if(event.target.id === 'appetizer-1'){
    var saveRecipe = JSON.stringify(appRecipePecan);
    // console.log(saveRecipe);
    appButton1.setAttribute('class', 'selected');
    // console.log(appButton1);
    localStorage.setItem('appetizer-1', saveRecipe);
  }
};

// var changeButton = function(){
//   document.getElementsByClassName('test');
//   changeButton.getElementsByClassName('test').value = 'ADDED';
// };
// console.log(changeButton);
var appButton1 = document.getElementById('appetizer-1');
appButton1.addEventListener('submit', app1ButtonClickHandler);

/////////////////////////////////APPETIZER 2////////////////////////////////////////////////
var app2ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('appetizer-2')) {
    localStorage.removeItem('appetizer-2');
    appButton2.setAttribute('class', '');
    // console.log(appButton2);
  } else if(event.target.id === 'appetizer-2'){
    var saveRecipe = JSON.stringify(appRecipeBrie);
    // console.log(saveRecipe);
    appButton2.setAttribute('class', 'selected');
    // console.log(appButton2);
    localStorage.setItem('appetizer-2', saveRecipe);
  }

};

var appButton2 = document.getElementById('appetizer-2');
appButton2.addEventListener('submit', app2ButtonClickHandler);

/////////////////////////////////APPETIZER 3////////////////////////////////////////////////

var app3ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('appetizer-3')) {
    localStorage.removeItem('appetizer-3');
    appButton3.setAttribute('class', '');
    // console.log(appButton3);
  } else if(event.target.id === 'appetizer-3'){
    var saveRecipe = JSON.stringify(appRecipePoppers);
    // console.log(saveRecipe);
    appButton3.setAttribute('class', 'selected');
    // console.log(appButton3);
    localStorage.setItem('appetizer-3', saveRecipe);
  }

};

var appButton3 = document.getElementById('appetizer-3');
appButton3.addEventListener('submit', app3ButtonClickHandler);

/////////////////////////////////MAIN 1/////////////////////////////////////

var main1ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('main-dish-1')) {
    localStorage.removeItem('main-dish-1');
    mainButton1.setAttribute('class', '');
    // console.log(mainButton1);
  } else if(event.target.id === 'main-dish-1'){
    var saveRecipe = JSON.stringify(mainRecipeCiderTurkey);
    // console.log(saveRecipe);
    mainButton1.setAttribute('class', 'selected');
    // console.log(mainButton1);
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
    // console.log(mainButton2);
  } else if(event.target.id === 'main-dish-2'){
    var saveRecipe = JSON.stringify(mainRecipeHam);
    // console.log(saveRecipe);
    mainButton2.setAttribute('class', 'selected');
    // console.log(mainButton2);
    localStorage.setItem('main-dish-2', saveRecipe);
  }
};

var mainButton2 = document.getElementById('main-dish-2');
mainButton2.addEventListener('submit', main2ButtonClickHandler);

/////////////////////////////////MAIN 3/////////////////////////////////////

var main3ButtonClickHandler = function(event){
  event.preventDefault();
  if (localStorage.getItem('main-dish-3')) {
    localStorage.removeItem('main-dish-3');
    mainButton3.setAttribute('class', '');
  } else if(event.target.id === 'main-dish-3'){
    var saveRecipe = JSON.stringify(mainRecipeMapleTurkey);
    mainButton3.setAttribute('class', 'selected');
    // console.log(mainButton3);
    localStorage.setItem('main-dish-3', saveRecipe);
  }
};

var mainButton3 = document.getElementById('main-dish-3');
mainButton3.addEventListener('submit', main3ButtonClickHandler);

/////////////////////////////////SIDE 1/////////////////////////////////////

var side1ButtonClickHandler = function(event){
  event.preventDefault();
  if (localStorage.getItem('side-dish-1')) {
    localStorage.removeItem('side-dish-1');
    sideButton1.setAttribute('class', '');
  } else if(event.target.id === 'side-dish-1'){
    var saveRecipe = JSON.stringify(sideRecipeStuffing);
    sideButton1.setAttribute('class', 'selected');
    localStorage.setItem('side-dish-1', saveRecipe);
  }
};
var sideButton1 = document.getElementById('side-dish-1');
sideButton1.addEventListener('submit', side1ButtonClickHandler);

/////////////////////////////////SIDE 2/////////////////////////////////////

var side2ButtonClickHandler = function(event){
  event.preventDefault();
  if (localStorage.getItem('side-dish-2')) {
    localStorage.removeItem('side-dish-2');
    sideButton2.setAttribute('class', '');
  } else if(event.target.id === 'side-dish-2'){
    var saveRecipe = JSON.stringify(sideRecipeShallots);
    sideButton2.setAttribute('class', 'selected');
    localStorage.setItem('side-dish-2', saveRecipe);
  }
};
var sideButton2 = document.getElementById('side-dish-2');
sideButton2.addEventListener('submit', side2ButtonClickHandler);

/////////////////////////////////SIDE 3/////////////////////////////////////

var side3ButtonClickHandler = function(event){
  event.preventDefault();
  if (localStorage.getItem('side-dish-3')) {
    localStorage.removeItem('side-dish-3');
    sideButton3.setAttribute('class', '');
  } else if(event.target.id === 'side-dish-3'){
    var saveRecipe = JSON.stringify(sideRecipeRoastedBrussels);
    sideButton3.setAttribute('class', 'selected');
    localStorage.setItem('side-dish-3', saveRecipe);
  }
};
var sideButton3 = document.getElementById('side-dish-3');
sideButton3.addEventListener('submit', side3ButtonClickHandler);

// /////////////////////////////////SIDE 4/////////////////////////////////////

// var side4ButtonClickHandler = function(event){
//   event.preventDefault();
//   if (localStorage.getItem('side-dish-4')) {
//     localStorage.removeItem('side-dish-4');
//     sideButton4.setAttribute('class', '');
//   } else if(event.target.id === 'side-dish-4'){
//     var saveRecipe = JSON.stringify(sideRecipeGreenBean);
//     sideButton4.setAttribute('class', 'selected');
//     localStorage.setItem('side-dish-4', saveRecipe);
//   }
// };
// var sideButton4 = document.getElementById('side-dish-4');
// sideButton4.addEventListener('submit', side4ButtonClickHandler);

// /////////////////////////////////SIDE 5/////////////////////////////////////

// var side5ButtonClickHandler = function(event){
//   event.preventDefault();
//   if (localStorage.getItem('side-dish-5')) {
//     localStorage.removeItem('side-dish-5');
//     sideButton5.setAttribute('class', '');
//   } else if(event.target.id === 'side-dish-5'){
//     var saveRecipe = JSON.stringify(sideRecipeCranberrySauce);
//     sideButton5.setAttribute('class', 'selected');
//     localStorage.setItem('side-dish-5', saveRecipe);
//   }
// };
// var sideButton5 = document.getElementById('side-dish-5');
// sideButton5.addEventListener('submit', side5ButtonClickHandler);

// /////////////////////////////////SIDE 6/////////////////////////////////////

// var side6ButtonClickHandler = function(event){
//   event.preventDefault();
//   if (localStorage.getItem('side-dish-6')) {
//     localStorage.removeItem('side-dish-6');
//     sideButton6.setAttribute('class', '');
//   } else if(event.target.id === 'side-dish-6'){
//     var saveRecipe = JSON.stringify(sideRecipeCreamedCorn);
//     sideButton6.setAttribute('class', 'selected');
//     localStorage.setItem('side-dish-6', saveRecipe);
//   }
// };
// var sideButton6 = document.getElementById('side-dish-6');
// sideButton6.addEventListener('submit', side6ButtonClickHandler);

//////////////////////////////DESSERT 1/////////////////////////////////////

var dessert1ButtonClickHandler = function(event){
  event.preventDefault();
  if (localStorage.getItem('dessert-1')) {
    localStorage.removeItem('dessert-1');
    dessertButton1.setAttribute('class', '');
  } else if(event.target.id === 'dessert-1'){
    var saveRecipe = JSON.stringify(dessertRecipePumpkinPie);
    dessertButton1.setAttribute('class', 'selected');
    localStorage.setItem('dessert-1', saveRecipe);
  }
};

var dessertButton1 = document.getElementById('dessert-1');
dessertButton1.addEventListener('submit', dessert1ButtonClickHandler);

//////////////////////////////DESSERT 2/////////////////////////////////////

var dessert2ButtonClickHandler = function(event){
  event.preventDefault();
  if (localStorage.getItem('dessert-2')) {
    localStorage.removeItem('dessert-2');
    dessertButton2.setAttribute('class', '');
  } else if(event.target.id === 'dessert-2'){
    var saveRecipe = JSON.stringify(dessertRecipeTart);
    dessertButton2.setAttribute('class', 'selected');
    localStorage.setItem('dessert-2', saveRecipe);
  }
};

var dessertButton2 = document.getElementById('dessert-2');
dessertButton2.addEventListener('submit', dessert2ButtonClickHandler);

//////////////////////////////DESSERT 3/////////////////////////////////////

var dessert3ButtonClickHandler = function(event){
  event.preventDefault();
  if (localStorage.getItem('dessert-3')) {
    localStorage.removeItem('dessert-3');
    dessertButton3.setAttribute('class', '');
  } else if(event.target.id === 'dessert-3'){
    var saveRecipe = JSON.stringify(dessertRecipeArkansas);
    dessertButton3.setAttribute('class', 'selected');
    localStorage.setItem('dessert-3', saveRecipe);
  }
};

var dessertButton3 = document.getElementById('dessert-3');
dessertButton3.addEventListener('submit', dessert3ButtonClickHandler);

/////////////////////////////////BEVERAGE 1/////////////////////////////////////

var drink1ButtonClickHandler = function(event){
  event.preventDefault();
  if (localStorage.getItem('beverages-1')) {
    localStorage.removeItem('beverages-1');
    drinkButton1.setAttribute('class', '');
  } else if(event.target.id === 'beverages-1'){
    var saveRecipe = JSON.stringify(beverageRecipeCider);
    drinkButton1.setAttribute('class', 'selected');
    localStorage.setItem('beverages-1', saveRecipe);
  }
};

var drinkButton1 = document.getElementById('beverages-1');
drinkButton1.addEventListener('submit', drink1ButtonClickHandler);

/////////////////////////////////BEVERAGE 2/////////////////////////////////////

var drink2ButtonClickHandler = function(event){
  event.preventDefault();
  if (localStorage.getItem('beverages-2')) {
    localStorage.removeItem('beverages-2');
    drinkButton2.setAttribute('class', '');
  } else if(event.target.id === 'beverages-2'){
    var saveRecipe = JSON.stringify(beverageRecipeSangria);
    drinkButton2.setAttribute('class', 'selected');
    localStorage.setItem('beverages-2', saveRecipe);
  }
};

var drinkButton2 = document.getElementById('beverages-2');
drinkButton2.addEventListener('submit', drink2ButtonClickHandler);

/////////////////////////////////BEVERAGE 3/////////////////////////////////////

var drink3ButtonClickHandler = function(event){
  event.preventDefault();
  if (localStorage.getItem('beverages-3')) {
    localStorage.removeItem('beverages-3');
    drinkButton3.setAttribute('class', '');
  } else if(event.target.id === 'beverages-3'){
    var saveRecipe = JSON.stringify(beverageRecipePunch);
    drinkButton3.setAttribute('class', 'selected');
    localStorage.setItem('beverages-3', saveRecipe);
  }
};

var drinkButton3 = document.getElementById('beverages-3');
drinkButton3.addEventListener('submit', drink3ButtonClickHandler);
