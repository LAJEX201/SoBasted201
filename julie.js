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

var recipeOne = new RecipesConstructor ('MJ Mulled Cider', 8, 'Drinks');
recipeOne.ingredientsArrayCreator ('Apple juice', .5,'Gallon', 'Juices');
recipeOne.ingredientsArrayCreator ('Cider spice', .25,'cup', 'Spices');
