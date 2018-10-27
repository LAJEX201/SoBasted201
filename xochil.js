'use strict';

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


var dessertOne = new RecipesConstructor ('The Great Pumpkin Pie Recipe', 8, 'dessert');
dessertOne.ingredientsArrayCreator ('fresh cranberries', 1,'cup', 'produce');
dessertOne.ingredientsArrayCreator ('granulated sugar', 2,'cup', 'baking');
dessertOne.ingredientsArrayCreator ('pre-made pie crust', 1, 'package', 'other-grocery');
dessertOne.ingredientsArrayCreator ('pumkin puree', 1, 'can', 'other-grocery');
dessertOne.ingredientsArrayCreator ('eggs', 3, 'each', 'dairy');
dessertOne.ingredientsArrayCreator ('packed light brown sugar', 1.25, 'cup', 'baking');
dessertOne.ingredientsArrayCreator ('cornstarch', 1, 'tablespoon', 'baking');
dessertOne.ingredientsArrayCreator ('salt', .5, 'teaspoon', 'spices');
dessertOne.ingredientsArrayCreator ('ground cinnamon', 1.5, 'teaspoon', 'spices');
dessertOne.ingredientsArrayCreator ('ground ginger', .5, 'teaspoon', 'spices');
dessertOne.ingredientsArrayCreator ('grated nutmeg', .25, 'teaspoon', 'spices');
dessertOne.ingredientsArrayCreator ('ground pepper', .125, 'teaspoon');
dessertOne.ingredientsArrayCreator ('heavy cream', 1, 'cup', 'cup', 'dairy');
dessertOne.ingredientsArrayCreator ('milk', .25, 'cup', 'dairy');
dessertOne.ingredientsArrayCreator ('egg', 1, 'each', 'dairy');
dessertOne.ingredientsArrayCreator ('milk', 1, 'tablespoon', 'dairy');

var dessertTwo = new RecipesConstructor ('Cranberry-Almond Shortbread Tart', 8, 'dessert');
dessertTwo.ingredientsArrayCreator ('granulated sugar', 1, 'cup', 'baking');
dessertTwo.ingredientsArrayCreator ('fresh lemon juice', 2, 'tablespoon', 'produce');
dessertTwo.ingredientsArrayCreator ('fresh or thawed cranberries', 12, 'ounces', 'frozen');
dessertTwo.ingredientsArrayCreator ('apricot jam', 3, 'tablespoons', 'condiments');
dessertTwo.ingredientsArrayCreator ('sliced almonds', 3.5, 'cups', 'nuts');
dessertTwo.ingredientsArrayCreator ('all-purpose flour', 2, 'cup', 'baking');
dessertTwo.ingredientsArrayCreator ('fine yellow cornmeal', .25, 'cup', 'baking');
dessertTwo.ingredientsArrayCreator ('salt', .75, 'teaspoon', 'baking');
dessertTwo.ingredientsArrayCreator ('unsalted butter', 1, 'cup', 'dairy');
dessertTwo.ingredientsArrayCreator ('granulated sugar', 1, 'cup', 'baking');
dessertTwo.ingredientsArrayCreator ('lemon zest', .5, 'teaspoon', 'produce');
dessertTwo.ingredientsArrayCreator ('pure vanilla extract', .75, 'teaspoon', 'spices');
dessertTwo.ingredientsArrayCreator ('pure almond extract', .25, 'teaspoon', 'baking');
dessertTwo.ingredientsArrayCreator ('egg', 1, 'each', 'dairy');//this is one large yolk.. how will we handle that?
dessertTwo.ingredientsArrayCreator ('cooking spray', 1, 'spray', 'baking'); //how do we do the cooking spray?
dessertTwo.ingredientsArrayCreator ('confectioners sugar', 1, 'teaspoon', 'baking'); //there is not actually a measure for the sugar...

var dessertThree = new RecipesConstructor ('Arkansas Black Apple Pie with Caramel Sauce Recipe', 8, 'dessert');
dessertThree.ingredientsArrayCreator ('granny smith apples', 6, 'each', 'produce');
dessertThree.ingredientsArrayCreator ('lemon juice', 1, 'each', 'produce');
dessertThree.ingredientsArrayCreator ('granulated sugar', 1, 'cup', 'baking');
dessertThree.ingredientsArrayCreator ('all-purpose flour', .25, 'cup', 'baking');
dessertThree.ingredientsArrayCreator ('cinnamon', 1, 'teaspoon', 'spices');
dessertThree.ingredientsArrayCreator ('nutmeg', .5, 'teaspoon', 'spices');
dessertThree.ingredientsArrayCreator ('allspice', .25, 'teaspoon', 'spices');
dessertThree.ingredientsArrayCreator ('pre-made pie crust', 1, 'each', 'other-store');
dessertThree.ingredientsArrayCreator ('butter', 2, 'tablespoon', 'dairy');
dessertThree.ingredientsArrayCreator ('egg', 1, 'each', 'dairy');
dessertThree.ingredientsArrayCreator ('sugar', 2, 'tablespoons', 'baking');


var app1ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('appetizer-1')) {
    localStorage.removeItem('appetizer-1');
    appButton1.setAttribute('class', '');
    console.log(appButton1);
  } else if(event.target.id === 'appetizer-1'){
    var saveRecipe = JSON.stringify(appRecipePecan);
    // console.log(saveRecipe);
    appButton1.setAttribute('class', 'selected');
    console.log(appButton1);
    localStorage.setItem('appetizer-1', saveRecipe);
  }

};

var appButton1 = document.getElementById('appetizer-1');
appButton1.addEventListener('submit', app1ButtonClickHandler);


var app2ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('appetizer-2')) {
    localStorage.removeItem('appetizer-2');
    appButton2.setAttribute('class', '');
    console.log(appButton2);
  } else if(event.target.id === 'appetizer-2'){
    var saveRecipe = JSON.stringify(appRecipeBrie);
    // console.log(saveRecipe);
    appButton2.setAttribute('class', 'selected');
    console.log(appButton2);
    localStorage.setItem('appetizer-2', saveRecipe);
  }

};

var appButton2 = document.getElementById('appetizer-2');
appButton2.addEventListener('submit', app2ButtonClickHandler);


var app3ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('appetizer-3')) {
    localStorage.removeItem('appetizer-3');
    appButton3.setAttribute('class', '');
    console.log(appButton3);
  } else if(event.target.id === 'appetizer-3'){
    var saveRecipe = JSON.stringify(appRecipePoppers);
    // console.log(saveRecipe);
    appButton3.setAttribute('class', 'selected');
    console.log(appButton3);
    localStorage.setItem('appetizer-3', saveRecipe);
  }

};

var appButton3 = document.getElementById('appetizer-3');
appButton3.addEventListener('submit', app3ButtonClickHandler);

var drink1ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('beverages-1')) {
    localStorage.removeItem('beverages-1');
    drinkButton1.setAttribute('class', '');
    console.log(drinkButton1);
  } else if(event.target.id === 'beverages-1'){
    var saveRecipe = JSON.stringify(cider);
    // console.log(saveRecipe);
    drinkButton1.setAttribute('class', 'selected');
    console.log(drinkButton1);
    localStorage.setItem('beverages-1', saveRecipe);
  }

};

var drinkButton1 = document.getElementById('beverages-1');
drinkButton1.addEventListener('submit', drink1ButtonClickHandler);


var drink2ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('beverages-2')) {
    localStorage.removeItem('beverages-2');
    drinkButton2.setAttribute('class', '');
    console.log(drinkButton2);
  } else if(event.target.id === 'beverages-2'){
    var saveRecipe = JSON.stringify(sangria);
    // console.log(saveRecipe);
    drinkButton2.setAttribute('class', 'selected');
    console.log(drinkButton2);
    localStorage.setItem('beverages-2', saveRecipe);
  }

};

var drinkButton2 = document.getElementById('beverages-2');
drinkButton2.addEventListener('submit', drink2ButtonClickHandler);


var drink3ButtonClickHandler = function(event){
  event.preventDefault();
  // console.log(event);
  if (localStorage.getItem('beverages-3')) {
    localStorage.removeItem('beverages-3');
    drinkButton3.setAttribute('class', '');
    console.log(drinkButton3);
  } else if(event.target.id === 'beverages-3'){
    var saveRecipe = JSON.stringify(punch);
    // console.log(saveRecipe);
    drinkButton3.setAttribute('class', 'selected');
    console.log(drinkButton3);
    localStorage.setItem('beverages-3', saveRecipe);
  }

};

var drinkButton3 = document.getElementById('beverages-3');
drinkButton3.addEventListener('submit', drink3ButtonClickHandler);






