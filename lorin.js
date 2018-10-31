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
  var ingredOne = new IngredientsConstructor (name, qty, measurementunit, location);
  this.ingredients.push(ingredOne);
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

var appRecipePecan = new RecipesConstructor('SPICED PECANS', 16, 'APPITIZER');
appRecipePecan.ingredientsArrayCreator('salt', 4, 'teaspoon', 'spices');
appRecipePecan.ingredientsArrayCreator('cayeene', 0.5, 'teaspoon', 'spices');
appRecipePecan.ingredientsArrayCreator('white pepper', 1, 'teaspoon', 'spices');
appRecipePecan.ingredientsArrayCreator('nutmeg', 1, 'teaspoon', 'spices');
appRecipePecan.ingredientsArrayCreator('cloves', 1, 'teaspoon', 'spices');
appRecipePecan.ingredientsArrayCreator('allspice', 1, 'teaspoon', 'spices');
appRecipePecan.ingredientsArrayCreator('pecan halves', 4, 'cup', 'nuts');
appRecipePecan.ingredientsArrayCreator('butter', 0.25, 'cup', 'dairy');
appRecipePecan.ingredientsArrayCreator('dark maple syrup', 0.333, 'cup', 'condiments');

var appRecipeBrie = new RecipesConstructor('APPLE-PECAN BAKED BRIE', 10, 'APPITIZER');
appRecipeBrie.ingredientsArrayCreator('butter', 1, 'tablespoon', 'dairy');
appRecipeBrie.ingredientsArrayCreator('small tart apple', 1, 'each', 'produce');
appRecipeBrie.ingredientsArrayCreator('dried cranberries', 0.333, 'cup', 'other grocery');
appRecipeBrie.ingredientsArrayCreator('chopped pecans', 0.25, 'cup', 'nuts');
appRecipeBrie.ingredientsArrayCreator('brown sugar', 1, 'tablespoon', 'baking');
appRecipeBrie.ingredientsArrayCreator('ground cinnamon', 0.25, 'teaspoon', 'spices');
appRecipeBrie.ingredientsArrayCreator('ground nutmeg', 1, 'dash', 'spices');
appRecipeBrie.ingredientsArrayCreator('Brise cheese', 8, 'ounces', 'dairy');
appRecipeBrie.ingredientsArrayCreator('crakers', 1, 'assorted', 'other grocery');

var appRecipePoppers = new RecipesConstructor('Jalapeno Popper Cups', 4, 'APPITIZER');
appRecipePoppers.ingredientsArrayCreator('mini phyllo tart shells', 12, 'each', 'frozen');
appRecipePoppers.ingredientsArrayCreator('cream cheese', 4, 'ounces', 'dairy');
appRecipePoppers.ingredientsArrayCreator('shredded cheddar cheese', 0.5, 'cup', 'dairy');
appRecipePoppers.ingredientsArrayCreator('jalapeno peppers', 2, 'each', 'produce');
appRecipePoppers.ingredientsArrayCreator('hot pepper sauce', 1, 'tablespoon', 'condiments');
appRecipePoppers.ingredientsArrayCreator('bacon bits', 1, 'dash', 'meat');
//========================================================================================================================================================================
var mainRecipeCiderTurkey = new RecipesConstructor ('CIDER-BRINED TURKEY WITH STAR ANISE AND CINNAMON', 10, 'MAIN DISH');
mainRecipeCiderTurkey.ingredientsArrayCreator('APPLE CIDER', 9, 'CUPS', 'JUICE & BEVERAGES');
mainRecipeCiderTurkey.ingredientsArrayCreator('KOSHER SALT', 1, 'CUP', 'SPICES');
mainRecipeCiderTurkey.ingredientsArrayCreator('SOY SAUCE', 1, 'CUP', 'CONDIMENTS');
mainRecipeCiderTurkey.ingredientsArrayCreator('BROWN SUGAR', .5, 'CUP', 'BAKING');
mainRecipeCiderTurkey.ingredientsArrayCreator('WHOLE PEPPERCORNS', 16, 'EACH', 'SPICES');
mainRecipeCiderTurkey.ingredientsArrayCreator('STAR ANISE PODS', 12, 'EACH', 'SPICES');
mainRecipeCiderTurkey.ingredientsArrayCreator('GARLIC CLOVES', 6, 'EACH', 'PRODUCE');
mainRecipeCiderTurkey.ingredientsArrayCreator('SCALLIONS', 6, 'EACH', 'PRODUCE');
mainRecipeCiderTurkey.ingredientsArrayCreator('FRESH UNPEELED GINGER', 1.5, 'INCHES', 'PRODUCE');//THIS HAS A WEIRD UNIT
mainRecipeCiderTurkey.ingredientsArrayCreator('DRIED SHITAKE MUSHROOMS', 5, 'EACH', 'PRODUCE');
mainRecipeCiderTurkey.ingredientsArrayCreator('4-INCH CINNAMON STICKS', 2, 'EACH', 'SPICES');
mainRecipeCiderTurkey.ingredientsArrayCreator('CILANTRO', 2, 'SPRIGS', 'PRODUCE');//THIS HAS A WEIRD UNIT
mainRecipeCiderTurkey.ingredientsArrayCreator('TURKEY', 12, 'LBS', 'MEAT');
mainRecipeCiderTurkey.ingredientsArrayCreator('APPLES', 2, 'EACH', 'PRODUCE');
mainRecipeCiderTurkey.ingredientsArrayCreator('BUTTER', .5, 'CUP', 'DAIRY');

var mainRecipeHam = new RecipesConstructor ('BOURBON ORANGE GLAZED HAM', 10, 'MAIN DISH');
mainRecipeHam.ingredientsArrayCreator('ORANGE MARMALADE', .75, 'CUPS', 'CONDIMENTS');
mainRecipeHam.ingredientsArrayCreator('MAPLE SYRUP', .25, 'CUPS', 'CONDIMENTS');
mainRecipeHam.ingredientsArrayCreator('WHOLE-GRAIN DIJON MUSTARD', .25, 'CUPS', 'CONDIMENTS');
mainRecipeHam.ingredientsArrayCreator('BOURBON', .25, 'CUPS', 'WINE & LIQUOR');
mainRecipeHam.ingredientsArrayCreator('LEMON JUICE', 2, 'TBS', 'PRODUCE');
mainRecipeHam.ingredientsArrayCreator('GROUND GINGER', .5, 'TSP', 'SPICES');
mainRecipeHam.ingredientsArrayCreator('BONE-IN HALF HAM', 10, 'LBS', 'MEAT');

var mainRecipeMapleTurkey = new RecipesConstructor ('MAPLE-GLAZED TURKEY WITH BACON AND SAGE BUTTER', 12, 'MAIN DISH');
mainRecipeMapleTurkey.ingredientsArrayCreator('TURKEY', 12, 'LBS', 'MEAT');
mainRecipeMapleTurkey.ingredientsArrayCreator('BUTTER', .75, 'CUPS', 'DAIRY');
mainRecipeMapleTurkey.ingredientsArrayCreator('FRESH SAGE', 3, 'TBS', 'PRODUCE');
mainRecipeMapleTurkey.ingredientsArrayCreator('GARLIC CLOVES', 6, 'EACH', 'PRODUCE');
mainRecipeMapleTurkey.ingredientsArrayCreator('ONION', 1, 'EACH', 'PRODUCE');
mainRecipeMapleTurkey.ingredientsArrayCreator('LEMON', 3, 'EACH', 'PRODUCE');
mainRecipeMapleTurkey.ingredientsArrayCreator('ORANGE', 1, 'EACH', 'PRODUCE');
mainRecipeMapleTurkey.ingredientsArrayCreator('APPLE', 1, 'EACH', 'PRODUCE');
mainRecipeMapleTurkey.ingredientsArrayCreator('MAPLE SYRUP', 1, 'CUP', 'CONDIMENTS');
mainRecipeMapleTurkey.ingredientsArrayCreator('BACON', 8, 'STRIPS', 'MEAT');
mainRecipeMapleTurkey.ingredientsArrayCreator('FLOUR', .25, 'CUPS', 'BAKING');
mainRecipeMapleTurkey.ingredientsArrayCreator('CHICKEN STOCK', 3, 'CUPS', 'OTHER-GROCERY');
//========================================================================================================================================================================
var sideRecipeStuffing = new RecipesConstructor ('Cranberry Cornbread Stuffing', 10, 'Side Dish');
sideRecipeStuffing.ingredientsArrayCreator ('Olive oil', 1, 'tsp', 'Baking');
sideRecipeStuffing.ingredientsArrayCreator ('Italian sausage', 1, 'lb', 'Meat');
sideRecipeStuffing.ingredientsArrayCreator ('Unsalted butter', 2, 'tbsp', 'Dairy');
sideRecipeStuffing.ingredientsArrayCreator ('Celery stalk', 2, 'each', 'Produce');
sideRecipeStuffing.ingredientsArrayCreator ('Yellow onion', .5, 'each', 'Produce');
sideRecipeStuffing.ingredientsArrayCreator ('Tart apple', 1, 'each', 'Produce');
sideRecipeStuffing.ingredientsArrayCreator ('dried sage leaves', .5, 'tsp', 'Spices');
sideRecipeStuffing.ingredientsArrayCreator ('black pepper', .5, 'tsp', 'Spices');
sideRecipeStuffing.ingredientsArrayCreator ('Low-sodium chicken broth', 1.5, 'cup', 'Other-Grocery');
sideRecipeStuffing.ingredientsArrayCreator ('Egg', 1, 'each', 'Dairy');
sideRecipeStuffing.ingredientsArrayCreator ('Dried cranberries', .5, 'cup', 'Other-Grocery');
sideRecipeStuffing.ingredientsArrayCreator ('STOVE TOP Cornbread Stuffing Mix (6 oz.)', 1, 'each', 'Other-Grocery');
sideRecipeStuffing.ingredientsArrayCreator ('fresh sage leaves', 1, 'each', 'Produce'); //fresh sage leaves for garnish, should i have left this one off?

var sideRecipeShallots = new RecipesConstructor ('Mashed Potatoes with Caramelized Shallots', 8, 'Side Dish');
sideRecipeShallots.ingredientsArrayCreator ('Extra-virgin olive oil', 2, 'tbs', 'Baking');
sideRecipeShallots.ingredientsArrayCreator ('Shallots', 2, 'cup', 'Produce');
sideRecipeShallots.ingredientsArrayCreator ('Kosher salt', 1, 'each', 'Spices'); //Kosher salt, no measurements
sideRecipeShallots.ingredientsArrayCreator ('Yukon Gold potatoes', 4, 'lb', 'Produce');
sideRecipeShallots.ingredientsArrayCreator ('Unsalted butter', 1, 'cup', 'Dairy');
sideRecipeShallots.ingredientsArrayCreator ('Crème fraîche', 1, 'cup', 'Dairy');
sideRecipeShallots.ingredientsArrayCreator ('Whole milk', .5, 'cup', 'Dairy');
sideRecipeShallots.ingredientsArrayCreator ('Freshly ground black pepper', 1, 'each', 'Spices');

var sideRecipeRoastedBrussels = new RecipesConstructor ('Roasted Brussels Sprouts with Balsamin Carmelized Onions & Bacon', 4, 'Side Dish');
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Brussel Sprouts', 4, 'cup', 'Produce');
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Bacon', 4, 'each', 'Meat');
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Butter', 1, 'tbsp', 'Dairy');
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Onion', 1, 'each', 'Produce');
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Red pepper flakes', 1, 'each', 'Spices'); //it was 1 pinch
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Sugar', 2, 'tsp', 'Baking');
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Balsamic vinegar', .5, 'cup', 'Baking');
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Salt', 1, 'each', 'Spices'); //was to taste
sideRecipeRoastedBrussels.ingredientsArrayCreator ('Pepper', 1, 'each', 'Spices'); //was to taste

var sideRecipeGreenBean = new RecipesConstructor ('The Ultimate Homemade Green Bean Casserole Recipe', 8, 'Side Dish');
sideRecipeGreenBean.ingredientsArrayCreator ('shallots', 1, 'lb', 'Produce');
sideRecipeGreenBean.ingredientsArrayCreator ('Canola oil', 2, 'cup', '');
sideRecipeGreenBean.ingredientsArrayCreator ('Kosher salt', 1, 'each', 'Spices');
sideRecipeGreenBean.ingredientsArrayCreator ('White button mushroom', .5, 'lb', 'Produce');
sideRecipeGreenBean.ingredientsArrayCreator ('Soy sauce', 2, 'tsp', 'Condiments');
sideRecipeGreenBean.ingredientsArrayCreator ('Lemon juice', 2, 'tsp', 'Produce');
sideRecipeGreenBean.ingredientsArrayCreator ('Low-sodium chicken broth', 2, 'cup', 'Other-Grocery');
sideRecipeGreenBean.ingredientsArrayCreator ('Heavy cream', 1.5, 'cup', 'Dairy');
sideRecipeGreenBean.ingredientsArrayCreator ('Butter', 2, 'tbsp', 'Dairy');
sideRecipeGreenBean.ingredientsArrayCreator ('Garlic', 2, 'each', 'Produce'); //2 cloves
sideRecipeGreenBean.ingredientsArrayCreator ('Flour', .25, 'cup', 'Baking');
sideRecipeGreenBean.ingredientsArrayCreator ('Pepper', 1, 'each', 'Spices'); //Freshly ground black pepper
sideRecipeGreenBean.ingredientsArrayCreator ('Green beans', 2, 'lb', 'Produce');

var sideRecipeCranberrySauce = new RecipesConstructor ('Orange Maple Cranberry Sauce', 6, 'Side Dish');
sideRecipeCranberrySauce.ingredientsArrayCreator ('Frozen cranberries', 3, 'cup', 'Frozen');
sideRecipeCranberrySauce.ingredientsArrayCreator ('Pure maple syrup', .33, 'cup', 'Condiments');
sideRecipeCranberrySauce.ingredientsArrayCreator ('orange zest', 1, 'tbsp', 'Produce');
sideRecipeCranberrySauce.ingredientsArrayCreator ('fresh orange juice', .5, 'cup', 'Juice & Beverages');
sideRecipeCranberrySauce.ingredientsArrayCreator ('Cinnamon stick', 1, 'each', 'Spices');

var sideRecipeCreamedCorn = new RecipesConstructor ('Creamed Corn', 4, 'Side Dish');
sideRecipeCreamedCorn.ingredientsArrayCreator ('frozen corn', 10, 'oz', 'Frozen');
sideRecipeCreamedCorn.ingredientsArrayCreator ('Butter', 3, 'tbsp', 'Dairy');
sideRecipeCreamedCorn.ingredientsArrayCreator ('Flour', 3, 'tbsp', 'Baking');
sideRecipeCreamedCorn.ingredientsArrayCreator ('Milk', 2, 'cup', 'Dairy');
sideRecipeCreamedCorn.ingredientsArrayCreator ('Sugar', 2, 'tbsp', 'Spices');
//========================================================================================================================================================================
var dessertRecipePumpkinPie = new RecipesConstructor ('The Great Pumpkin Pie Recipe', 8, 'dessert');
dessertRecipePumpkinPie.ingredientsArrayCreator ('fresh cranberries', 1,'cup', 'produce');
dessertRecipePumpkinPie.ingredientsArrayCreator ('granulated sugar', 2,'cup', 'baking');
dessertRecipePumpkinPie.ingredientsArrayCreator ('pre-made pie crust', 1, 'package', 'other-grocery');
dessertRecipePumpkinPie.ingredientsArrayCreator ('pumpkin puree', 1, 'can', 'other-grocery');
dessertRecipePumpkinPie.ingredientsArrayCreator ('eggs', 3, 'each', 'dairy');
dessertRecipePumpkinPie.ingredientsArrayCreator ('packed light brown sugar', 1.25, 'cup', 'baking');
dessertRecipePumpkinPie.ingredientsArrayCreator ('cornstarch', 1, 'tablespoon', 'baking');
dessertRecipePumpkinPie.ingredientsArrayCreator ('salt', .5, 'teaspoon', 'spices');
dessertRecipePumpkinPie.ingredientsArrayCreator ('ground cinnamon', 1.5, 'teaspoon', 'spices');
dessertRecipePumpkinPie.ingredientsArrayCreator ('ground ginger', .5, 'teaspoon', 'spices');
dessertRecipePumpkinPie.ingredientsArrayCreator ('grated nutmeg', .25, 'teaspoon', 'spices');
dessertRecipePumpkinPie.ingredientsArrayCreator ('ground pepper', .125, 'teaspoon', 'spices');
dessertRecipePumpkinPie.ingredientsArrayCreator ('heavy cream', 1, 'cup', 'dairy');
dessertRecipePumpkinPie.ingredientsArrayCreator ('milk', .25, 'cup', 'dairy');
dessertRecipePumpkinPie.ingredientsArrayCreator ('egg', 1, 'each', 'dairy');
dessertRecipePumpkinPie.ingredientsArrayCreator ('milk', 1, 'tablespoon', 'dairy');

var dessertRecipeTart = new RecipesConstructor ('Cranberry-Almond Shortbread Tart', 8, 'dessert');
dessertRecipeTart.ingredientsArrayCreator ('granulated sugar', 1, 'cup', 'baking');
dessertRecipeTart.ingredientsArrayCreator ('fresh lemon juice', 2, 'tablespoon', 'produce');
dessertRecipeTart.ingredientsArrayCreator ('fresh or thawed cranberries', 12, 'ounces', 'frozen');
dessertRecipeTart.ingredientsArrayCreator ('apricot jam', 3, 'tablespoons', 'condiments');
dessertRecipeTart.ingredientsArrayCreator ('sliced almonds', 3.5, 'cups', 'nuts');
dessertRecipeTart.ingredientsArrayCreator ('all-purpose flour', 2, 'cup', 'baking');
dessertRecipeTart.ingredientsArrayCreator ('fine yellow cornmeal', .25, 'cup', 'baking');
dessertRecipeTart.ingredientsArrayCreator ('salt', .75, 'teaspoon', 'baking');
dessertRecipeTart.ingredientsArrayCreator ('unsalted butter', 1, 'cup', 'dairy');
dessertRecipeTart.ingredientsArrayCreator ('granulated sugar', 1, 'cup', 'baking');
dessertRecipeTart.ingredientsArrayCreator ('lemon zest', .5, 'teaspoon', 'produce');
dessertRecipeTart.ingredientsArrayCreator ('pure vanilla extract', .75, 'teaspoon', 'spices');
dessertRecipeTart.ingredientsArrayCreator ('pure almond extract', .25, 'teaspoon', 'baking');
dessertRecipeTart.ingredientsArrayCreator ('egg', 1, 'each', 'dairy');//this is one large yolk.. how will we handle that?
dessertRecipeTart.ingredientsArrayCreator ('cooking spray', 1, 'spray', 'baking'); //how do we do the cooking spray?
dessertRecipeTart.ingredientsArrayCreator ('confectioners sugar', 1, 'teaspoon', 'baking'); //there is not actually a measure for the sugar...

var dessertRecipeArkansas = new RecipesConstructor ('Arkansas Black Apple Pie with Caramel Sauce Recipe', 8, 'dessert');
dessertRecipeArkansas.ingredientsArrayCreator ('granny smith apples', 6, 'each', 'produce');
dessertRecipeArkansas.ingredientsArrayCreator ('lemon juice', 1, 'each', 'produce');
dessertRecipeArkansas.ingredientsArrayCreator ('granulated sugar', 1, 'cup', 'baking');
dessertRecipeArkansas.ingredientsArrayCreator ('all-purpose flour', .25, 'cup', 'baking');
dessertRecipeArkansas.ingredientsArrayCreator ('cinnamon', 1, 'teaspoon', 'spices');
dessertRecipeArkansas.ingredientsArrayCreator ('nutmeg', .5, 'teaspoon', 'spices');
dessertRecipeArkansas.ingredientsArrayCreator ('allspice', .25, 'teaspoon', 'spices');
dessertRecipeArkansas.ingredientsArrayCreator ('pre-made pie crust', 1, 'each', 'other-store');
dessertRecipeArkansas.ingredientsArrayCreator ('butter', 2, 'tablespoon', 'dairy');
dessertRecipeArkansas.ingredientsArrayCreator ('egg', 1, 'each', 'dairy');
dessertRecipeArkansas.ingredientsArrayCreator ('sugar', 2, 'tablespoons', 'baking');
//========================================================================================================================================================================
var beverageRecipeCider = new RecipesConstructor('MJ\'s Mulled Cider', 8, 'beverages');
beverageRecipeCider.ingredientsArrayCreator('Apple Juice', 0.5, 'gallon', 'juice');
beverageRecipeCider.ingredientsArrayCreator('Cider Mate Mulling Spice', 0.25, 'cup', 'spices');

var beverageRecipeSangria = new RecipesConstructor('Apple Cider Autumn Sangria', 6, 'beverages');
beverageRecipeSangria.ingredientsArrayCreator('cinnamon sticks', 2, 'each', 'spices');
beverageRecipeSangria.ingredientsArrayCreator('medium pear', 1, 'each', 'produce');
beverageRecipeSangria.ingredientsArrayCreator('medium orange', 1, 'each', 'produce');
beverageRecipeSangria.ingredientsArrayCreator('pomegranate seeds', 0.666, 'cup', 'produce');
beverageRecipeSangria.ingredientsArrayCreator('bottle white wine', 1, 'bottle', 'liquor');
beverageRecipeSangria.ingredientsArrayCreator('apple cider', 2, 'cup', 'juice');
beverageRecipeSangria.ingredientsArrayCreator('brandy', 0.5, 'cup', 'liquor');
beverageRecipeSangria.ingredientsArrayCreator('orange juice', 0.25, 'juice', 'juice');
beverageRecipeSangria.ingredientsArrayCreator('lemon juice', 2, 'tablespoon', 'produce');
beverageRecipeSangria.ingredientsArrayCreator('club soda', 1, 'serving', 'juice');

var beverageRecipePunch = new RecipesConstructor('Lusious Slush Punch', 24, 'beverages');
beverageRecipePunch.ingredientsArrayCreator('white sugar', 2.5, 'cup', 'baking');
beverageRecipePunch.ingredientsArrayCreator('lemon juice', 0.666, 'cup', 'produce');
beverageRecipePunch.ingredientsArrayCreator('orange juice', 1, 'quart', 'juice');
beverageRecipePunch.ingredientsArrayCreator('lemon-lime flavored carbonated beverage', 2, '2-liter bottles', 'juice');
beverageRecipePunch.ingredientsArrayCreator('strawberry flavored mix', 6, 'ounces', 'baking');
beverageRecipePunch.ingredientsArrayCreator('canned pineapple juice', 46, 'fluid ounces', 'juice');

// =================================MAIN PAGE CLICK HANDLERS=================================
var recipeSelector = document.getElementById('test');

var Menu = function(recipe) {
  // this.recipe is an array of menuItem instances.
  this.recipe = recipe;
};
Menu.prototype.addItem = function(name, course, servings) {
  var newItems = new MenuItem(name, course, servings);
  this.recipe.push(newItems);
};

Menu.prototype.removeItem = function(prod) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  //we choose the parameter name of the product
  // var removeIndexNumber = 0;

  for (var i = 0; i < this.recipe.length; i++) {
    if (this.recipe[i].name === prod) {
      this.recipe.splice(i,1);
    }
  }
};

var MenuItem = function(name, course, servings) {
  this.name = name;
  this.course = course;
  this.servings = servings;
};

Menu.prototype.saveToLocalStorage = function() {
  localStorage.setItem('menu', JSON.stringify(this.recipe));
};


// var allRecipeHTMLIds = ['main-dish-1','main-dish-2','main-dish-3','appetizer-1','appetizer-2','appetizer-3','side-dish-1','side-dish-2','side-dish-3','dessert-1','dessert-2','dessert-3','beverage-1','beverage-2','beverage-3'];

var recipeClickHandler = function(event){
  //when i get the event back
  if(event.target.id === 'appetizer-1' || event.target.id === 'appetizer-2' || event.target.id === 'appetizer-3' || event.target.id === 'main-dish-1' || event.target.id === 'main-dish-2' || event.target.id === 'main-dish-3' || event.target.id === 'side-dish-1' || event.target.id === 'side-dish-2' || event.target.id === 'side-dish-3' || event.target.id === 'dessert-1' || event.target.id === 'dessert-2' || event.target.id === 'dessert-3' || event.target.id === 'beverage-1' || event.target.id === 'beverage-2' || event.target.id === 'beverage-3'){

    if(event.target.id === 'appetizer-1'){
      console.log('app1 was clicked');
    } else if(event.target.id === 'appetizer-2'){
      console.log('app2 was clicked');
    } else {
      console.log('app3 was clicked');
    }
  }
};

recipeSelector.addEventListener('click', recipeClickHandler);

/////////////////////////////////APPETIZER 1////////////////////////////////////////////////

// var app1ButtonClickHandler = function(event){
//   event.preventDefault();
//   // console.log(event);
//   if (localStorage.getItem('menu')) {
//     localStorage.removeItem('appetizer-1');
//     appButton1.setAttribute('class', '');
//     console.log(appButton1);
//   } else if(event.target.id === 'appetizer-1'){
//     var saveRecipe = JSON.stringify(appRecipePecan);
//     // console.log(saveRecipe);
//     appButton1.setAttribute('class', 'selected');
//     console.log(appButton1);
//     localStorage.setItem('appetizer-1', saveRecipe);
//   }

// };

// var appButton1 = document.getElementById('appetizer-1');
// appButton1.addEventListener('submit', app1ButtonClickHandler);


// var menu = new Menu([]);
// menu.addItem(appRecipePecan);
// menu.addItem(appRecipeBrie);
// menu.saveToLocalStorage();

// /////////////////////////////////APPETIZER 2////////////////////////////////////////////////

// var app2ButtonClickHandler = function(event){
//   event.preventDefault();
//   // console.log(event);
//   if (localStorage.getItem('appetizer-2')) {
//     localStorage.removeItem('appetizer-2');
//     appButton2.setAttribute('class', '');
//     console.log(appButton2);
//   } else if(event.target.id === 'appetizer-2'){
//     var saveRecipe = JSON.stringify(appRecipeBrie);
//     // console.log(saveRecipe);
//     appButton2.setAttribute('class', 'selected');
//     console.log(appButton2);
//     localStorage.setItem('appetizer-2', saveRecipe);
//   }

// };

// var appButton2 = document.getElementById('appetizer-2');
// appButton2.addEventListener('submit', app2ButtonClickHandler);



/////////////////////////////////APPETIZER 3////////////////////////////////////////////////

// var app3ButtonClickHandler = function(event){
//   event.preventDefault();
//   // console.log(event);
//   if (localStorage.getItem('appetizer-3')) {
//     localStorage.removeItem('appetizer-3');
//     appButton3.setAttribute('class', '');
//     console.log(appButton3);
//   } else if(event.target.id === 'appetizer-3'){
//     var saveRecipe = JSON.stringify(appRecipePoppers);
//     // console.log(saveRecipe);
//     appButton3.setAttribute('class', 'selected');
//     console.log(appButton3);
//     localStorage.setItem('appetizer-3', saveRecipe);
//   }

// };

// var appButton3 = document.getElementById('appetizer-3');
// appButton3.addEventListener('submit', app3ButtonClickHandler);

// /////////////////////////////////MAIN 1/////////////////////////////////////

// var main1ButtonClickHandler = function(event){
//   event.preventDefault();
//   // console.log(event);
//   if (localStorage.getItem('main-dish-1')) {
//     localStorage.removeItem('main-dish-1');
//     mainButton1.setAttribute('class', '');
//     console.log(mainButton1);
//   } else if(event.target.id === 'main-dish-1'){
//     var saveRecipe = JSON.stringify(mainRecipeCiderTurkey);
//     // console.log(saveRecipe);
//     mainButton1.setAttribute('class', 'selected');
//     console.log(mainButton1);
//     localStorage.setItem('main-dish-1', saveRecipe);
//   }
// };

// var mainButton1 = document.getElementById('main-dish-1');
// mainButton1.addEventListener('submit', main1ButtonClickHandler);

// /////////////////////////////////MAIN 2/////////////////////////////////////

// var main2ButtonClickHandler = function(event){
//   event.preventDefault();
//   // console.log(event);
//   if (localStorage.getItem('main-dish-2')) {
//     localStorage.removeItem('main-dish-2');
//     mainButton2.setAttribute('class', '');
//     console.log(mainButton2);
//   } else if(event.target.id === 'main-dish-2'){
//     var saveRecipe = JSON.stringify(mainRecipeHam);
//     // console.log(saveRecipe);
//     mainButton2.setAttribute('class', 'selected');
//     console.log(mainButton2);
//     localStorage.setItem('main-dish-2', saveRecipe);
//   }
// };

// var mainButton2 = document.getElementById('main-dish-2');
// mainButton2.addEventListener('submit', main2ButtonClickHandler);

// /////////////////////////////////MAIN 3/////////////////////////////////////

// var main3ButtonClickHandler = function(event){
//   event.preventDefault();
//   if (localStorage.getItem('main-dish-3')) {
//     localStorage.removeItem('main-dish-3');
//     mainButton3.setAttribute('class', '');
//   } else if(event.target.id === 'main-dish-3'){
//     var saveRecipe = JSON.stringify(mainRecipeHam);
//     mainButton3.setAttribute('class', 'selected');
//     console.log(mainButton3);
//     localStorage.setItem('main-dish-3', saveRecipe);
//   }
// };

// var mainButton3 = document.getElementById('main-dish-3');
// mainButton3.addEventListener('submit', main3ButtonClickHandler);

// /////////////////////////////////SIDE 1/////////////////////////////////////

// var side1ButtonClickHandler = function(event){
//   event.preventDefault();
//   if (localStorage.getItem('side-dish-1')) {
//     localStorage.removeItem('side-dish-1');
//     sideButton1.setAttribute('class', '');
//   } else if(event.target.id === 'side-dish-1'){
//     var saveRecipe = JSON.stringify(sideRecipeStuffing);
//     sideButton1.setAttribute('class', 'selected');
//     localStorage.setItem('side-dish-1', saveRecipe);
//   }
// };
// var sideButton1 = document.getElementById('side-dish-1');
// sideButton1.addEventListener('submit', side1ButtonClickHandler);

// /////////////////////////////////SIDE 2/////////////////////////////////////

// var side2ButtonClickHandler = function(event){
//   event.preventDefault();
//   if (localStorage.getItem('side-dish-2')) {
//     localStorage.removeItem('side-dish-2');
//     sideButton2.setAttribute('class', '');
//   } else if(event.target.id === 'side-dish-2'){
//     var saveRecipe = JSON.stringify(sideRecipeShallots);
//     sideButton2.setAttribute('class', 'selected');
//     localStorage.setItem('side-dish-2', saveRecipe);
//   }
// };
// var sideButton2 = document.getElementById('side-dish-2');
// sideButton2.addEventListener('submit', side2ButtonClickHandler);

// /////////////////////////////////SIDE 3/////////////////////////////////////

// var side3ButtonClickHandler = function(event){
//   event.preventDefault();
//   if (localStorage.getItem('side-dish-3')) {
//     localStorage.removeItem('side-dish-3');
//     sideButton3.setAttribute('class', '');
//   } else if(event.target.id === 'side-dish-3'){
//     var saveRecipe = JSON.stringify(sideRecipeRoastedBrussels);
//     sideButton3.setAttribute('class', 'selected');
//     localStorage.setItem('side-dish-3', saveRecipe);
//   }
// };
// var sideButton3 = document.getElementById('side-dish-3');
// sideButton3.addEventListener('submit', side3ButtonClickHandler);

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

// var dessert1ButtonClickHandler = function(event){
//   event.preventDefault();
//   if (localStorage.getItem('dessert-1')) {
//     localStorage.removeItem('dessert-1');
//     dessertButton1.setAttribute('class', '');
//   } else if(event.target.id === 'dessert-1'){
//     var saveRecipe = JSON.stringify(dessertRecipePumpkinPie);
//     dessertButton1.setAttribute('class', 'selected');
//     localStorage.setItem('dessert-1', saveRecipe);
//   }
// };

// var dessertButton1 = document.getElementById('dessert-1');
// dessertButton1.addEventListener('submit', dessert1ButtonClickHandler);

// //////////////////////////////DESSERT 2/////////////////////////////////////

// var dessert2ButtonClickHandler = function(event){
//   event.preventDefault();
//   if (localStorage.getItem('dessert-2')) {
//     localStorage.removeItem('dessert-2');
//     dessertButton2.setAttribute('class', '');
//   } else if(event.target.id === 'dessert-2'){
//     var saveRecipe = JSON.stringify(dessertRecipeTart);
//     dessertButton2.setAttribute('class', 'selected');
//     localStorage.setItem('dessert-2', saveRecipe);
//   }
// };

// var dessertButton2 = document.getElementById('dessert-2');
// dessertButton2.addEventListener('submit', dessert2ButtonClickHandler);

// //////////////////////////////DESSERT 3/////////////////////////////////////

// var dessert3ButtonClickHandler = function(event){
//   event.preventDefault();
//   if (localStorage.getItem('dessert-3')) {
//     localStorage.removeItem('dessert-3');
//     dessertButton3.setAttribute('class', '');
//   } else if(event.target.id === 'dessert-3'){
//     var saveRecipe = JSON.stringify(dessertRecipeArkansas);
//     dessertButton3.setAttribute('class', 'selected');
//     localStorage.setItem('dessert-3', saveRecipe);
//   }
// };

// var dessertButton3 = document.getElementById('dessert-3');
// dessertButton3.addEventListener('submit', dessert3ButtonClickHandler);

// /////////////////////////////////BEVERAGE 1/////////////////////////////////////

// var drink1ButtonClickHandler = function(event){
//   event.preventDefault();
//   if (localStorage.getItem('beverages-1')) {
//     localStorage.removeItem('beverages-1');
//     drinkButton1.setAttribute('class', '');
//   } else if(event.target.id === 'beverages-1'){
//     var saveRecipe = JSON.stringify(beverageRecipeCider);
//     drinkButton1.setAttribute('class', 'selected');
//     localStorage.setItem('beverages-1', saveRecipe);
//   }
// };

// var drinkButton1 = document.getElementById('beverages-1');
// drinkButton1.addEventListener('submit', drink1ButtonClickHandler);

// /////////////////////////////////BEVERAGE 2/////////////////////////////////////

// var drink2ButtonClickHandler = function(event){
//   event.preventDefault();
//   if (localStorage.getItem('beverages-2')) {
//     localStorage.removeItem('beverages-2');
//     drinkButton2.setAttribute('class', '');
//   } else if(event.target.id === 'beverages-2'){
//     var saveRecipe = JSON.stringify(beverageRecipeSangria);
//     drinkButton2.setAttribute('class', 'selected');
//     localStorage.setItem('beverages-2', saveRecipe);
//   }
// };

// var drinkButton2 = document.getElementById('beverages-2');
// drinkButton2.addEventListener('submit', drink2ButtonClickHandler);

// /////////////////////////////////BEVERAGE 3/////////////////////////////////////

// var drink3ButtonClickHandler = function(event){
//   event.preventDefault();
//   if (localStorage.getItem('beverages-3')) {
//     localStorage.removeItem('beverages-3');
//     drinkButton3.setAttribute('class', '');
//   } else if(event.target.id === 'beverages-3'){
//     var saveRecipe = JSON.stringify(beverageRecipePunch);
//     drinkButton3.setAttribute('class', 'selected');
//     localStorage.setItem('beverages-3', saveRecipe);
//   }
// };

// var drinkButton3 = document.getElementById('beverages-3');
// drinkButton3.addEventListener('submit', drink3ButtonClickHandler);

