'use strict';

var allRecipes = [];

var RecipesConstructor = function(name, servings, course){
  this.name = name;
  this.servings = servings;
  this.course = course;
  this.ingredients = [];
  allRecipes.push(this);
};

var IngredientConstructor = function(name, quantity, unitOfMeasure, storeDepartment){
  this.name = name;
  this.quantity = quantity;
  this.unitOfMeasure = unitOfMeasure;
  this.storeDepartment = storeDepartment;
};
