
// =====================
// 10-25-18 jl added to MAIN.JSON
// ======================
// 'use strict';

// var allRecipes = [];

// var RecipesConstructor = function(name, servings, course){
//   this.name = name;
//   this.servings = servings;
//   this.course = course;
//   this.ingredients = [];
//   allRecipes.push(this);
// };

// var IngredientsConstructor = function (name, qty, measurementunit, location) {
//   this.name = name;
//   this.quantity = qty;
//   this.measurementunit = measurementunit;
//   this.location = location;
// };

// RecipesConstructor.prototype.ingredientsArrayCreator = function (name, qty, measurementunit, location) {
//   var ingredOne = new IngredientsConstructor (name, qty, measurementunit, location);
//   this.ingredients.push(ingredOne);
// };

// var recipeOne = new RecipesConstructor ('MJ Mulled Cider', 8, 'Drinks');
// recipeOne.ingredientsArrayCreator ('Apple juice', .5,'Gallon', 'Juices');
// recipeOne.ingredientsArrayCreator ('Cider spice', .25,'cup', 'Spices');
// =====================
// 
// ======================

/*
10-25-18 
 note to self: 
-need to fix the css refs in about/list/menu htmls
-don't touch index.html until saturday/after erin has pushed/merge, she is doing a bunch of updates in it
-my homework to finish before saturday is to build the side dishes objects
-homework for end of day saturday is render my menu list and have the remove function working (includes removing it from local storage (which might be it;s own function like the busmall shopping cart))
*/

/*
example format for obj creation
var recipeOne = new RecipesConstructor ('MJ Mulled Cider', 8, 'Drinks');
recipeOne.ingredientsArrayCreator ('Apple juice', .5,'Gallon', 'Juices');
recipeOne.ingredientsArrayCreator ('Cider spice', .25,'cup', 'Spices');
*/

//var template = new RecipesConstructor ('name', # of servings, Category)
//template.ingredientsArrayCreator ('name', measurement (#) ,'measurement type', 'store isle');
/*
Here is the list of courses for the building of recipes... Appetizer, Main Dish, Side Dish, Dessert, Beverage (don't make them plural)

Array for Grocery Department = ['Spices', 'Nuts', 'Dairy', 'Condiments', 'Produce', 'Other-Grocery', 'Baking', 'Meat', 'Frozen', 'Juice & Beverages', 'Wine & Liquor']

Questions and concerns: 
-when ingredients without measurements, like "Kosher salt", do i omit, do i enter and just put in something of my choice, etc 
we can't do a 'contains' function because there is a diff of cranberries and dried cranberries
*/

// =====================
// 
// ======================
var recipeCranCornStuffing = new RecipesConstructor ('Cranberry Cornbread Stuffing', 10, 'Side Dish');
recipeCranCornStuffing.ingredientsArrayCreator ('Olive oil', 1, 'tsp', 'Baking');
recipeCranCornStuffing.ingredientsArrayCreator ('Italian sausage', 1, 'lb', 'Meat');
recipeCranCornStuffing.ingredientsArrayCreator ('Unsalted butter', 2, 'tbsp', 'Dairy');
recipeCranCornStuffing.ingredientsArrayCreator ('Celery stalk', 2, 'each', 'Produce');
recipeCranCornStuffing.ingredientsArrayCreator ('Yellow onion', .5, 'each', 'Produce');
recipeCranCornStuffing.ingredientsArrayCreator ('Tart apple', 1, 'each', 'Produce');
recipeCranCornStuffing.ingredientsArrayCreator ('dried sage leaves', .5, 'tsp', 'Spices');
recipeCranCornStuffing.ingredientsArrayCreator ('black pepper', .5, 'tsp', 'Spices');
recipeCranCornStuffing.ingredientsArrayCreator ('Low-sodium chicken broth', 1.5, 'cup', 'Other-Grocery');
recipeCranCornStuffing.ingredientsArrayCreator ('Egg', 1, 'each', 'Dairy');
recipeCranCornStuffing.ingredientsArrayCreator ('Dried cranberries', .5, 'cup', 'Other-Grocery');
recipeCranCornStuffing.ingredientsArrayCreator ('STOVE TOP Cornbread Stuffing Mix (6 oz.)', 1, 'each', 'Other-Grocery');
recipeCranCornStuffing.ingredientsArrayCreator ('fresh sage leaves', 1, 'each', 'Produce'); //fresh sage leaves for garnish, should i have left this one off?

//================================
var recipeMashPotatCarmShallots = new RecipesConstructor ('Mashed Potatoes with Caramelized Shallots', 8, 'Side Dish');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Extra-virgin olive oil', 2, 'tbs', 'Baking');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Shallots', 2, 'cup', 'Produce');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Kosher salt', 1, 'each', 'Spices'); //Kosher salt, no measurements
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Yukon Gold potatoes', 4, 'lb', 'Produce');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Unsalted butter', 1, 'cup', 'Dairy');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Crème fraîche', 1, 'cup', 'Dairy');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Whole milk', .5, 'cup', 'Dairy');
recipeMashPotatCarmShallots.ingredientsArrayCreator ('Freshly ground black pepper', 1, 'each', 'Spices');

//================================
//http://yestoyolks.com/2014/01/06/roasted-brussels-sprouts-with-balsamic-caramelized-onions-bacon/ 
//link didn't work, even when i googled
var recipeRoastedBrussOnionBacon = new RecipesConstructor ('Roasted Brussels Sprouts with Balsamin Carmelized Onions & Bacon', 4, 'Side Dish');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Brussel Sprouts', 4, 'cup', 'Produce');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Bacon', 4, 'each', 'Meat');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Butter', 1, 'tbsp', 'Dairy');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Onion', 1, 'each', 'Produce');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Red pepper flakes', 1, 'each', 'Spices'); //it was 1 pinch
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Sugar', 2, 'tsp', 'Baking');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Balsamic vinegar', .5, 'cup', 'Baking');
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Salt', 1, 'each', 'Spices'); //was to taste
recipeRoastedBrussOnionBacon.ingredientsArrayCreator ('Pepper', 1, 'each', 'Spices'); //was to taste

//================================
var recipeUltGreenBeanCass = new RecipesConstructor ('The Ultimate Homemade Green Bean Casserole Recipe', 8, 'Side Dish');
recipeUltGreenBeanCass.ingredientsArrayCreator ('shallots', 1, 'lb', 'Produce');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Canola oil', 2, 'cup', '');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Kosher salt', 1, 'each', 'Spices');
recipeUltGreenBeanCass.ingredientsArrayCreator ('White button mushroom', .5, 'lb', 'Produce');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Soy sauce', 2, 'tsp', 'Condiments');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Lemon juice', 2, 'tsp', 'Produce');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Low-sodium chicken broth', 2, 'cup', 'Other-Grocery');recipeUltGreenBeanCass.ingredientsArrayCreator ('Heavy cream', 1.5, 'cup', 'Dairy');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Butter', 2, 'tbsp', 'Dairy');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Garlic', 2, 'each', 'Produce'); //2 cloves
recipeUltGreenBeanCass.ingredientsArrayCreator ('Flour', .25, 'cup', 'Baking');
recipeUltGreenBeanCass.ingredientsArrayCreator ('Pepper', 1, 'each', 'Spices'); //Freshly ground black pepper
recipeUltGreenBeanCass.ingredientsArrayCreator ('Green beans', 2, 'lb', 'Produce');

//================================
var recipeOrngMapleCran = new RecipesConstructor ('Orange Maple Cranberry Sauce', 6, 'Side Dish');
recipeOrngMapleCran.ingredientsArrayCreator ('Frozen cranberries', 3, 'cup', 'Frozen');
recipeOrngMapleCran.ingredientsArrayCreator ('Pure maple syrup', .33, 'cup', 'Condiments');
recipeOrngMapleCran.ingredientsArrayCreator ('orange zest', 1, 'tbsp', 'Produce');
recipeOrngMapleCran.ingredientsArrayCreator ('fresh orange juice', .5, 'cup', 'Juice & Beverages');
recipeOrngMapleCran.ingredientsArrayCreator ('Cinnamon stick', 1, 'each', 'Spices');
//omitted: 1/2 cup water

//================================
var recipeCreamCorn = new RecipesConstructor ('Creamed Corn', 4, 'Side Dish');
recipeCreamCorn.ingredientsArrayCreator ('frozen corn', 10, 'oz', 'Frozen');
recipeCreamCorn.ingredientsArrayCreator ('Butter', 3, 'tbsp', 'Dairy');
recipeCreamCorn.ingredientsArrayCreator ('Flour', 3, 'tbsp', 'Baking');
recipeCreamCorn.ingredientsArrayCreator ('Milk', 2, 'cup', 'Dairy');
recipeCreamCorn.ingredientsArrayCreator ('Sugar', 2, 'tbsp', 'Spices');
//omitted: water, for cooking corn

// =====================
// 
// ======================
