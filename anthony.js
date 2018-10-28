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

var cider = new RecipesConstructor('MJ\'s Mulled Cider', 8, 'beverages');
cider.ingredientsArrayCreator('Apple Juice', 0.5, 'gallon', 'juice',cider);
cider.ingredientsArrayCreator('Cider Mate Mulling Spice', 0.25, 'cup', 'spices', cider);
var sangria = new RecipesConstructor('Apple Cider Autumn Sangria', 6, 'beverages');
sangria.ingredientsArrayCreator('cinnamon sticks', 2, 'each', 'spices',sangria);
sangria.ingredientsArrayCreator('medium pear', 1, 'each', 'produce', sangria);
sangria.ingredientsArrayCreator('medium orange', 1, 'each', 'produce', sangria);
sangria.ingredientsArrayCreator('pomegranate seeds', 0.666, 'cup', 'produce', sangria);
sangria.ingredientsArrayCreator('bottle white wine', 1, 'bottle', 'liquor', sangria);
sangria.ingredientsArrayCreator('apple cider', 2, 'cup', 'juice', sangria);
sangria.ingredientsArrayCreator('brandy', 0.5, 'cup', 'liquor', sangria);
sangria.ingredientsArrayCreator('orange juice', 0.25, 'juice', 'juice', sangria);
sangria.ingredientsArrayCreator('lemon juice', 2, 'tablespoon', 'produce', sangria);
sangria.ingredientsArrayCreator('club soda', 1, 'serving', 'juice', sangria);
var punch = new RecipesConstructor('Lusious Slush Punch', 24, 'beverages');
punch,ingredientsArrayCreator('white sugar', 2.5, 'cup', 'baking', punch);
punch,ingredientsArrayCreator('lemon juice', 0.666, 'cup', 'produce', punch);
punch,ingredientsArrayCreator('orange juice', 1, 'quart', 'juice', punch);
punch,ingredientsArrayCreator('lemon-lime flavored carbonated beverage', 2, '2-liter bottles', 'juice', punch);
punch,ingredientsArrayCreator('strawberry flavored mix', 6, 'ounces', 'baking', punch);
punch,ingredientsArrayCreator('canned pineapple juice', 46, 'fluid ounces', 'juice', punch);
var pecans = new RecipesConstructor('', , 'beverages');
pecans.ingredientsArrayCreator('salt', 4, 'teaspoon', 'spices', pecans);
pecans.ingredientsArrayCreator('cayeene', 0.5, 'teaspoon', 'spices', pecans);
pecans.ingredientsArrayCreator('white pepper', 1, 'teaspoon', 'spices', pecans);
pecans.ingredientsArrayCreator('nutmeg', 1, 'teaspoon', 'spices', pecans);
pecans.ingredientsArrayCreator('cloves', 1, 'teaspoon', 'spices', pecans);
pecans.ingredientsArrayCreator('allspice', 1, 'teaspoon', 'spices', pecans);
pecans.ingredientsArrayCreator('pecan halves', 4, 'cup', 'nuts', pecans);
pecans.ingredientsArrayCreator('butter', 0.25, 'cup', 'dairy', pecans);
pecans.ingredientsArrayCreator('dark maple syrup', 0.333, 'cup', 'condiments', pecans);
var brie = new RecipesConstructor('', , 'beverages');
brie.ingredientsArrayCreator('butter', 1, 'tablespoon', 'dairy', brie);
brie.ingredientsArrayCreator('small tart apple', 1, 'each', 'produce', brie);
brie.ingredientsArrayCreator('dried cranberries', 0.333, 'cup', 'other grocery', brie);
brie.ingredientsArrayCreator('chopped pecans', 0.25, 'cup', 'nuts', brie);
brie.ingredientsArrayCreator('brown sugar', 1, 'tablespoon', 'baking', brie);
brie.ingredientsArrayCreator('ground cinnamon', 0.25, 'teaspoon', 'spices', brie);
brie.ingredientsArrayCreator('ground nutmeg', 1, 'dash', 'spices', brie);
brie.ingredientsArrayCreator('Brie cheese', 8, 'ounces', 'dairy', brie);
brie.ingredientsArrayCreator('crakers', 1, 'assorted', 'other grocery', brie);
var poppers = new RecipesConstructor('Jalapeno Popper Cups', 4, 'beverages');
poppers.ingredientsArrayCreator('mini phyllo tart shells', 12, 'each', 'frozen', poppers);
poppers.ingredientsArrayCreator('cream cheese', 4, 'ounces', 'dairy', poppers);
poppers.ingredientsArrayCreator('shredded cheddar cheese', 0.5, 'cup', 'dairy', poppers);
poppers.ingredientsArrayCreator('jalapeno peppers', 2, 'each', 'produce', poppers);
poppers.ingredientsArrayCreator('hot pepper sauce', 1, 'tablespoon', 'condiments', poppers);
poppers.ingredientsArrayCreator('bacon bits', 1, 'dash', 'meat', poppers);

//===============================================================================================================================================================================
//  Math Function for Recipe and Multiplier
//===============================================================================================================================================================================

var ingredients = []
var allRecipesSelected1;
var allRecipesSelected2;
var allRecipesSelected3;
var allRecipesSelected4;
var allRecipesSelected5;
var allRecipesSelected6;
var allRecipesSelected7;
var allRecipesSelected8;
var allRecipesSelected9;
var allRecipesSelected10;
var allRecipesSelected11;
var allRecipesSelected12;
var allRecipesSelected13;
var allRecipesSelected14;
var allRecipesSelected15;
// var allRecipesSelected16;
// var allRecipesSelected17;
// var allRecipesSelected18;

if(localStorage.getItem('appetizer-1')){
  allRecipesSelected1 = localStorage.getItem('appetizer-1')
  allRecipesSelected1 = JSON.parse(allRecipesSelected1);
  for(var c = 0; c < allRecipesSelected1.length; c++){
    for(var d = 0; d < allRecipesSelected1[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected1[c].ingredients);
  };
};
if(localStorage.getItem('appetizer-2')){
  allRecipesSelected2 = localStorage.getItem('appetizer-2')
  allRecipesSelected2 = JSON.parse(allRecipesSelected2);
  for(var c = 0; c < allRecipesSelected2.length; c++){
    for(var d = 0; d < allRecipesSelected2[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected2[c].ingredients);
  };
};
if(localStorage.getItem('appetizer-3')){
  allRecipesSelected3 = localStorage.getItem('appetizer-3')
  allRecipesSelected3 = JSON.parse(allRecipesSelected3);
  for(var c = 0; c < allRecipesSelected3.length; c++){
    for(var d = 0; d < allRecipesSelected3[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected3[c].ingredients);
  };
};
if(localStorage.getItem('main-dish-1')){
  allRecipesSelected4 = localStorage.getItem('main-dish-1')
  allRecipesSelected4 = JSON.parse(allRecipesSelected4);
  for(var c = 0; c < allRecipesSelected4.length; c++){
    for(var d = 0; d < allRecipesSelected4[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected4[c].ingredients);
  };
};
if(localStorage.getItem('main-dish-2')){
  allRecipesSelected5 = localStorage.getItem('main-dish-2')
  allRecipesSelected5 = JSON.parse(allRecipesSelected5);
  for(var c = 0; c < allRecipesSelected5.length; c++){
    for(var d = 0; d < allRecipesSelected5[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected5[c].ingredients);
  };
};
if(localStorage.getItem('main-dish-3')){
  allRecipesSelected6 = localStorage.getItem('main-dish-3')
  allRecipesSelected6 = JSON.parse(allRecipesSelected6);
  for(var c = 0; c < allRecipesSelected6.length; c++){
    for(var d = 0; d < allRecipesSelected6[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected6[c].ingredients);
  };
};
if(localStorage.getItem('side-dish-1')){
  allRecipesSelected7 = localStorage.getItem('side-dish-1')
  allRecipesSelected7 = JSON.parse(allRecipesSelected7);
  for(var c = 0; c < allRecipesSelected7.length; c++){
    for(var d = 0; d < allRecipesSelected7[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected7[c].ingredients);
  };
};
if(localStorage.getItem('side-dish-2')){
  allRecipesSelected8 = localStorage.getItem('side-dish-2')
  allRecipesSelected8 = JSON.parse(allRecipesSelected8);
  for(var c = 0; c < allRecipesSelected8.length; c++){
    for(var d = 0; d < allRecipesSelected8[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected8[c].ingredients);
  };
};
if(localStorage.getItem('side-dish-3')){
  allRecipesSelected9 = localStorage.getItem('side-dish-3')
  allRecipesSelected9 = JSON.parse(allRecipesSelected9);
  for(var c = 0; c < allRecipesSelected9.length; c++){
    for(var d = 0; d < allRecipesSelected9[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected9[c].ingredients);
  };
};
if(localStorage.getItem('dessert-1')){
  allRecipesSelected10 = localStorage.getItem('dessert-1')
  allRecipesSelected10 = JSON.parse(allRecipesSelected10);
  for(var c = 0; c < allRecipesSelected10.length; c++){
    for(var d = 0; d < allRecipesSelected10[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected10[c].ingredients);
  };
};
if(localStorage.getItem('dessert-2')){
  allRecipesSelected11 = localStorage.getItem('dessert-2')
  allRecipesSelected11 = JSON.parse(allRecipesSelected11);
  for(var c = 0; c < allRecipesSelected11.length; c++){
    for(var d = 0; d < allRecipesSelected11[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected11[c].ingredients);
  };
};
if(localStorage.getItem('dessert-3')){
  allRecipesSelected12 = localStorage.getItem('dessert-3')
  allRecipesSelected12 = JSON.parse(allRecipesSelected12);
  for(var c = 0; c < allRecipesSelected12.length; c++){
    for(var d = 0; d < allRecipesSelected12[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected12[c].ingredients);
  };
};
if(localStorage.getItem('beverages-1')){
  allRecipesSelected13 = localStorage.getItem('beverages-1')
  allRecipesSelected13 = JSON.parse(allRecipesSelected13);
  for(var c = 0; c < allRecipesSelected13.length; c++){
    for(var d = 0; d < allRecipesSelected13[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected13[c].ingredients);
  };
};
if(localStorage.getItem('beverages-2')){
  allRecipesSelected14 = localStorage.getItem('beverages-2')
  allRecipesSelected14 = JSON.parse(allRecipesSelected14);
  for(var c = 0; c < allRecipesSelected14.length; c++){
    for(var d = 0; d < allRecipesSelected14[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected14[c].ingredients);
  };
};
if(localStorage.getItem('beverages-3')){
  allRecipesSelected15 = localStorage.getItem('beverages-3')
  allRecipesSelected15 = JSON.parse(allRecipesSelected15);
  for(var c = 0; c < allRecipesSelected15.length; c++){
    for(var d = 0; d < allRecipesSelected15[c].ingredients.length; d++){
      ingredients.push(allRecipesSelected15[c].ingredients);
  };
};
// if(localStorage.getItem('beverages-3')){
//   allRecipesSelected16 = localStorage.getItem('beverages-3')
//   allRecipesSelected16 = JSON.parse(allRecipesSelected16);
//   for(var c = 0; c < allRecipesSelected16.length; c++){
//    for(var d = 0; d < allRecipesSelected16[c].ingredients.length; d++){
//     ingredients.push(allRecipesSelected16[c].ingredients);
// };
// };
// if(localStorage.getItem('beverages-3')){
//   allRecipesSelected17 = localStorage.getItem('beverages-3')
//   allRecipesSelected17 = JSON.parse(allRecipesSelected17);
// for(var c = 0; c < allRecipesSelected17.length; c++){
  // for(var d = 0; d < allRecipesSelected17[c].ingredients.length; d++){
    // ingredients.push(allRecipesSelected17[c].ingredients);
// };
// };
// if(localStorage.getItem('beverages-3')){
//   allRecipesSelected18 = localStorage.getItem('beverages-3')
//   allRecipesSelected18 = JSON.parse(allRecipesSelected18);
//   for(var c = 0; c < allRecipesSelected18.length; c++){
//    for(var d = 0; d < allRecipesSelected18[c].ingredients.length; d++){
//     ingredients.push(allRecipesSelected18[c].ingredients);
// };
// };
var totaledIngre = []
var renderToTable;
for(var r = 0; r < ingredients.length; r++){
  for(var s = r+1; s < ingredients.length; s++){
    if(ingredients[r].name === ingredients[s].name){
       = ingredients[r]+ingredients[s]; 
      totaledIngre.push()
    };
  };
};

//===============================================================================================================================================================================
//  Render Shopping List Table
//===============================================================================================================================================================================
var tableHeaders = ['Spices', 'Nuts', 'Dairy', 'Condiments', 'Produce', 'Other-Grocery', 'Baking', 'Meat', 'Frozen', 'Juice & Beverages', 'Wine & Liquor'];
var shopListTable = document.getElementById('shopping-list');

var renderAsATableHeader = function(){
  var theadEl = document.getElementById('thead');
  for(var h = 0; h < tableHeaders.length; h++){
    var tdEl = document.createElement('td');
    tdEl.textContent = tableHeaders[h];
    // if(){
      theadEl.appendChild(tdEl);
    // }
    var renderAsATableBody = function(){
      for(var i = 0; i < ingredients.length; i++) {
        var tbEl = document.getElementById('tbody');
        var trEl = document.createElement('tr');
        tdEl = document.createElement('td');
        tdel.textContent = totaledIngre;
        trEl.appendChild(tdEl);
        tbEl.appendChild(trEl);
        shopListTable.appendChild(tbEl);
      };
    };
    renderAsATableBody();
  };
  shopListTable.appendChild(theadEl);
};

renderAsATableHeader();
