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
    };
  };
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

  var mainrecipeHam = new RecipesConstructor ('BOURBON ORANGE GLAZED HAM', 10, 'MAIN DISH');
  mainrecipeHam.ingredientsArrayCreator('ORANGE MARMALADE', .75, 'CUPS', 'CONDIMENTS');
  mainrecipeHam.ingredientsArrayCreator('MAPLE SYRUP', .25, 'CUPS', 'CONDIMENTS');
  mainrecipeHam.ingredientsArrayCreator('WHOLE-GRAIN DIJON MUSTARD', .25, 'CUPS', 'CONDIMENTS');
  mainrecipeHam.ingredientsArrayCreator('BOURBON', .25, 'CUPS', 'WINE & LIQUOR');
  mainrecipeHam.ingredientsArrayCreator('LEMON JUICE', 2, 'TBS', 'PRODUCE');
  mainrecipeHam.ingredientsArrayCreator('GROUND GINGER', .5, 'TSP', 'SPICES');
  mainrecipeHam.ingredientsArrayCreator('BONE-IN HALF HAM', 10, 'LBS', 'MEAT');

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
  var dessertRecipePumkinPie = new RecipesConstructor ('The Great Pumpkin Pie Recipe', 8, 'dessert');
  dessertRecipePumkinPie.ingredientsArrayCreator ('fresh cranberries', 1,'cup', 'produce');
  dessertRecipePumkinPie.ingredientsArrayCreator ('granulated sugar', 2,'cup', 'baking');
  dessertRecipePumkinPie.ingredientsArrayCreator ('pre-made pie crust', 1, 'package', 'other-grocery');
  dessertRecipePumkinPie.ingredientsArrayCreator ('pumkin puree', 1, 'can', 'other-grocery');
  dessertRecipePumkinPie.ingredientsArrayCreator ('eggs', 3, 'each', 'dairy');
  dessertRecipePumkinPie.ingredientsArrayCreator ('packed light brown sugar', 1.25, 'cup', 'baking');
  dessertRecipePumkinPie.ingredientsArrayCreator ('cornstarch', 1, 'tablespoon', 'baking');
  dessertRecipePumkinPie.ingredientsArrayCreator ('salt', .5, 'teaspoon', 'spices');
  dessertRecipePumkinPie.ingredientsArrayCreator ('ground cinnamon', 1.5, 'teaspoon', 'spices');
  dessertRecipePumkinPie.ingredientsArrayCreator ('ground ginger', .5, 'teaspoon', 'spices');
  dessertRecipePumkinPie.ingredientsArrayCreator ('grated nutmeg', .25, 'teaspoon', 'spices');
  dessertRecipePumkinPie.ingredientsArrayCreator ('ground pepper', .125, 'teaspoon', 'spices');
  dessertRecipePumkinPie.ingredientsArrayCreator ('heavy cream', 1, 'cup', 'cup', 'dairy');
  dessertRecipePumkinPie.ingredientsArrayCreator ('milk', .25, 'cup', 'dairy');
  dessertRecipePumkinPie.ingredientsArrayCreator ('egg', 1, 'each', 'dairy');
  dessertRecipePumkinPie.ingredientsArrayCreator ('milk', 1, 'tablespoon', 'dairy');

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
  var cider = new RecipesConstructor('MJ\'s Mulled Cider', 8, 'beverages');
  cider.ingredientsArrayCreator('Apple Juice', 0.5, 'gallon', 'juice');
  cider.ingredientsArrayCreator('Cider Mate Mulling Spice', 0.25, 'cup', 'spices');

  var sangria = new RecipesConstructor('Apple Cider Autumn Sangria', 6, 'beverages');
  sangria.ingredientsArrayCreator('cinnamon sticks', 2, 'each', 'spices');
  sangria.ingredientsArrayCreator('medium pear', 1, 'each', 'produce');
  sangria.ingredientsArrayCreator('medium orange', 1, 'each', 'produce');
  sangria.ingredientsArrayCreator('pomegranate seeds', 0.666, 'cup', 'produce');
  sangria.ingredientsArrayCreator('bottle white wine', 1, 'bottle', 'liquor');
  sangria.ingredientsArrayCreator('apple cider', 2, 'cup', 'juice');
  sangria.ingredientsArrayCreator('brandy', 0.5, 'cup', 'liquor');
  sangria.ingredientsArrayCreator('orange juice', 0.25, 'juice', 'juice');
  sangria.ingredientsArrayCreator('lemon juice', 2, 'tablespoon', 'produce');
  sangria.ingredientsArrayCreator('club soda', 1, 'serving', 'juice');

  var punch = new RecipesConstructor('Lusious Slush Punch', 24, 'beverages');
  punch.ingredientsArrayCreator('white sugar', 2.5, 'cup', 'baking');
  punch.ingredientsArrayCreator('lemon juice', 0.666, 'cup', 'produce');
  punch.ingredientsArrayCreator('orange juice', 1, 'quart', 'juice');
  punch.ingredientsArrayCreator('lemon-lime flavored carbonated beverage', 2, '2-liter bottles', 'juice');
  punch.ingredientsArrayCreator('strawberry flavored mix', 6, 'ounces', 'baking');
  punch.ingredientsArrayCreator('canned pineapple juice', 46, 'fluid ounces', 'juice');
